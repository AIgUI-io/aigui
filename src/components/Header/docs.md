# Header Component Documentation

## Overview
The Header component is a responsive navigation bar for the AIgUI application, featuring desktop and mobile navigation modes.

## Component Structure
- Uses shadcn/ui Button component for all interactive buttons
- Supports dynamic navigation links
- Includes scroll-based background effect
- Responsive design with mobile menu toggle

## Props
- `className`: Optional additional CSS classes
- `children`: Optional child components
- `navLinks`: Array of navigation links (default provided)
- `userData`: User authentication state
- `logoText`: Customizable logo text (default: "AIgUI")

## Key Features
- Sticky header with scroll-based background blur
- Responsive navigation menu
- Mobile menu toggle
- Login/Register buttons

## Button Usage
The component now uses shadcn/ui `Button` component with variants:
- Login button: Default primary variant
- Register button: Outline variant
- Mobile menu toggle: Ghost variant with icon size

## Dependencies
- React
- shadcn/ui Button component
- Tailwind CSS
- Local utility functions (cn)

## File Descriptions

### Header.tsx

A responsive navigation header component that provides site-wide navigation and authentication options.

**Features:**
- Responsive design with mobile menu support
- Sticky positioning with scroll effect
- Logo and brand display
- Navigation links positioned to the right of the logo
- Authentication buttons (register and login)
- Mobile-friendly navigation

**Props:**
- `className`: Additional CSS classes to apply to the header
- `children`: Optional content to render inside the header
- `navLinks`: Array of navigation link objects (defaults to predefined links)
- `userData`: User data object for authentication state
- `logoText`: Text to display next to the logo

**Layout:**
- Logo is positioned on the left
- Navigation links are placed immediately to the right of the logo
- Authentication buttons (register and login) are positioned on the right side
- On mobile devices, navigation and authentication options collapse into a dropdown menu

**Usage Example:**
```jsx
<Header 
  logoText="MyApp"
  userData={{ isLoggedIn: false }}
/>
```

