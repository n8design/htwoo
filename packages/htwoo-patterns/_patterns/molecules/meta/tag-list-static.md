---
title: Static Tag List
order: 10
---

# Static Tag List

A list of non-interactive tags for displaying metadata and informational labels.

## Overview

The Static Tag List provides a structured way to display multiple informational tags as a cohesive group. It's ideal for showing metadata, categories, or statuses that don't require user interaction, such as article tags, document properties, or item attributes.

## Features

- Non-interactive display-only tags
- Consistent spacing and layout using flexbox
- Automatic wrapping for responsive behavior
- Semantic HTML structure with proper list elements
- Clean, minimal visual design
- Consistent typography and sizing
- Accessible markup with proper semantic elements

## CSS Classes

- `.hoo-meta-list` - Main container with flexbox layout and gap spacing
- `.hoo-mtag` - Individual tag styling with rounded corners and neutral colors
- `.hoo-mtag-lbl` - Tag label text with proper typography sizing

## Visual Properties

### Container Layout

- **Display**: Flex with row direction and wrapping
- **Gap**: 0.35rem vertical, 0.5rem horizontal spacing
- **Min-height**: 2.75rem for consistent layout
- **List styling**: Reset with no bullets or default margins

### Tag Styling

- **Background**: Neutral-100 (light gray)
- **Text color**: Neutral-700 (dark gray)
- **Border radius**: 0.75em for rounded appearance
- **Height**: 1.5em for consistent sizing
- **Typography**: 1rem base with 0.875em label text

## Usage Guidelines

Use static tag lists when:

- Displaying article categories or topics
- Showing metadata that doesn't require interaction
- Indicating item properties or attributes
- Labeling content with keywords or descriptors
- Presenting status information that's informational only
- Creating visual groupings of related information

### Content Guidelines

- Keep tag labels concise and descriptive
- Use consistent terminology across similar tags
- Consider alphabetical or priority-based ordering
- Avoid overly long tag names that may wrap awkwardly
- Group related tags together logically

## Layout Behavior

### Responsive Wrapping

The static tag list automatically wraps to new lines when:

- Container width becomes too narrow
- Too many tags to fit on a single line
- Content is viewed on smaller screens

### Spacing and Alignment

- Tags align to the left with consistent gaps
- Vertical spacing maintains readability
- Minimum height prevents layout collapse with fewer tags

## SCSS

## Accessibility

- Uses semantic `<ul>` element for proper list structure
- Includes proper `<li>` elements for each tag item
- Uses `<span>` elements for non-interactive content
- Maintains proper text contrast ratios
- Supports screen reader navigation through list structure
- No focus management needed due to non-interactive nature
- Clear, descriptive text content for each tag

## CSS Classes

* `.hoo-meta-list` - Container for the list of tags

## Customization

Static tag lists can be customized for specific use cases:
* Add custom colors to indicate different statuses or categories
* Use with icons for enhanced visual meaning
* Adjust spacing for different density requirements
* Combine with tooltips for additional information

## Accessibility

* Properly structured lists with `<ul>` and `<li>` elements
* Since static tags are not interactive, they don't receive focus
* For tags representing important metadata, consider adding appropriate `aria-label` to provide context
* Ensure sufficient color contrast for all tags
* If tags represent status information, consider using appropriate ARIA live regions
