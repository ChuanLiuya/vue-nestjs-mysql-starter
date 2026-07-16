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

本项目使用 [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) 分支模型管理代码，已通过 `git-flow` 扩展（AVH Edition）初始化。

### 分支说明

| 分支 | 用途 |
|------|------|
| `main` | 生产就绪代码，只接受来自 `release` 和 `hotfix` 的合并 |
| `develop` | 日常开发主分支，汇集所有已完成的功能 |
| `feature/*` | 开发新功能，从 `develop` 拉出，合并回 `develop` |
| `release/*` | 发布准备，从 `develop` 拉出，合并到 `main` 和 `develop` |
| `hotfix/*` | 紧急修复，从 `main` 拉出，合并到 `main` 和 `develop` |
| `bugfix/*` | 修复未发布分支的问题 |

### 常用命令

#### 初始化（已完成）

```bash
git flow init -d
```

#### 开发新功能

```bash
# 开始一个新功能
git flow feature start <功能名称>

# 例如：git flow feature start user-login

# 完成功能（自动合并回 develop）
git flow feature finish <功能名称>
```

#### 发布版本

```bash
# 开始发布
git flow release start <版本号>

# 例如：git flow release start 1.0.0

# 完成发布（合并到 main 和 develop，自动打 tag）
git flow release finish <版本号>

# 推送 tag
git push --tags
```

#### 紧急修复

```bash
# 从 main 拉出修复分支
git flow hotfix start <修复名称>

# 例如：git flow hotfix start fix-crash-bug

# 完成修复（合并到 main 和 develop）
git flow hotfix finish <修复名称>
```

#### 推送分支到远程

```bash
# 推送 feature 分支
git flow feature publish <功能名称>

# 推送所有分支（首次）
git push -u origin main develop
git push --all
```

### 团队协作流程

```
main ─────●────────────●────────────────────●
           \          /                    /
develop ───●──●──────●──●────●────────────●
             \      /      \  /          /
feature/     ●────●        ●──●─────────
```

1. 从 `develop` 拉取最新代码
2. 创建 `feature/xxx` 分支开发新功能
3. 完成后合并回 `develop`
4. 准备发布时，从 `develop` 创建 `release/x.x.x`
5. 测试通过后合并到 `main` 并打 tag
6. 线上紧急问题从 `main` 创建 `hotfix/xxx`

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