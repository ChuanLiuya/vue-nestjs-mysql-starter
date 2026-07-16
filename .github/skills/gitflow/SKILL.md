---
name: gitflow
description: 'Use when: managing branches with GitFlow, creating feature/hotfix/release branches, initializing git-flow, or following the GitFlow branching model in this project.'
user-invocable: true
---
# GitFlow 工作流技能

为当前项目提供 GitFlow 分支管理操作支持。项目已通过 `git-flow`（AVH Edition）初始化，该工具随 Git for Windows 捆绑安装。

详细参考文档：[`docs/gitflow-guide.md`](docs/gitflow-guide.md)

---

## 何时使用

- 用户要求创建新功能分支（feature）
- 用户要求发布新版本（release）
- 用户要求紧急修复线上问题（hotfix）
- 用户询问 GitFlow 工作流相关操作
- 用户要求推送或完成某个 GitFlow 分支

---

## 分支结构

| 分支 | 用途 |
|------|------|
| `main` | 生产就绪代码 |
| `develop` | 日常开发主分支 |
| `feature/*` | 新功能开发 |
| `release/*` | 发布准备 |
| `hotfix/*` | 紧急修复 |
| `bugfix/*` | bug 修复 |

---

## 操作步骤

### 1. 开发新功能

```bash
# 确保本地 develop 是最新的
git checkout develop
git pull

# 创建 feature 分支
git flow feature start <功能名称>

# 推送到远程（如需协作）
git flow feature publish <功能名称>

# 完成功能（合并回 develop，删除本地 feature 分支）
git flow feature finish <功能名称>

# 推送 develop 到远程
git push origin develop
```

### 2. 发布版本

```bash
# 从 develop 创建 release 分支
git flow release start <版本号，如 1.0.0>

# 在 release 分支上做最终测试和修复

# 完成发布（合并到 main 和 develop，自动打 tag）
git flow release finish <版本号>

# 推送到远程
git push origin main develop
git push --tags
```

### 3. 紧急修复

```bash
# 从 main 创建 hotfix 分支
git flow hotfix start <修复名称>

# 在 hotfix 分支上修复问题

# 完成修复（合并到 main 和 develop，自动打 tag）
git flow hotfix finish <修复名称>

# 推送到远程
git push origin main develop
git push --tags
```

### 4. 初始化（新仓库）

```bash
git flow init -d
git push -u origin main develop
```

---

## 重要规则

1. **禁止直接在 `main` 或 `develop` 上提交代码** — 所有改动必须通过 feature / hotfix / release 分支引入
2. **完成 release 或 hotfix 后务必推送 tag** — `git push --tags`
3. **feature 分支命名** — 使用简短英文，如 `user-auth`、`add-dashboard`
4. **多人协作** — 使用 `git flow feature publish` 推送，其他人用 `git flow feature pull origin <名称>` 拉取
5. **等用户确认再 finish** — 创建 feature / release / hotfix 分支后，不要擅自执行 finish 操作，等用户明确说"finish"或"结束分支"后再执行

---

## 相关资源

- [GitFlow 详细指南](docs/gitflow-guide.md) — 包含常见场景示例和注意事项
