---
title: Meta Components
order: 10
---

# Meta Components

Meta components are used to display metadata, tags, categories, or other supplementary information in a compact, visually distinct format.

## Meta Tag Types

* **Button Tag** - Interactive tag that can be clicked to trigger an action
* **Link Tag** - Interactive tag that navigates to another page
* **Static Tag** - Non-interactive tag for display purposes only
* **Primary Style** - Tag with primary theme color styling

## SCSS Imports

**Main Component**

**SCSS Partial Location**

## Usage

Meta tags should be used when:
* Displaying categories, tags, or keywords
* Showing metadata attributes like status, type, or classification
* Creating filterable or clickable tag interfaces
* Displaying compact labels that need visual distinction from regular text

## Best Practices

* Keep tag text short and concise
* Use consistent tag types for similar functionality
* Consider accessibility when choosing between button, link, and static tags
* Use primary styling sparingly for emphasizing important tags
* Group related tags together using the tag list component
* Avoid overloading interfaces with too many tags
* Consider using icons with tags for enhanced visual cues

## CSS Classes

* `.hoo-mtag` - Base tag class for standard color theme
* `.hoo-mtag-primary` - Primary color themed tag
* `.hoo-mtag-lbl` - Inner text container for the tag

## Accessibility

* Use appropriate semantic elements based on functionality:
  * `<button>` for actionable tags
  * `<a>` for navigational tags
  * `<span>` for static display tags
* Ensure sufficient color contrast between tag background and text
* Consider adding descriptive title attributes for tags with truncated text
* For clickable tags, ensure they have appropriate focus states
* For tags representing status or state, consider using appropriate ARIA attributes
