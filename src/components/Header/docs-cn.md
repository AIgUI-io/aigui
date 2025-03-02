# 头部组件文档

## 概述
头部组件是 AIgUI 应用程序的响应式导航栏，具有桌面和移动导航模式。

## 组件结构
- 使用 shadcn/ui 的 Button 组件作为所有交互按钮
- 支持动态导航链接
- 包含基于滚动的背景效果
- 具有移动菜单切换的响应式设计

## 属性
- `className`：可选的额外 CSS 类
- `children`：可选的子组件
- `navLinks`：导航链接数组（提供默认值）
- `userData`：用户认证状态
- `logoText`：可自定义的 Logo 文本（默认："AIgUI"）

## 主要功能
- 带有滚动背景模糊效果的粘性头部
- 响应式导航菜单
- 移动菜单切换
- 登录/注册按钮

## 按钮使用
组件现在使用 shadcn/ui 的 `Button` 组件，包含不同变体：
- 登录按钮：默认主要变体
- 注册按钮：轮廓（Outline）变体
- 移动菜单切换：幽灵（Ghost）变体，图标尺寸

## 依赖
- React
- shadcn/ui Button 组件
- Tailwind CSS
- 本地实用函数 (cn)

## 文件描述

### Header.tsx

一个响应式导航头部组件，提供全站导航和用户认证选项。

**特性：**
- 响应式设计，支持移动端菜单
- 具有滚动效果的粘性定位
- Logo和品牌展示
- 导航链接位于Logo右侧
- 认证按钮（注册和登录）
- 移动端友好的导航

**属性：**
- `className`：应用于头部的额外CSS类
- `children`：在头部内渲染的可选内容
- `navLinks`：导航链接对象数组（默认为预定义链接）
- `userData`：用于认证状态的用户数据对象
- `logoText`：在Logo旁边显示的文本

**布局：**
- Logo位于左侧
- 导航链接紧邻Logo右侧
- 认证按钮（注册和登录）位于右侧
- 在移动设备上，导航和认证选项折叠为下拉菜单

**使用示例：**
```jsx
<Header 
  logoText="MyApp"
  userData={{ isLoggedIn: false }}
/>
```

