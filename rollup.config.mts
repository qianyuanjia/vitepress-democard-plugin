import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import path from 'node:path'

export default defineConfig([
  {
    input: './plugins/vitepress-democard-plugin.mts',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
    ],
    plugins: [
      {
        name: "row-loader",
        resolveId(id) {
          if (id.endsWith('?raw')) {
            return path.resolve('./plugins', id.replace('?raw', ''));
          }
        },
        transform(code, id) {
          if (id.endsWith('txt')) {
            return {
              code: `export default ${JSON.stringify(code)};`,
              map: { mappings: "" }
            };
          }
        }
      },
      typescript({
        compilerOptions: { lib: ['esnext'] },
        allowSyntheticDefaultImports: true,
      })
    ],
    watch: {
      exclude: 'node_modules/**',
    },
  },
  {
    input: './plugins/vitepress-democard-plugin.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]);