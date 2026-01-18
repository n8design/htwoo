---
title: "Primary Link Tag List"
description: "A list of clickable primary-styled link tags for emphasizing important navigation and featured content."
type: "components"
layout: "single"
patternId: "molecules-meta-tag-list-link-primary"
category: "molecules"
subcategory: "meta"
seoTitle: "Molecules - Meta Tag List Link Primary"
seoDescription: "Meta Tag List Link Primary Molecules"
weight: 31
hasVariants: false
markup: |
  &lt;ul class=&quot;hoo-meta-list&quot;&gt;
      &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag-primary&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag-primary&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Fluent&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag-primary&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Design&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag-primary&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;at&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag-primary&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;its&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag-primary&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;best&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;/ul&gt;
---

# Primary Link Tag List

A list of clickable primary-styled link tags for emphasizing important navigation and featured content.

## Overview

The Primary Link Tag List provides a structured way to display multiple navigational tags with primary theme styling as a cohesive group. It's ideal for highlighting featured categories, important links, or priority navigation options that need visual emphasis and lead to key content areas.

## Features

- Semantic primary-styled link elements with navigation behavior
- Emphasized visual appearance using brand colors
- Inverse hover states for clear interaction feedback
- Support for external links with proper security attributes
- Keyboard navigation support (Tab, Enter)
- Consistent spacing and layout using flexbox
- Automatic wrapping for responsive behavior
- High-contrast styling for important navigation

## CSS Classes

- `.hoo-meta-list` - Main container with flexbox layout and gap spacing
- `.hoo-mtag-primary` - Primary link styling with brand colors and hover states
- `.hoo-mtag-lbl` - Tag label text with proper typography sizing

## Visual Properties

### Default State

- **Background**: Theme-700 (primary brand color)
- **Text color**: White (neutral-000)
- **Text decoration**: None (removes default link underline)
- **Cursor**: Pointer

### Hover State

- **Background**: Neutral-100 (light gray) - inverse of standard tags
- **Text color**: Neutral-700 (dark gray)
- **Transition**: Smooth color transition

### Visited State

- **Maintains**: Same styling as default state for consistency
- **No distinction**: Primary links maintain visual consistency regardless of visited status

## Link Attributes

### Required Attributes

- `href` - The URL that each link points to
- `class="hoo-mtag-primary"` - Applies primary tag styling

### Optional Attributes

- `target="_blank"` - Opens link in new tab/window
- `rel="noopener noreferrer"` - Security attributes for external links
- `title` - Additional context for the link destination
- `aria-label` - Alternative label when link text needs clarification

### Example with Analytics

```html
<a href="/featured/technology" 
   class="hoo-mtag-primary" 
   data-track="primary-tag-navigation" 
   data-category="featured">
  <span class="hoo-mtag-lbl">Featured Tech</span>
</a>
```

## Usage Guidelines

Use primary link tag lists when:

- Highlighting featured or priority navigation options
- Creating emphasized category links for important content
- Building navigation for special collections or featured sections
- Linking to high-priority content areas
- Developing landing page navigation with visual hierarchy
- Creating calls-to-action within tag-based interfaces

### Navigation Hierarchy

Combine with standard link tags for effective information architecture:

```html
<ul class="hoo-meta-list">
  <!-- Primary links for featured content -->
  <li>
    <a href="/featured" class="hoo-mtag-primary">
      <span class="hoo-mtag-lbl">Featured</span>
    </a>
  </li>
  
  <!-- Standard links for regular categories -->
  <li>
    <a href="/technology" class="hoo-mtag">
      <span class="hoo-mtag-lbl">Technology</span>
    </a>
  </li>
  <li>
    <a href="/design" class="hoo-mtag">
      <span class="hoo-mtag-lbl">Design</span>
    </a>
  </li>
</ul>
```

## SEO and Performance

### SEO Benefits

- Primary styling draws attention to important content areas
- Proper link structure supports search engine understanding
- Featured content links can improve site architecture
- Important category links help distribute page authority

### Performance Considerations

- Consider preloading important linked content
- Use analytics to track primary link performance
- Monitor user engagement with featured navigation

## SCSS

## Accessibility

- Uses semantic `<a>` elements for proper navigation behavior
- Maintains excellent color contrast in both default and hover states
- Supports keyboard navigation (Tab, Enter)
- Provides clear focus indicators for keyboard users
- Includes proper list structure with `<ul>` and `<li>` elements
- Maintains meaningful link text that makes sense out of context
- Supports screen reader navigation and link lists
- Includes proper security attributes for external links
- Ensures sufficient color contrast for all link states

### Enhanced Accessibility for Primary Links

```html
<a href="/featured-articles" 
   class="hoo-mtag-primary"
   aria-label="Featured articles - highlighted content section">
  <span class="hoo-mtag-lbl">Featured</span>
</a>
```

## Brand Integration

### Color Strategy

- Uses primary brand color to emphasize importance
- Provides inverse hover feedback for clear interaction
- Maintains brand consistency across navigation elements
- Supports theme customization via CSS custom properties

### Visual Impact

- Creates clear visual hierarchy in navigation
- Draws attention to important content areas
- Maintains accessibility while emphasizing priority
- Integrates seamlessly with standard tag navigation

## CSS Classes

* `.hoo-meta-list` - Container for the list of tags

## Attributes

Common attributes for link tags in the list:
* `href` - The URL that each link points to
* `target` - Optional target window (e.g., `_blank` for new tab)
* `rel` - Relationship attributes, use `rel="noopener noreferrer"` with `target="_blank"`

## Accessibility

* Properly structured lists with `<ul>` and `<li>` elements
* Link tags are naturally keyboard accessible
* When opening links in new windows, include appropriate indication and ARIA attributes
* Ensure links have meaningful text that makes sense out of context
* Ensure sufficient color contrast with the primary theme colors
* Consider adding a descriptive `aria-label` to the list if its purpose needs clarification