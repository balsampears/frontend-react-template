# React 模板项目

基于 Create React App + TypeScript + Tailwind CSS + React Router + Ant Design + Axios 的前端模板，包含常用目录结构、路由配置、环境变量与代理。

## 技术栈

| 依赖           | 说明           |
| -------------- | -------------- |
| React 19       | UI 框架        |
| TypeScript 4.9 | 类型安全       |
| Tailwind CSS 3 | 原子化 CSS     |
| React Router 7 | 路由           |
| Ant Design 6   | UI 组件库      |
| Axios          | HTTP 请求      |
| day.js         | 日期处理       |

## 快速开始

```bash
# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器
npm start
```

> **重要：** 本项目所有依赖版本已精确锁定，团队成员必须使用 `npm ci` 安装依赖，禁止使用 `npm install`，以防止依赖版本漂移和供应链安全风险。

访问 [http://localhost:3000](http://localhost:3000)。

## 依赖管理规范

- 所有依赖版本使用精确版本号（不带 `^` 或 `~`），由 `.npmrc` 中的 `save-exact=true` 保障
- 新增依赖使用 `npm install <pkg>`，安装后检查 `package.json` 确认版本号无前缀
- 升级依赖需明确指定版本：`npm install <pkg>@<version>`

## 项目结构

```
src/
├── api/              # API 请求
│   ├── request.ts    # axios 实例、拦截器
│   ├── demoApi.ts    # 示范用 CRUD 接口
│   └── index.ts
├── components/       # 通用组件
├── constants/        # 全局常量
├── hooks/            # 自定义 Hooks
├── pages/            # 页面
│   ├── Home.tsx
│   └── About.tsx
├── router/           # 路由
│   └── routes.tsx
├── utils/            # 工具函数
│   ├── formatDate.ts
│   └── index.ts
├── App.tsx
├── index.tsx
├── index.css          # Tailwind CSS 入口
├── react-app-env.d.ts # TypeScript 类型声明
└── setupProxy.js      # 开发环境代理
```

## 命令

| 命令              | 说明                       |
| ----------------- | -------------------------- |
| `npm ci`          | 安装依赖（推荐）           |
| `npm start`       | 开发模式，默认 3000 端口   |
| `npm run build`   | 生产构建，输出到 `build/`  |
| `npm run eject`   | 弹出 CRA 配置（不可逆）   |

## 环境配置

按启动命令加载对应 `.env.*`：

| 命令            | 环境文件              |
| --------------- | --------------------- |
| `npm start`     | `.env.development`    |
| `npm test`      | `.env.test`           |
| `npm run build` | `.env.production`     |

参考 [`.env.example`](.env.example) 配置：

- `REACT_APP_ENV`：环境标识
- `REACT_APP_API_BASE_URL`：API 基础地址，默认 `/api`

## 开发代理

开发时 `/api` 请求通过 [src/setupProxy.js](src/setupProxy.js) 转发到后端，默认目标 `http://localhost:8080`。

修改代理目标：编辑 `src/setupProxy.js` 中的 `target`，或设置环境变量 `PROXY_TARGET`。

**修改后需重启开发服务器。**

## API 使用

统一通过 `api/request.ts` 发起请求，自动携带 token、统一错误提示。

```typescript
import { demoApi } from './api';

// 示范接口（需后端提供 /api/demoApi）
const list = await demoApi.getDemoList({ page: 1, size: 10 });
await demoApi.createDemo({ name: '示例' });
await demoApi.updateDemo(1, { name: '更新' });
await demoApi.deleteDemo(1);
```

## 添加路由

在 [src/router/routes.tsx](src/router/routes.tsx) 中配置：

```typescript
import NewPage from '../pages/NewPage';

export const routes: RouteConfig[] = [
  { path: '/', element: Home, title: '首页' },
  { path: '/new', element: NewPage, title: '新页面' },
];
```

## 使用 Tailwind CSS

在组件中直接使用 Tailwind 的工具类：

```tsx
function Example() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-medium text-black">标题</h2>
      <p className="text-slate-500">内容</p>
    </div>
  );
}
```

Tailwind CSS 与 Ant Design 可共存，Tailwind 用于自定义布局和微调样式，Ant Design 用于复杂业务组件。

## 工具函数

```typescript
import { formatDate, dayjs } from './utils';

formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
dayjs().add(1, 'day').format('YYYY-MM-DD');
```

## 构建与部署

```bash
npm run build
```

构建产物在 `build/`，可部署到任意静态服务器。生产环境需自行配置 Nginx 等将 `/api` 转发到后端。
