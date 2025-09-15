import { defineConfig } from 'vitepress'
import { vitepressDemoCardPlugin } from './plugins/vitepress-democard-plugin.mts';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档站",
  description: "文档站",
  themeConfig: {
    sidebar: [
      {
        text: '文档站简介',
        link: '/'
      },
      {
        text: '直播技术',
        items: [
          {
            text: 'TCPlayer演示',
            link: '/living-tech/tcplayer.md'
          }
        ]
      },
      {
        text: 'Canvas',
        items: [
          {
            text: 'Canvas 2D',
            link: '/canvas/canvas-2d.md'
          }
        ]
      }
    ],

    search: {
      provider: 'local'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': process.cwd()
      }
    },
    plugins: [
      vitepressDemoCardPlugin
    ]
  }
})

