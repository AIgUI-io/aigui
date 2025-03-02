# Pages Documentation

This directory contains the main page components for the AIgUI application.

## Pages Overview

### Explore.tsx

The Explore page serves as a search and discovery interface for users to find UI components, templates, and shared content.

#### Key Components

1. **Header**
   - Contains the page title "免费模板" (Free Templates)
   - Brief descriptive text
   - Integrated SearchBar component
   - Gradient background to enhance visual appeal

2. **SearchBar**
   - A styled search input with search icon
   - Chinese placeholder text "在海量模板中搜索" (Search in massive templates)
   - Rounded design for better user experience

3. **CategoryCard**
   - Small card component for displaying categories
   - Contains a small image (20x20) and category title
   - Rounded corners for the image
   - Title displayed below the image

4. **TemplateCard**
   - Reusable component for displaying template content
   - Contains image and title
   - Fixed aspect ratio (4:3) for consistent visual appearance
   - Title centered below the image

5. **CategoryBrowse**
   - Displays all categories in a single horizontally scrollable row
   - Includes categories like "演示文稿" (Presentations), "海报（竖版）" (Posters - Portrait), etc.
   - Uses CategoryCard component to display each category
   - Titled "按类别浏览" (Browse by Category)

6. **LatestTemplates**
   - Section displaying recently added templates
   - Includes example templates like "辞职申请表" (Resignation Form), "花店开业" (Flower Shop Opening), etc.
   - Uses TemplateCard component to display each template
   - Grid layout responsive to different screen sizes

