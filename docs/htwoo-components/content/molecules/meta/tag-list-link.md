---
title: "Link Tag List"
description: "A list of clickable link tags for navigation between pages or content sections."
type: "components"
layout: "single"
patternId: "molecules-meta-tag-list-link"
category: "molecules"
subcategory: "meta"
seoTitle: "Molecules - Meta Tag List Link"
seoDescription: "Meta Tag List Link Molecules"
weight: 30
hasVariants: false
markup: |
  &lt;ul class=&quot;hoo-meta-list&quot;&gt;
      &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;hTWOo&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Fluent&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;Design&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;at&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;its&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;?&quot; class=&quot;hoo-mtag&quot;&gt;&lt;span class=&quot;hoo-mtag-lbl&quot;&gt;best&lt;/span&gt;&lt;/a&gt;
  &lt;/li&gt;
  &lt;/ul&gt;
---

# Link Tag List

A list of clickable link tags for navigation between pages or content sections.

## Overview

The Link Tag List provides a structured way to display multiple navigational tags as a cohesive group. It's ideal for category navigation, topic browsing, or providing links to related content where users need to navigate to different pages or sections.

## Features

- Semantic link elements with proper navigation behavior
- Hover states for visual feedback
- Support for external links with proper security attributes
- Keyboard navigation support (Tab, Enter)
- Consistent spacing and layout using flexbox
- Automatic wrapping for responsive behavior
- Proper link semantics for accessibility
- Support for visited link states

## CSS Classes

- `.hoo-meta-list` - Main container with flexbox layout and gap spacing
- `.hoo-mtag` - Link styling with hover states and navigation behavior
- `.hoo-mtag-lbl` - Tag label text with proper typography sizing

## Visual Properties

### Default State

- **Background**: Neutral-100 (light gray)
- **Text color**: Neutral-700 (dark gray)
- **Text decoration**: None (removes default link underline)
- **Cursor**: Pointer

### Hover State

- **Background**: Theme-700 (primary brand color)
- **Text color**: White (neutral-000)
- **Transition**: Smooth color transition

### Visited State

- **Maintains**: Same styling as default state
- **Consistency**: No special visited link styling to maintain visual consistency

## Link Attributes

### Required Attributes

- `href` - The URL that each link points to
- `class="hoo-mtag"` - Applies proper tag styling

### Optional Attributes

- `target="_blank"` - Opens link in new tab/window
- `rel="noopener noreferrer"` - Security attributes for external links
- `title` - Additional context for the link destination
- `aria-label` - Alternative label when link text needs clarification

### Example with External Link

```html
<a href="https://external-site.com" class="hoo-mtag" target="_blank" rel="noopener noreferrer">
  <span class="hoo-mtag-lbl">External Resource</span>
</a>
```

## Usage Guidelines

Use link tag lists when:

- Creating category or topic navigation
- Providing links to related content or articles
- Building tag-based browsing interfaces
- Linking to filtered views or search results
- Navigating between content sections
- Creating topic-based content discovery

### Navigation Patterns

- **Category Navigation**: Link to category landing pages
- **Topic Browsing**: Navigate to content filtered by topic
- **Related Content**: Link to similar or related articles
- **Search Results**: Navigate to search results for specific tags
- **Content Discovery**: Browse content by classification

## SEO and Analytics

### SEO Benefits

- Proper link structure supports search engine crawling
- Category and topic links improve site architecture
- Internal linking helps distribute page authority
- Meaningful link text improves search relevance

### Analytics Tracking

```html
<!-- Example with analytics tracking -->
<a href="/category/technology" 
   class="hoo-mtag" 
   data-track="tag-navigation" 
   data-category="technology">
  <span class="hoo-mtag-lbl">Technology</span>
</a>
```

## SCSS

## Accessibility

- Uses semantic `<a>` elements for proper navigation behavior
- Supports keyboard navigation (Tab, Enter)
- Provides clear focus indicators for keyboard users
- Includes proper list structure with `<ul>` and `<li>` elements
- Maintains meaningful link text that makes sense out of context
- Supports screen reader navigation and link lists
- Includes proper security attributes for external links
- Ensures sufficient color contrast for all link states

### External Link Accessibility

When linking externally, consider:

```html
<a href="https://external-site.com" 
   class="hoo-mtag" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Technology articles (opens in new tab)">
  <span class="hoo-mtag-lbl">Technology</span>
</a>
```