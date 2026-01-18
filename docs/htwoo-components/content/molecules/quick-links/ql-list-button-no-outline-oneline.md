---
title: "Quick Link Button - No Outline One Line"
description: "A minimal button-style quick link without borders and single-line title display. This variant provides the most subtle interaction style while maintaining compact height for space-efficient layouts."
type: "components"
layout: "single"
patternId: "molecules-quick-links-ql-list-button-no-outline-oneline"
category: "molecules"
subcategory: "quick-links"
seoTitle: "Molecules - Quick Links Ql List Button No Outline Oneline"
seoDescription: "Quick Links Ql List Button No Outline Oneline Molecules"
weight: 52
hasVariants: false
markup: |
  &lt;a class=&quot;hoo-qllink&quot; href=&quot;?&quot;&gt;
  &lt;article class=&quot;hoo-qlbtn no-outline one-line&quot;&gt;
      &lt;figure class=&quot;hoo-ql-media&quot;&gt;
          &lt;img src=&quot;/htwoo-core/images/placeholders/ph-16by9.png&quot; class=&quot;hoo-ql-img&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;
      &lt;/figure&gt;
      &lt;div class=&quot;hoo-qlinfo&quot;&gt;
          &lt;div class=&quot;hoo-qltitle&quot;&gt;This is a really long title to get everything working lorem ipsum dolor sit amet&lt;/div&gt;
          &lt;div class=&quot;hoo-qldesc&quot;&gt;Quick-links description lorem ipsum dolor sit amet&lt;/div&gt;
      &lt;/div&gt;
  &lt;/article&gt;&lt;/a&gt;
---

# Quick Link Button - No Outline One Line

A minimal button-style quick link without borders and single-line title display. This variant provides the most subtle interaction style while maintaining compact height for space-efficient layouts.

## Overview

The no outline one-line button offers the most minimal visual styling while preserving interactive functionality. It's ideal for clean interfaces, subtle navigation, or contexts where visual simplicity is paramount, while still providing clear hover feedback and single-line text efficiency.

## Features

- **Minimal Styling**: No borders or backgrounds for clean appearance
- **Single-Line Title**: Text truncation with ellipsis for consistent height
- **Subtle Interaction**: Hover state provides gentle feedback
- **Compact Height**: Minimal vertical space usage (44px)
- **Icon Integration**: Support for both image and SVG icons
- **Clean Integration**: Blends seamlessly with content

## Structure

The component consists of:
1. **Link Container**: `.hoo-qllink` - Link wrapper element
2. **Button Container**: `.hoo-qlbtn.no-outline.oneline` - Main button with minimal styling
3. **Icon Area**: `.hoo-ql-media` - Icon display (optional)
4. **Info Area**: `.hoo-qlinfo` - Text content container
5. **Title**: `.hoo-qltitle` - Single-line title with ellipsis

## Data Structure

```json
{
    "quick-link": {
        "href": "/user-profile",
        "title": "User Profile Management",
        "qlimg": {
            "src": "/icons/user.svg",
            "alt": "User icon"
        }
    }
}
```

### Text-Only Variant

```json
{
    "quick-link": {
        "href": "/help-center",
        "title": "Help Center and Documentation"
    }
}
```

## CSS Classes

- `.hoo-qllink`: Link wrapper element
- `.hoo-qlbtn`: Main button container
- `.hoo-qlbtn.no-outline`: No border/outline styling
- `.hoo-qlbtn.oneline`: Single-line text constraint
- `.hoo-ql-media`: Icon container (18px for minimal style)
- `.hoo-qlinfo`: Text information container
- `.hoo-qltitle`: Title text with ellipsis overflow

## Styling

### Visual Design
- **Border**: None (transparent)
- **Background**: Transparent with subtle hover state
- **Padding**: 8px vertical, 12px horizontal (minimal padding)
- **Height**: Fixed 44px height for touch accessibility
- **Text Color**: Standard text color (`#323130`)

### Layout
- **Direction**: Horizontal layout (icon beside text)
- **Alignment**: Items vertically centered
- **Gap**: 8px between icon and text
- **Text Constraint**: Single line with `white-space: nowrap`

### Interactive States
- **Default**: Completely transparent, standard text color
- **Hover**: Very light background (`#f8f8f8`) with smooth transition
- **Focus**: Blue focus ring for keyboard accessibility (more prominent for no-outline)
- **Active**: Subtle pressed state with light background

