---
title: "Accordion Item"
description: "A collapsible content container that uses the native HTML `<details>` element to provide expand/collapse functionality. The accordion item is the fundamental building block for creating progressive di"
type: "components"
layout: "single"
patternId: "molecules-accordion-accordion-item"
category: "molecules"
subcategory: "accordion"
seoTitle: "Molecules - Accordion Accordion Item"
seoDescription: "Accordion Accordion Item Molecules"
weight: 10
markup: |
  &lt;details class=&quot;hoo-accordion&quot;&gt;
      &lt;summary class=&quot;hoo-accordion-header&quot;&gt;
          &lt;div class=&quot;hoo-accordion-summary&quot;&gt;
              &lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                      
                      &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-right&quot;&gt;&lt;/use&gt;
                  &lt;/svg&gt;
              &lt;/span&gt;        &lt;h3&gt;Lorem ipsum dolor sit.&lt;/h3&gt;
          &lt;/div&gt;
      &lt;/summary&gt;    &lt;div class=&quot;hoo-accordion-content&quot;&gt;
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique delectus facilis, quae aspernatur ipsam eveniet commodi assumenda ipsa iure dolorem quidem enim illum perferendis amet nam suscipit unde dicta reiciendis eligendi ratione dignissimos? Aperiam hic vel quis ex consequuntur, possimus magnam rerum in officiis fugit non inventore voluptas earum minima iure! Et, eaque repellendus cumque optio nam odit. Voluptatibus nulla facere atque iusto veniam, explicabo voluptatum maxime praesentium quasi corrupti quia? Unde tempore officia esse deserunt praesentium ipsum accusantium hic expedita aliquid harum nobis doloribus necessitatibus cum facilis, temporibus laudantium rem quo tempora eius maiores ab veritatis. Unde, ex!
      &lt;/div&gt;
  &lt;/details&gt;
  
---

# Accordion Item

A collapsible content container that uses the native HTML `<details>` element to provide expand/collapse functionality. The accordion item is the fundamental building block for creating progressive disclosure interfaces with optimal accessibility and performance.

## Overview

The Accordion Item component provides a single collapsible section that can contain any type of content. Built on semantic HTML with the `<details>` and `<summary>` elements, it offers native keyboard support, screen reader compatibility, and smooth visual transitions. Each item can be used independently or combined into accordion groups.

## Features

- **Native HTML Semantics**: Uses `<details>` element for built-in behavior
- **Keyboard Accessible**: Full keyboard navigation support out of the box
- **Screen Reader Friendly**: Proper ARIA semantics and announcements
- **Smooth Animations**: CSS transitions for expand/collapse states
- **Flexible Content**: Supports any content type in the collapsible area
- **Independent Operation**: Works standalone or in groups
- **Focus Management**: Clear focus indicators and logical tab order

## Structure

The component consists of:
1. **Details Container**: `<details>` - Main collapsible wrapper
2. **Summary Header**: `<summary>` - Clickable header with title and icon
3. **Content Area**: `.accordion-content` - Collapsible content container
4. **Toggle Icon**: `.icon` - Visual indicator for expand/collapse state

## Data Structure

```json
{
    "accordion-item": {
        "title": "Payment Methods",
        "content": "<p>We accept all major credit cards, PayPal, and bank transfers.</p>",
        "open": false
    }
}
```

### Rich Content Example

```json
{
    "accordion-item": {
        "title": "Technical Specifications",
        "content": "<div class='spec-grid'><div class='spec-item'><strong>Storage:</strong> 256GB SSD</div><div class='spec-item'><strong>Memory:</strong> 16GB RAM</div></div>",
        "open": true
    }
}
```

## CSS Classes

- `.hoo-accordion-item`: Main details container
- `.hoo-accordion-summary`: Clickable header area
- `.accordion-title`: Title text container
- `.accordion-content`: Collapsible content area
- `.icon`: Toggle icon (usually arrow)
- `.hoo-icon-arrow-down`: Default closed state icon

## Styling

### Visual Design
- **Header Height**: 48px minimum touch target
- **Padding**: 16px horizontal, 12px vertical
- **Border**: 1px solid border with subtle separator
- **Typography**: 14px font size, medium weight for title
- **Icon**: 16px chevron with smooth rotation transition

### Interactive States
- **Default**: Clean header with subtle border
- **Hover**: Light background color change
- **Focus**: Blue focus outline following accessibility guidelines
- **Active**: Slight background darkening on click
- **Open**: Icon rotation 180° with content expansion

### Animation
- **Icon Rotation**: 200ms ease-in-out transition
- **Content Expansion**: Smooth height transition
- **Hover Effects**: 150ms transition for background changes

## Use Cases

### FAQ Sections
```handlebars
<section class="faq-section">
    <h2>Frequently Asked Questions</h2>
    {{#each faq-items}}
    {{> molecules-accordion-item accordion-item=this}}
    {{/each}}
</section>
```

### Settings Panels
```handlebars
<div class="settings-panel">
    <h3>Account Settings</h3>
    {{> molecules-accordion-item}}
</div>
```

### Product Information
```handlebars
<div class="product-details">
    {{#each product-sections}}
    {{> molecules-accordion-item accordion-item=this}}
    {{/each}}
</div>
```

### Help Documentation
```handlebars
<div class="help-docs">
    <h2>Help Topics</h2>
    {{#each help-topics}}
    {{> molecules-accordion-item accordion-item=this}}
    {{/each}}
</div>
```

## Accessibility

- **Semantic HTML**: Uses native `<details>` and `<summary>` elements
- **Keyboard Navigation**: Space and Enter keys toggle expansion
- **Screen Reader Support**: Proper announcements of expand/collapse states
- **Focus Management**: Clear focus indicators and logical tab sequence
- **ARIA Labels**: Automatic ARIA expanded states from native element
- **High Contrast**: Focus and interactive states visible in high contrast mode

## Keyboard Interactions

- **Tab**: Navigate to accordion item
- **Space/Enter**: Toggle expand/collapse
- **Tab (within)**: Navigate through content when expanded
- **Shift+Tab**: Navigate backwards through interface

## Content Guidelines

### Title Text
- **Concise Descriptions**: Use clear, descriptive titles
- **Action-Oriented**: Suggest what users will find inside
- **Scannable**: Keep titles short enough to scan quickly
- **Consistent Structure**: Use parallel structure across items

### Content Organization
- **Logical Grouping**: Group related information together
- **Progressive Disclosure**: Start with most important information
- **Scannable Format**: Use headers, lists, and formatting for clarity
- **Appropriate Length**: Balance detail with usability

## Performance

- **Native Implementation**: Leverages browser optimizations for `<details>`
- **CSS-Only Animation**: No JavaScript required for basic functionality
- **Efficient Rendering**: Content hidden in DOM but not rendered when closed
- **Minimal Overhead**: Lightweight CSS with no JavaScript dependencies

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Details Element**: Excellent support in all modern browsers
- **Graceful Degradation**: Falls back to always-expanded content
- **Screen Readers**: Excellent support in NVDA, JAWS, VoiceOver

## SCSS Files

**Styles:**
- `lib/sass/molecules/accordion.scss`

## Best Practices

### Design Guidelines
- **Consistent Styling**: Maintain visual consistency across items
- **Clear Hierarchy**: Use appropriate heading levels in content
- **Logical Grouping**: Group related accordion items together
- **Content Preview**: Consider including preview text in titles