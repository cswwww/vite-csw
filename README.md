# Vite + Vue 3 + JavaScript + UnoCSS 项目模板

这是一个现代化的前端项目模板，基于以下技术栈：

- ⚡️ [Vite](https://vitejs.dev/) - 下一代前端工具链
- 🖖 [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- 🎨 [UnoCSS](https://uno.antfu.me/) - 即时按需原子 CSS 引擎
- 📦 [Pinia](https://pinia.vuejs.org/) - 直观的 Vue 状态管理
- 🚦 [Vue Router](https://router.vuejs.org/) - 官方的 Vue 路由
- 🛠️ [ESLint](https://eslint.org/) - 可插拔的 JavaScript linter（@antfu/eslint-config，格式规则内置 Stylistic，无需额外 Prettier）
- 🎯 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动导入 API
- 🔌 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 组件自动导入
- 📦 [axios](https://axios-http.com/) - HTTP 客户端

## 特性

- ⚡️ 使用 Vite 6，极速的开发体验
- 🎨 UnoCSS 即时按需生成样式
- 🔥 组件和 API 自动导入
- 🎯 使用最新的 Vue 3 组合式 API
- 🛠️ 集成了 ESLint（代码检查与格式规范一体）
- 📦 开箱即用的路由和状态管理
- 🤖 内置 UnoCSS 官方 agent skill（`.agents/skills/`，兼容 Claude Code / Codex / Copilot 等）

## 快速开始

### 1. 创建新项目

使用 degit 从模板创建新项目：

```bash
# 使用 degit
npx degit cswwww/vite-csw my-vite-app

# 或使用 git
# git clone https://github.com/cswwww/vite-csw.git my-vite-app

# 进入项目目录
cd my-vite-app

# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

### 2. 项目配置

#### 环境变量

- `.env` - 所有环境都会加载
- `.env.development` - 开发环境
- `.env.production` - 生产环境

只有以 `VITE_` 开头的变量才会被注入到客户端代码中：

| 变量 | 说明 |
|------|------|
| `VITE_MORNING` | 自定义问候语示例 |

> 接口地址直接使用 Vite 的 `import.meta.env.BASE_URL`（即 `vite.config.js` 中的 `base`），
> 部署到子路径时会自动跟随 `base` 变化，无需额外配置。

#### 别名

- `@/*` - 指向 `src/*`

## 目录结构

```
src/
├── api/            # API 请求（axios 封装）
├── assets/         # 静态资源
├── components/     # 公共组件
├── router/         # 路由配置
├── stores/         # Pinia 状态管理
├── styles/         # 全局样式
├── views/          # 页面组件
├── App.vue         # 根组件
└── main.js         # 入口文件
```

## 开发规范

完整的开发约定（GIS 库选型、地图实例管理、图层组织、坐标处理、组件与样式规范）以 **[AGENTS.md](./AGENTS.md)** 为主，其中：

- 地图实例使用 `markRaw()` 包裹，避免响应式开销
- 坐标统一使用 `[lng, lat]` 顺序（GeoJSON 标准）
- 涉及 GIS 需求时先按规范确认地图库选型

## 开发指南

### 添加新页面

1. 在 `src/views` 下创建新的 Vue 组件
2. 在 `src/router/index.js` 中添加路由配置

### 使用 Pinia 管理状态

1. 在 `src/stores` 下创建 store 文件
2. 在组件中使用 `useStore()` 使用 store

## 代码规范

项目使用 ESLint 进行代码规范检查，可以使用以下命令：

```bash
# 检查代码规范
pnpm lint

# 自动修复可修复的问题
pnpm lint:fix
```

## 部署

### 构建生产版本

```bash
pnpm build
```

构建产物会生成在 `dist` 目录下。

## 许可证

MIT