## Use Cases

### Clean Navigation Lists
```handlebars
<nav class="clean-nav">
    <ul class="nav-list">
        <!-- Minimal navigation without visual clutter -->
        {{> molecules-ql-list-button-no-outline-oneline}}
    </ul>
</nav>
```

### User Menu Options
```handlebars
<div class="user-dropdown">
    <div class="dropdown-content">
        <!-- Subtle user menu options -->
        {{> molecules-ql-list-button-no-outline-oneline}}
    </div>
</div>
```

### Footer Links
```handlebars
<footer class="page-footer">
    <div class="footer-links">
        <!-- Minimal footer navigation -->
        {{> molecules-ql-list-button-no-outline-oneline}}
    </div>
</footer>
```

### Secondary Actions
```handlebars
<div class="secondary-actions">
    <h4>More Options</h4>
    <div class="action-list">
        <!-- Subtle secondary actions -->
        {{> molecules-ql-list-button-no-outline-oneline}}
    </div>
</div>
```

## Typography

- **Font Size**: 14px
- **Line Height**: 20px (1lh for single line)
- **Font Weight**: 400 (normal weight for subtlety)
- **Text Overflow**: `ellipsis` with `overflow: hidden`
- **Color**: Standard text color for minimal appearance

## Accessibility Considerations

### Enhanced Focus States
Since there are no visual borders, focus states are more prominent:
- **Focus Ring**: More visible focus indicator
- **Focus Color**: Higher contrast focus ring
- **Focus Offset**: Clear separation from content

### Screen Reader Support
- **Clear Navigation**: Proper semantic structure
- **Meaningful Text**: Descriptive link text essential
- **Context Clues**: May need additional context for minimal appearance

## Content Guidelines

### Title Text
- **Descriptive First Words**: Critical since visual cues are minimal
- **Clear Action Words**: Use verbs to indicate clickable actions
- **Sufficient Context**: Titles must stand alone without visual emphasis
- **Truncation Awareness**: Ensure beginning of title provides meaning

### Icon Guidelines
- **Subtle Icons**: Use lighter weight icons to match minimal style
- **Meaningful Icons**: Icons become more important for recognition
- **Consistent Style**: Maintain consistent icon treatment
- **Smaller Size**: 18px icons work well with minimal style

## When to Use No Outline One-Line

### Choose No Outline When:
- **Clean Design**: Minimal visual design is priority
- **Content Integration**: Links should blend with surrounding content
- **Secondary Navigation**: Less prominent navigation options
- **Space Efficiency**: Need maximum content density

### Choose Outline Instead When:
- **Clear Boundaries**: Need obvious interactive elements
- **Primary Actions**: Important actions need visual prominence
- **Complex Interfaces**: Users need clear interactive cues
- **Accessibility Priority**: Visual indicators help users

## Performance

- **Minimal CSS**: Lightest weight styling option
- **No Visual Effects**: Fastest rendering with minimal hover states
- **Efficient Layout**: Simple horizontal layout
- **Memory Efficient**: Minimal DOM styling overhead

## Browser Support

- **Universal Support**: Works in all browsers with CSS support
- **Progressive Enhancement**: Graceful degradation to standard links
- **Touch Optimized**: Minimal but sufficient touch targets
- **Screen Reader**: Excellent semantic support

## SCSS Import

## Design Philosophy

### Minimal Design Principles
- **Content First**: Let content take precedence over UI elements
- **Subtle Interaction**: Provide feedback without visual noise
- **Clean Aesthetics**: Remove unnecessary visual elements
- **Functional Clarity**: Maintain usability despite minimal styling

## Integration Examples

### User Interface Dropdown
```handlebars
<div class="user-menu-dropdown">
    <div class="dropdown-header">
        <span class="user-name">John Doe</span>
    </div>
    <div class="dropdown-body">
        {{#each user-menu-items}}
        {{> molecules-ql-list-button-no-outline-oneline quick-link=this}}
        {{/each}}
    </div>
</div>
```

### Sidebar Navigation
```handlebars
<aside class="content-sidebar">
    <nav class="sidebar-nav">
        <h3>Quick Links</h3>
        <div class="nav-items">
            {{#each sidebar-links}}
            {{> molecules-ql-list-button-no-outline-oneline quick-link=this}}
            {{/each}}
        </div>
    </nav>
</aside>
```