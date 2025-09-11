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
        text: '新人引导',
        items: [
          {
            text: '快速装备',
            items: [
              {
                text: '网络连接和文件共享',
                link: '/newer-join/quick-equip/net.md'
              },
              {
                text: '设备设置和软件管理',
                link: '/newer-join/quick-equip/soft.md'
              },
              {
                text: '开发环境配置',
                link: '/newer-join/quick-equip/dev.md'
              },
              {
                text: '帐号和授权',
                link: '/newer-join/quick-equip/account.md'
              },
            ]
          },
          {
            text: '快速工作',
            items: [
              {
                text: '工具平台和服务器',
                link: '/newer-join/quick-work/platform.md'
              },
              {
                text: '编辑器和IDE',
                link: '/newer-join/quick-work/ide.md'
              },
              {
                text: 'Node及npm',
                link: '/newer-join/quick-work/node.md'
              },
              {
                text: '原型与设计',
                link: '/newer-join/quick-work/ued.md'
              },
              {
                text: '静态资源管理',
                link: '/newer-join/quick-work/static-assets.md'
              },
              {
                text: '开发流程',
                link: '/newer-join/quick-work/work-flow.md'
              },
              {
                text: 'Git使用',
                link: '/newer-join/quick-work/git.md'
              },
            ]
          },
          {
            text: '资源汇总',
            link: '/newer-join/asset.md'
          },
        ]
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

