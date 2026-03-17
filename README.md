# React 模板项目

基于 Create React App + React Router + Ant Design + Axios 的前端模板，包含常用目录结构、路由配置、环境变量与代理。

## 技术栈

| 依赖       | 说明           |
| ---------- | -------------- |
| React 19   | UI 框架       |
| React Router 7 | 路由        |
| Ant Design 6 | UI 组件库    |
| Axios      | HTTP 请求     |
| day.js     | 日期处理      |

## 快速开始

```bash
# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器
npm start
# 或
pnpm start
```

访问 [http://localhost:3000](http://localhost:3000)。

## 项目结构

```
src/
├── api/              # API 请求
│   ├── request.js    # axios 实例、拦截器
│   ├── demoApi.js    # 示范用 CRUD 接口
│   └── index.js
├── components/       # 通用组件
├── constants/        # 全局常量
├── hooks/            # 自定义 Hooks
├── pages/            # 页面
│   ├── Home.js
│   └── About.js
├── router/           # 路由
│   └── routes.js
├── utils/            # 工具函数
│   ├── formatDate.js
│   └── index.js
├── App.js
├── index.js
└── setupProxy.js     # 开发环境代理
```

## 命令

| 命令           | 说明             |
| -------------- | ---------------- |
| `npm start`   | 开发模式，默认 3000 端口 |
| `npm run build` | 生产构建，输出到 `build/` |
| `npm run eject` | 弹出 CRA 配置（不可逆） |

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

统一通过 `api/request.js` 发起请求，自动携带 token、统一错误提示。

```javascript
import { demoApi } from './api';

// 示范接口（需后端提供 /api/demoApi）
const list = await demoApi.getDemoList({ page: 1, size: 10 });
await demoApi.createDemo({ name: '示例' });
await demoApi.updateDemo(1, { name: '更新' });
await demoApi.deleteDemo(1);
```

## 添加路由

在 [src/router/routes.js](src/router/routes.js) 中配置：

```javascript
import NewPage from '../pages/NewPage';

export const routes = [
  { path: '/', element: Home, title: '首页' },
  { path: '/new', element: NewPage, title: '新页面' },
];
```

## 工具函数

```javascript
import { formatDate, dayjs } from './utils';

formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
dayjs().add(1, 'day').format('YYYY-MM-DD');
```

## 构建与部署

```bash
npm run build
```

构建产物在 `build/`，可部署到任意静态服务器。生产环境需自行配置 Nginx 等将 `/api` 转发到后端。
