---
title: Accordion Group
order: 10
---

# Accordion Group

The Accordion Group component serves as a semantic container for multiple related accordion items, creating a cohesive set of collapsible content sections. It provides proper structure, accessibility features, and consistent behavior for grouped accordion interfaces.

## Overview

The Accordion Group organizes multiple accordion items into a logical collection, typically used for FAQ sections, content categorization, or any interface requiring multiple collapsible sections. It maintains semantic relationships between accordion items while allowing independent operation of each section.

## Features

### Semantic Structure
- **Section Element**: Uses `<section>` with `role="accordion"` for proper semantics
- **Grouped Content**: Provides logical grouping for related accordion items
- **Accessibility**: Built-in ARIA support through semantic HTML
- **Navigation**: Enables keyboard navigation between related sections

### Independent Operation
- **Multi-Open**: Multiple accordions can be open simultaneously by default
- **Individual Control**: Each accordion operates independently
- **State Management**: No automatic closing when others open
- **Flexible Behavior**: Can be extended for exclusive operation if needed

### Responsive Design
- **Container Adaptation**: Adapts to parent container width
- **Content Flow**: Maintains proper content flow on all screen sizes
- **Touch Friendly**: Optimized for touch interactions on mobile devices

## Structure

The component consists of:
1. **Container**: `<section class="hoo-accordion-group" role="accordion">` - Main group container
2. **Items**: Multiple `{{> molecules-accordion-item}}` - Individual accordion sections
3. **Loop**: `{{#each accordion-group}}` - Data iteration for multiple items

## Data Structure

```json
{
    "accordion-group": [
        {
            "accordion": {
                "header": {
                    "text": "Frequently Asked Questions",
                    "iconname": "icon-arrow-right"
                },
                "content": "Here are the most common questions and answers about our product..."
            }
        },
        {
            "accordion": {
                "header": {
                    "text": "Technical Specifications",
                    "iconname": "icon-arrow-right"
                },
                "content": "Detailed technical information about features and capabilities..."
            }
        },
        {
            "accordion": {
                "header": {
                    "text": "Installation Guide",
                    "iconname": "icon-arrow-right"
                },
                "content": "Step-by-step instructions for installing and configuring..."
            }
        }
    ]
}
```

## CSS Classes

- **`.hoo-accordion-group`**: Main container styling
- **`.hoo-accordion`**: Individual accordion item (inherited from molecules)
- **`.hoo-accordion-summary`**: Header styling (inherited from molecules)
- **`.hoo-accordion-content`**: Content area styling (inherited from molecules)
- **`.hoo-icon`**: Icon styling and animations (inherited from molecules)

## Styling

### Container Layout
- **Display**: Block-level container element
- **Margins**: Inherits default section margins
- **Role**: Semantic `role="accordion"` for accessibility

### Item Spacing
- **Item Margins**: 0.25rem vertical spacing between accordion items
- **Content Indentation**: 2rem left margin for content areas
- **Header Alignment**: Flex layout for icon and text alignment

### Visual Hierarchy
- **Typography**: 20px headings for consistent hierarchy
- **Icon Size**: 1.5rem icons with proper alignment
- **Content Flow**: Proper spacing for readability

## Use Cases

### Content Organization
- **FAQ Sections**: Multiple questions with expandable answers
- **Product Information**: Features, specifications, and details
- **Documentation**: Technical guides with collapsible sections
- **Help Systems**: Support content with progressive disclosure

### Interface Design
- **Settings Panels**: Grouped configuration options
- **Dashboard Widgets**: Collapsible information sections
- **Form Organization**: Large forms divided into logical sections
- **Navigation Menus**: Hierarchical menus with subcategories

### Educational Content
- **Course Materials**: Lessons with expandable modules
- **Training Guides**: Step-by-step instructions
- **Reference Materials**: Categorized information
- **Tutorials**: Progressive learning content

## Accessibility

### Semantic Structure
- **Role Attribution**: `role="accordion"` identifies component type
- **Section Element**: Provides semantic grouping for screen readers
- **Heading Hierarchy**: Maintains proper heading structure (`<h3>`)
- **Landmark Navigation**: Allows users to navigate to accordion sections

### Keyboard Navigation
- **Tab Order**: Logical tab order through accordion headers
- **Enter/Space**: Toggle accordion open/closed state
- **Arrow Keys**: Navigate between accordion items (with additional JS)
- **Focus Management**: Clear focus indicators on all interactive elements

### Screen Reader Support
- **State Announcements**: Open/closed states announced automatically
- **Content Structure**: Logical reading order through grouped content
- **Label Association**: Headers properly associated with content
- **Context Information**: Group context provided to users

## Behavior Patterns

### Default Behavior
- **Independent Operation**: Each accordion operates independently
- **Multi-Open**: Multiple sections can be open simultaneously
- **State Persistence**: States maintained during user interaction
- **No Auto-Close**: Opening one doesn't close others

### Enhanced Behaviors (with JavaScript)
- **Exclusive Mode**: Only one accordion open at a time
- **Keyboard Navigation**: Arrow key navigation between items
- **Animation Control**: Enhanced opening/closing animations
- **State Management**: Programmatic control of accordion states

## Best Practices

### Content Strategy
- **Logical Grouping**: Group only related content together
- **Clear Headings**: Use descriptive, scannable titles
- **Consistent Voice**: Maintain consistent tone across sections
- **Progressive Disclosure**: Show most important information first

### User Experience
- **Reasonable Defaults**: Consider which sections should be open initially
- **Content Balance**: Avoid overly long or short content sections
- **Visual Consistency**: Maintain consistent styling across all items
- **Loading States**: Handle dynamic content gracefully

### Development
- **Semantic HTML**: Always use proper HTML5 elements
- **Progressive Enhancement**: Ensure functionality without JavaScript
- **Performance**: Optimize for large numbers of accordion items
- **Testing**: Test with keyboard users and screen readers

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **HTML5 Details**: Requires `<details>`/`<summary>` element support
- **CSS Features**: Basic CSS support for styling and animations
- **Accessibility**: Works with modern screen readers and assistive technologies

## SCSS Files

**Accordion Styles:**
- `lib/sass/02-molecules/accordion/`
