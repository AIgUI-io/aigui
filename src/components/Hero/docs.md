# Hero Component

## Overview
The `Hero` component is a reusable header section designed to provide a visually appealing introduction with a search bar. It features a customizable gradient background and supports dynamic title and description.

## Props
- `title` (optional): The main title displayed in the hero section. Default is "Free Templates".
- `description` (optional): A descriptive text below the title. Default is "Massive design templates covering hundreds of scenarios".
- `gradientFrom` (optional): Tailwind CSS class for the starting color of the gradient. Default is 'from-rose-200'.
- `gradientTo` (optional): Tailwind CSS class for the ending color of the gradient. Default is 'to-rose-300'.
- `className` (optional): Additional CSS classes to apply to the hero section.

## Usage Example
```tsx
// Basic usage
<Hero />

// Customized usage
<Hero 
  title="Design Templates" 
  description="Explore our extensive collection of design resources" 
  gradientFrom="from-blue-200" 
  gradientTo="to-blue-400" 
/>
```

## Features
- Responsive design
- Customizable gradient background
- Integrated search bar
- Flexible prop configuration

## Dependencies
- Tailwind CSS
- shadcn/ui utilities (`cn` function) 
