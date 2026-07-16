# GitFlow 工作流指南

> 本项目使用 [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) 分支模型管理代码，`git-flow` 随 **Git for Windows** 一起捆绑安装，无需额外下载。

---

## 分支说明

| 分支 | 用途 |
|------|------|
| `main` | 生产就绪代码，只接受来自 `release` 和 `hotfix` 的合并 |
| `develop` | 日常开发主分支，汇集所有已完成的功能 |
| `feature/*` | 开发新功能，从 `develop` 拉出，合并回 `develop` |
| `release/*` | 发布准备，从 `develop` 拉出，合并到 `main` 和 `develop` |
| `hotfix/*` | 紧急修复，从 `main` 拉出，合并到 `main` 和 `develop` |
| `bugfix/*` | 修复未发布分支的问题 |

---

## 常用命令

### 初始化（已完成）

```bash
git flow init -d
```

### 开发新功能

```bash
# 开始一个新功能
git flow feature start <功能名称>

# 例如：git flow feature start user-login

# 完成功能（自动合并回 develop）
git flow feature finish <功能名称>

# 推送到远程供协作者查看
git flow feature publish <功能名称>
```

### 发布版本

```bash
# 开始发布
git flow release start <版本号>

# 例如：git flow release start 1.0.0

# 完成发布（合并到 main 和 develop，自动打 tag）
git flow release finish <版本号>

# 推送 tag 到远程
git push --tags
```

### 紧急修复

```bash
# 从 main 拉出修复分支
git flow hotfix start <修复名称>

# 例如：git flow hotfix start fix-crash-bug

# 完成修复（合并到 main 和 develop）
git flow hotfix finish <修复名称>

# 推送 tag
git push --tags
```

### 推送分支到远程

```bash
# 推送 feature 分支
git flow feature publish <功能名称>

# 推送所有分支（首次）
git push -u origin main develop
git push --all
```

---

## 团队协作流程

```
main ─────●────────────●────────────────────●
           \          /                    /
develop ───●──●──────●──●────●────────────●
             \      /      \  /          /
feature/     ●────●        ●──●─────────
```

1. **同步** — 从 `develop` 拉取最新代码
2. **开发** — 创建 `feature/xxx` 分支开发新功能
3. **合入** — 完成后合并回 `develop`
4. **发布** — 准备发布时，从 `develop` 创建 `release/x.x.x`
5. **上线** — 测试通过后合并到 `main` 并打 tag
6. **热修** — 线上紧急问题从 `main` 创建 `hotfix/xxx`

---

## 常见场景

### 场景一：开发一个新功能

```bash
# 确保本地 develop 是最新的
git checkout develop
git pull

# 创建 feature 分支
git flow feature start user-profile

# ... 在 feature/user-profile 上编写代码、提交 ...

# 完成并合并回 develop
git flow feature finish user-profile

# 推送 develop
git push origin develop
```

### 场景二：同事协作同一个功能

```bash
# 开发者 A：创建并推送
git flow feature start user-auth
git flow feature publish user-auth

# 开发者 B：拉取并参与开发
git flow feature pull origin user-auth

# 开发者 A：完成功能
git flow feature finish user-auth
```

### 场景三：发布版本

```bash
git flow release start 1.0.0
# 在 release/1.0.0 上做最终测试、修复小问题
git flow release finish 1.0.0
git push origin main develop
git push --tags
```

### 场景四：紧急线上修复

```bash
git flow hotfix start security-vuln-fix
# 在 hotfix/security-vuln-fix 上修复
git flow hotfix finish security-vuln-fix
git push origin main develop
git push --tags
```

---

## 注意事项

- **不要直接在 `main` 或 `develop` 上提交代码**，所有改动都应从 feature/hotfix/release 分支引入
- `release finish` 和 `hotfix finish` 会自动打 tag，别忘了执行 `git push --tags`
- 合并冲突时，用 `git status` 查看冲突文件，手动解决后 `git add` 再 `git commit`
