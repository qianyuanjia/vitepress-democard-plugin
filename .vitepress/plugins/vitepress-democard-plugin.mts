import { Plugin } from 'vitepress'
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';

function replaceAsync(str: string, match: RegExp, replacer: (substring: string, ...args: any[]) => Promise<string>) {
    const promises: Promise<string>[] = []
    str.replace(match, (...args) => {
        promises.push(replacer(...args))
        return ''
    })
    return Promise.all(promises).then(replacements => str.replace(match, () => replacements.shift()!))
}

function md5Hash(input: string): string {
    const hash = crypto.createHash('md5');
    hash.update(input);
    return hash.digest('hex');
}


export const vitepressDemoCardPlugin: Plugin = {
    name: 'vitepress-democard-plugin',
    enforce: 'pre',
    async transform(code, id) {
        if (id.endsWith('.md')) {
            const importSet = new Set<string>()
            let transformedCode = await replaceAsync(code, /<\$(.*?)\$>/g, async (match, $1) => {
                const demoPath = $1?.trim();
                if (!demoPath) return match;
                const filePath = path.resolve(id, '..', demoPath);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const code = encodeURIComponent(fileContent)
                const demoComp = `Demo${md5Hash(demoPath)}`
                const lang = path.extname(demoPath).slice(1)
                importSet.add(`const ${demoComp} = defineAsyncComponent(() => import('${demoPath}'))`)
                return `
                    <Suspense>
                        <DemoContainer code="${code}" lang=${lang}>
                            <${demoComp} />
                        </DemoContainer>
                        <template #fallback>Loading demo...</template>
                    </Suspense>
                `.trim() + '\n'
            })

            if (importSet.size) {
                const head = `
                <script setup>
                    import { defineAsyncComponent } from 'vue'
                    import DemoContainer from '@/components/DemoContainer/index.vue';
                    ${Array.from(importSet).join('\n')}
                </script>
                `.trim() + '\n'
                transformedCode = head + transformedCode;
            }

            return {
                code: transformedCode,
                map: null,
            }
        }
    }
}
