# vitepress-democard-plugin

![npm](https://img.shields.io/npm/v/vitepress-democard-plugin)
![license](https://img.shields.io/npm/l/vitepress-democard-plugin)
![downloads](https://img.shields.io/npm/dt/vitepress-democard-plugin)

一个 VitePress 插件，可以快速生成交互式 Demo 演示和代码示例卡片，让你的文档更生动直观。

## ✨ 特性

- 🎨 一行代码快速嵌入 Demo 演示
- 📦 自动生成可折叠代码示例卡片
- ⚡ 支持明暗主题切换
- 🌐 支持动态导入外部代码文件
- 🌈 支持代码复制，高亮

## 🌰 展示效果图
- demo卡片折叠
![demo卡片折叠](https://raw.githubusercontent.com/qianyuanjia/vitepress-democard-plugin/refs/heads/main/assets/1.jpeg)

- deme卡片展开
![demo卡片折叠态](https://raw.githubusercontent.com/qianyuanjia/vitepress-democard-plugin/refs/heads/main/assets/2.jpeg)

- 暗色主题
![暗色主题](https://raw.githubusercontent.com/qianyuanjia/vitepress-democard-plugin/refs/heads/main/assets/3.jpeg)

## 📦 安装

```bash
npm install vitepress-democard-plugin -D
# 或
yarn add vitepress-democard-plugin -D
# 或
pnpm add vitepress-democard-plugin -D
```

## 🛠️ 配置

在 `.vitepress/config.ts` 中添加插件：

```ts
import { defineConfig } from 'vitepress'
import { vitepressDemoCardPlugin } from 'vitepress-democard-plugin'

export default defineConfig({
  vite: {
    plugins: [
      vitepressDemoCardPlugin
    ]
  }
})
```

## 🚀 基本用法

### 1. 内联代码 Demo

创建你的demo组件，然后在你的 markdown 文件中任意位置用下面的特殊语法引用即可

````md
<$./components/Demo.vue$>
````

## 🤝 贡献

欢迎提交 Issues 和 PRs！

## 📄 许可证

MIT © 2025-present [huanyue]