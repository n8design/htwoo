---
title: Accordion Organism
order: 1
---

# Accordion Organism

The Accordion organism provides a complete implementation of collapsible content sections organized into logical groups. It combines multiple accordion items into a cohesive interface pattern commonly used for FAQ sections, content organization, and progressive disclosure.

## Overview

The Accordion organism represents the highest level of accordion implementation in the HTWOO design system. It manages collections of related accordion items, providing semantic structure and consistent behavior for complex content hierarchies.

## Components

### Organism Level
- **[Accordion Group](./accordion-group)**: Container for multiple related accordion items

## Key Features

### Semantic Structure
- **Native HTML Elements**: Built with `<details>` and `<summary>` for accessibility
- **Proper Heading Hierarchy**: Uses semantic heading tags (`<h3>`) for structure
- **ARIA Compliance**: Native browser ARIA support through HTML5 elements
- **Screen Reader Support**: Built-in accessibility features

### Interactive Behavior
- **Independent Operation**: Each accordion can be opened/closed independently
- **Smooth Animations**: Icon rotation transitions for visual feedback
- **Keyboard Support**: Full keyboard navigation and activation
- **Focus Management**: Proper focus indicators and management

### Visual Design
- **Consistent Styling**: Unified appearance across all accordion items
- **Icon Feedback**: Directional icons that rotate to indicate state
- **Spacing Optimization**: Proper margins and padding for readability
- **Theme Integration**: Inherits theme colors and typography

## Architecture

### Component Hierarchy
```
Accordion Group (Organism)
├── Accordion Item (Molecule)
    ├── Accordion Header (Molecule)
    │   ├── Icon (Atom)
    │   └── Heading Text (Atom)
    └── Accordion Content (Molecule)
        └── Content Text (Atom)
```

### Structure Flow
1. **Group Container**: Semantic `<section>` with accordion role
2. **Individual Items**: Each accordion item as a `<details>` element
3. **Headers**: Clickable `<summary>` elements with icons and titles
4. **Content**: Collapsible content areas with rich text support

## Use Cases

### Content Organization
- **FAQ Sections**: Frequently asked questions with expandable answers
- **Product Information**: Categorized product details and specifications
- **Documentation**: Technical documentation with collapsible sections
- **Help Systems**: Progressive disclosure of help content

### Interface Design
- **Settings Panels**: Grouped configuration options
- **Navigation Menus**: Hierarchical navigation with subcategories
- **Form Sections**: Large forms organized into logical sections
- **Dashboard Widgets**: Collapsible information panels

### Content Management
- **Editorial Content**: Article sections with expandable details
- **E-commerce**: Product features and specifications
- **Educational Content**: Course materials with expandable modules
- **News Articles**: Story sections with additional details

## Styling Architecture

### CSS Classes
- **`.hoo-accordion-group`**: Main container styling and layout
- **`.hoo-accordion`**: Individual accordion item container
- **`.hoo-accordion-summary`**: Header styling and interactive states
- **`.hoo-accordion-content`**: Content area styling and spacing
- **`.hoo-icon`**: Icon styling and animation

### Visual Properties
- **Typography**: 20px headings with proper line height
- **Spacing**: Consistent margins and padding throughout
- **Animations**: Smooth icon rotation (0.2s ease transition)
- **Focus States**: Clear focus indicators for accessibility

## Accessibility Features

### Keyboard Navigation
- **Tab Navigation**: Focus moves between accordion headers
- **Enter/Space**: Toggles accordion open/closed state
- **Arrow Keys**: Optional navigation between accordion items
- **Focus Indicators**: Clear visual focus states

### Screen Reader Support
- **Semantic Structure**: Proper heading hierarchy and landmarks
- **State Announcements**: Open/closed states announced automatically
- **Content Structure**: Logical reading order and content flow
- **Role Attribution**: Proper ARIA roles and attributes

### Visual Accessibility
- **Color Contrast**: Sufficient contrast ratios for all text
- **Focus Management**: Clear focus indicators
- **Interactive Feedback**: Visual state changes for user actions
- **Text Scaling**: Responsive to user font size preferences

## Best Practices

### Content Strategy
- **Logical Grouping**: Group related accordion items together
- **Clear Titles**: Use descriptive, scannable heading text
- **Concise Content**: Keep individual sections focused and concise
- **Progressive Disclosure**: Show most important information first

### User Experience
- **Default States**: Consider which accordions should be open by default
- **Content Length**: Balance between too much and too little content
- **Visual Hierarchy**: Use consistent styling across all items
- **Loading States**: Handle dynamic content loading gracefully

### Development
- **Semantic HTML**: Always use proper HTML5 elements
- **Progressive Enhancement**: Ensure functionality without JavaScript
- **Performance**: Optimize for large numbers of accordion items
- **Testing**: Test with keyboard and screen reader users

## Browser Support

- **Modern Browsers**: Full support in all modern browsers
- **HTML5 Details**: Requires `<details>`/`<summary>` support
- **CSS Animations**: Progressive enhancement for transition effects
- **Keyboard Support**: Native keyboard support through HTML5 elements

## SCSS Files

**Accordion Styles:**
- `lib/sass/02-molecules/accordion/`
