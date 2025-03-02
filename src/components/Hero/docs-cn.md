# Hero 组件

## 概述
`Hero` 组件是一个可重用的头部部分，旨在提供带有搜索栏的视觉吸引力介绍。它具有可自定义的渐变背景，并支持动态标题和描述。

## 属性
- `title`（可选）：在头部部分显示的主标题。默认为"免费模板"。
- `description`（可选）：标题下方的描述性文本。默认为"海量设计模板，覆盖上百种设计场景"。
- `gradientFrom`（可选）：渐变起始颜色的 Tailwind CSS 类。默认为 'from-rose-200'。
- `gradientTo`（可选）：渐变结束颜色的 Tailwind CSS 类。默认为 'to-rose-300'。
- `className`（可选）：应用于头部部分的额外 CSS 类。

## 使用示例
```tsx
// 基本使用
<Hero />

// 自定义使用
<Hero 
  title="设计模板" 
  description="探索我们丰富的设计资源集合" 
  gradientFrom="from-blue-200" 
  gradientTo="to-blue-400" 
/>
```

## 特点
- 响应式设计
- 可自定义的渐变背景
- 集成搜索栏
- 灵活的属性配置

## 依赖
- Tailwind CSS
- shadcn/ui 工具（`cn` 函数） 
