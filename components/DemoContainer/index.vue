<template>
    <div class="vp-doc">
        <details class="details custom-block">
            <summary>
                demo演示
            </summary>
            <slot></slot>
        </details>
        <details class="details custom-block">
            <summary>
                代码示例
            </summary>
            <div :class='`language-${lang}`'>
                <button title="复制代码" class="copy"></button>
                <span class="lang">{{lang}}</span>
                <div v-html="codeHtml"></div>
            </div>
        </details>
    </div>
</template>
<script setup lang="ts">
import {ref,watch} from 'vue'
import { useData } from 'vitepress'
import {
    codeToHtml,
} from 'shiki'
const props = defineProps<{
    code: string;
    lang: string;
}>()
const {isDark} = useData()
const codeHtml = ref('')
const sourceCode = decodeURIComponent(props.code)
watch(isDark,async (dark)=>{
    codeHtml.value = await codeToHtml(sourceCode, {
        lang: 'vue',
        theme: dark?'vitesse-dark':'vitesse-light',
        // transformers: [],
    })
},{immediate:true})
</script>
