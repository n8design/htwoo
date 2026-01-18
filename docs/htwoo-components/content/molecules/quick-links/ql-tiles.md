---
title: "Quick Link Tiles"
description: "Quick link tiles provide a visually prominent way to display navigation options using square or rectangular cards. They're ideal for application launchers, featured content, and dashboard interfaces w"
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-tiles"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql Tiles"
seoDescription: "Quick Links Ql Tiles Molecules"
weight: 20
hasVariants: false
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
  &lt;article class=&quot;hoo-qltiles&quot;&gt;
      &lt;figure class=&quot;hoo-ql-media&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/placeholders/ph-16by9.png&quot; class=&quot;hoo-ql-img&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;
      &lt;/figure&gt;
      &lt;div class=&quot;hoo-qlinfo&quot;&gt;
          &lt;div class=&quot;hoo-qltitle&quot;&gt;This is a really long title to get everything working lorem ipsum dolor sit amet&lt;/div&gt;
      &lt;/div&gt;
  &lt;/article&gt;&lt;/a&gt;
---

# Quick Link Tiles

Quick link tiles provide a visually prominent way to display navigation options using square or rectangular cards. They're ideal for application launchers, featured content, and dashboard interfaces where visual impact is important.

## Overview

The tile format emphasizes visual hierarchy through size, color, and iconography. Each tile maintains a 1:1 aspect ratio and uses a grid-based layout system for consistent alignment and spacing.

## Features

- **Square Format**: 1:1 aspect ratio for consistent visual rhythm
- **Theme Colors**: Primary brand colors with hover states
- **Icon Integration**: Centered icon display with proper scaling
- **Responsive Sizing**: Flexible width (5rem to 11.5rem)
- **Grid Layout**: CSS Grid-based internal structure
- **Edit Mode**: Management capabilities with action menus
- **Smooth Transitions**: 125ms ease animations for interactions

## Structure

The component consists of:
1. **Container**: `.hoo-qltiles` - Main tile container with grid layout
2. **Icon Area**: `.hoo-ql-media` - Centered icon display
3. **Info Area**: `.hoo-qlinfo` - Text content container
4. **Title**: `.hoo-qltitle` - Primary tile text (2-line max)
5. **Menu**: `.hoo-qllink-menu` - Edit mode actions (when enabled)

## Data Structure

```json
{
    "quick-link": {
        "href": "/target-application",
        "title": "Application or Resource Title",
        "qlimg": {
            "src": "path/to/app-icon.png",
            "alt": "Application icon"
        },
        "qlsvg": {
            "icon": "custom-svg-icon"
        }
    }
}
```

## CSS Classes

- `.hoo-qllink`: Link wrapper element
- `.hoo-qltiles`: Main tile container
- `.hoo-ql-media`: Icon container with centered alignment
- `.hoo-qlinfo`: Text information container
- `.hoo-qltitle`: Primary title text (2-line clamp)
- `.hoo-qllink-menu`: Edit mode menu container
- `.hoo-qllink-menuitem`: Menu item wrapper
- `.mode-edit`: Edit mode modifier class

## Size Variants

### Standard Size
- **Dimensions**: 1:1 aspect ratio, 5rem to 11.5rem width
- **Icon Size**: 1.5rem (24px)
- **Padding**: 8px all around
- **Use Case**: Standard dashboard tiles

### Medium Size (`.img-m`)
- **Icon Size**: 2rem (32px)
- **Use Case**: Prominent application tiles

### Large Size (`.img-l`)
- **Icon Size**: 2.5rem (40px)
- **Use Case**: Featured applications or primary actions

### Extra Large Size (`.img-xl`)
- **Icon Size**: 3rem (48px)
- **Use Case**: Hero tiles or primary navigation

## Styling

### Color Scheme
- **Background**: Theme primary (`#0078d4`)
- **Text**: White (`#ffffff`)
- **Hover**: Darker theme shade (`#106ebe`)
- **Border**: 1px solid theme color with 8px border radius

### Grid Layout
- **Template**: 2 rows × 1 column
- **Gap**: 12px between icon and text
- **Flow**: Column dense for optimal content placement
- **Alignment**: Centered content in both dimensions

### Interactive States
- **Default**: Primary theme background
- **Hover**: Darker background with smooth transition
- **Focus**: Keyboard focus ring for accessibility
- **Active**: Slightly pressed appearance

## Typography

- **Font Size**: 14px for title text
- **Line Clamping**: Maximum 2 lines with ellipsis
- **Text Align**: Center alignment for balanced appearance
- **Text Wrap**: Balanced wrapping for optimal line breaks
- **Color**: White text for contrast against colored background

## Icon Specifications

- **Format**: SVG preferred for scalability
- **Color**: Inherits current text color (white)
- **Sizing**: Responsive based on tile variant
- **Alignment**: Centered both horizontally and vertically
- **Aspect Ratio**: Maintains original proportions

## Accessibility

- **Color Contrast**: High contrast white text on colored background
- **Keyboard Navigation**: Full keyboard support for tile activation
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Readers**: Descriptive content and proper labeling
- **Touch Targets**: Adequate size for touch interaction (minimum 44px)

## Layout Patterns

### Dashboard Grid
```handlebars
<div class="dashboard-grid">
    {{#each applications}}
    {{> molecules-ql-tiles }}
    {{/each}}
</div>
```

### Application Launcher
```handlebars
<div class="app-launcher">
    <div class="app-grid">
        {{#each apps}}
        {{> molecules-ql-tiles size="medium" }}
        {{/each}}
    </div>
</div>
```

### Feature Showcase
```handlebars
<section class="featured-apps">
    {{#each featuredApps}}
    {{> molecules-ql-tiles size="large" }}
    {{/each}}
</section>
```

## Performance Considerations

- **Transition Optimization**: Hardware-accelerated transitions
- **Icon Loading**: Lazy loading for large tile collections
- **Responsive Images**: Appropriate icon sizes for display density
- **CSS Grid**: Efficient layout rendering with native grid support

## Usage Guidelines

### Content Strategy
- Use clear, concise titles that identify the destination
- Choose recognizable icons that match the application or content
- Maintain consistent visual hierarchy across tile collections
- Group related tiles together for better user comprehension

### Visual Design
- Maintain consistent spacing between tiles
- Use appropriate tile sizes based on importance and screen space
- Consider color coordination with overall interface theme
- Ensure sufficient contrast for accessibility compliance

### Responsive Behavior
- Plan for different screen sizes and orientations
- Consider touch interaction on mobile devices
- Implement appropriate breakpoints for tile sizing
- Test tile collections across various viewport sizes

## SCSS Import