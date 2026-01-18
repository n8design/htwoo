---
title: Accordion Header
order: 20
---

# Accordion Header

The clickable header component for accordion items that provides the toggle functionality and visual feedback for expand/collapse states. Built as a `<summary>` element with semantic heading structure and animated state indicators.

## Overview

The Accordion Header serves as the primary interaction point for accordion functionality. It combines a descriptive title with a state indicator icon to create an intuitive interface for progressive disclosure. The component ensures proper accessibility through semantic HTML and clear visual feedback for all interaction states.

## Features

- **Semantic HTML**: Uses `<summary>` element for proper semantics
- **Interactive States**: Hover, focus, and active state styling
- **Animated Feedback**: Smooth icon rotation on state changes
- **Accessibility Ready**: Proper focus management and ARIA support
- **Touch Optimized**: 48px minimum touch target compliance
- **Flexible Sizing**: Adapts to content length and container width
- **Keyboard Navigation**: Full keyboard support for interaction

## Structure

The component consists of:
1. **Summary Element**: `<summary>` - Semantic clickable header
2. **Title Container**: `.accordion-title` - Text content wrapper
3. **Icon Container**: `.icon` - State indicator with rotation animation
4. **Focus Indicator**: CSS outline for keyboard accessibility

## Data Structure

```json
{
    "accordion-header": {
        "title": "Payment Information",
        "level": "h3"
    }
}
```

### With Subtitle

```json
{
    "accordion-header": {
        "title": "Account Settings",
        "subtitle": "Manage your profile and preferences",
        "level": "h2"
    }
}
```

## CSS Classes

- `.hoo-accordion-summary`: Main summary element
- `.accordion-title`: Title text container
- `.title-main`: Primary title text
- `.title-subtitle`: Optional secondary text
- `.icon`: State indicator icon
- `.hoo-icon-arrow-down`: Default chevron icon

## Styling

### Visual Design
- **Height**: 48px minimum for touch accessibility
- **Padding**: 16px horizontal, 12px vertical
- **Typography**: 14px font size, medium font weight
- **Icon Size**: 16px with smooth transitions
- **Border**: Bottom border for visual separation

### Interactive States
- **Default**: Clean appearance with subtle hover affordance
- **Hover**: Light background color change (#f8f8f8)
- **Focus**: Blue focus outline (2px solid #0078d4)
- **Active**: Slightly darker background on press
- **Expanded**: Icon rotated 180° with content visible

### Typography Hierarchy
- **Title**: 14px, font-weight 500, line-height 20px
- **Subtitle**: 12px, font-weight 400, opacity 0.8
- **Color**: Primary text color (#323130)

## Animation

### Icon Rotation

### Hover Transition

## Use Cases

### FAQ Headers
```handlebars
<details class="faq-item">
    {{> molecules-accordion-header accordion-header=faq-question}}
    <div class="accordion-content">{{ faq-answer }}</div>
</details>
```

### Settings Categories
```handlebars
<details class="settings-section">
    {{> molecules-accordion-header accordion-header=setting-category}}
    <div class="accordion-content">{{ setting-controls }}</div>
</details>
```

### Product Details
```handlebars
<details class="product-section">
    {{> molecules-accordion-header accordion-header=product-spec}}
    <div class="accordion-content">{{ specification-details }}</div>
</details>
```

### Documentation Sections
```handlebars
<details class="doc-section">
    {{> molecules-accordion-header accordion-header=doc-topic}}
    <div class="accordion-content">{{ documentation-content }}</div>
</details>
```

## Accessibility

- **Semantic Element**: Uses `<summary>` for proper semantics
- **Keyboard Navigation**: Space and Enter keys activate toggle
- **Focus Management**: Clear focus indicators and logical progression
- **Screen Reader Support**: Proper announcements of state changes
- **ARIA Attributes**: Automatic ARIA expanded states from native element
- **Touch Targets**: Minimum 48px touch target compliance

## Content Guidelines

### Title Writing
- **Clear and Descriptive**: Make purpose immediately obvious
- **Concise Language**: Keep titles scannable and brief
- **Active Voice**: Use action-oriented language when appropriate
- **Consistent Structure**: Maintain parallel structure across headers

### Information Architecture
- **Logical Grouping**: Group related content under appropriate headers
- **Progressive Disclosure**: Order by importance and user needs
- **Scannable Hierarchy**: Use consistent heading levels
- **Predictable Content**: Headers should accurately preview content

## Performance

- **Lightweight**: Minimal CSS with no JavaScript requirements
- **Efficient Animations**: CSS-only transitions for optimal performance
- **Native Behavior**: Leverages browser optimizations for `<summary>`
- **Minimal DOM**: Clean, semantic markup structure

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Summary Element**: Excellent support across all modern browsers
- **Graceful Degradation**: Falls back to standard clickable element
- **Screen Readers**: Full support in assistive technologies

## SCSS Files

**Styles:**
- `lib/sass/molecules/accordion.scss`

## Customization Options

### Icon Variants
- Different icon types (chevron, plus/minus, arrows)
- Custom icon sizes and positioning
- Alternative rotation directions

### Typography Options
- Different heading levels (h2, h3, h4)
- Font weight variations
- Custom spacing and sizing

### Layout Variations
- Left-aligned vs. centered text
- Icon positioning (left/right)
- Multiple line support for longer titles
- Removes default browser disclosure triangle

## Accessibility

- Uses semantic HTML with the `<summary>` element
- Properly structured headings for screen reader navigation
- Visual indication of state through icon rotation
- Clickable area extends across the full width
- Cursor changes to pointer to indicate interactivity

## SCSS Imports

**Main Component**\
@n8d/htwoo-core/components/menu/accordion

***
