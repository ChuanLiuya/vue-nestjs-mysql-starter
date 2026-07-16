# Vue + NestJS + MySQL 全栈项目

基于 **Vue 3** + **NestJS** + **MySQL** 的全栈 Web 应用启动模板，采用 **GitFlow** 工作流管理代码版本。

---

## 技术栈

### 前端 (`web/`)

| 技术 | 说明 |
|------|------|
| [Vue 3](https://vuejs.org/) | 渐进式 JavaScript 框架（Composition API） |
| [Vite](https://vite.dev/) | 下一代前端构建工具 |
| [Pinia](https://pinia.vuejs.org/) | 轻量级状态管理 |
| [Vue Router](https://router.vuejs.org/) | 官方路由管理器 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全开发 |

### 后端 (`server/`)

| 技术 | 说明 |
|------|------|
| [NestJS](https://nestjs.com/) | 高效 Node.js 服务端框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全开发 |
| [Express](https://expressjs.com/) | HTTP 底层平台 |
| [Jest](https://jestjs.io/) | 单元测试与 E2E 测试 |

### 数据库

- **MySQL** — 预留了数据库集成位置，可配合 TypeORM / Prisma 快速接入。

---

## GitFlow 工作流

本项目采用 **GitFlow** 分支模型管理代码，详细操作指南请查阅 [`docs/gitflow-guide.md`](docs/gitflow-guide.md)。

---

## 快速开始

### 环境要求

- **Node.js** >= 22.18.0
- **MySQL** >= 8.0（可选）
- **pnpm** 或 npm

### 安装与启动

```bash
# 安装后端依赖
cd server && npm install

# 安装前端依赖
cd web && npm install

# 启动后端（热重载，默认端口 3000）
cd server && npm run start:dev

# 启动前端（默认端口 5173）
cd web && npm run dev
```

---

## 项目结构

```
vue-nestjs-mysql-start/
├── server/                  # NestJS 后端
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   └── app.service.ts
│   ├── test/
│   └── package.json
├── web/                     # Vue 3 前端
│   ├── src/
│   │   ├── main.ts
│   │   ├── App.vue
│   │   ├── router/
│   │   └── stores/
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── docs/                    # 项目文档
│   └── gitflow-guide.md     # GitFlow 工作流指南
└── README.md
```

---

## 可用脚本

### 后端

| 命令 | 说明 |
|------|------|
| `npm run start:dev` | 开发模式（热重载） |
| `npm run build` | 编译构建 |
| `npm run start:prod` | 生产模式 |
| `npm run lint` | 代码检查 |
| `npm run test` | 单元测试 |

### 前端

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务 |
| `npm run build` | 构建生产版本 |
| `npm run lint` | 代码检查 |
| `npm run format` | 代码格式化 |
| `npm run type-check` | TypeScript 类型检查 |

---

## 扩展指南

- **添加 API 模块**：`cd server && nest g resource <模块名>`
- **添加页面路由**：在 `web/src/views/` 下创建组件，配置 `web/src/router/index.ts`
- **集成 MySQL**：安装 `@nestjs/typeorm typeorm mysql2`，在 `app.module.ts` 中配置 TypeORM