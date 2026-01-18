---
title: "Select Grouped"
description: "A custom select component with grouped options, providing an enhanced dropdown experience with autocomplete functionality and accessibility features. Combines a text input with an expandable dropdown "
type: "components"
layout: "single"
patternId: "atoms-input-select-grouped"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Select Grouped"
seoDescription: "Input Select Grouped Atoms"
weight: 60
markup: |
  &lt;div class=&quot;hoo-select&quot;&gt;
      &lt;div id=&#39;custom-select-status&#39; class=&#39;hidden-visually&#39; aria-live=&quot;polite&quot;&gt;&lt;/div&gt;
      &lt;input type=&quot;text&quot; id=&quot;hoo-select-input&quot; class=&quot;hoo-select-text&quot; aria-autocomplete=&quot;both&quot;
          aria-controls=&quot;custom-select-list&quot;  autocomplete=&quot;off&quot;&gt;
      &lt;button class=&quot;hoo-buttonicon&quot; 
          
          
          &gt;
          &lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
                  
                  &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-down&quot;&gt;&lt;/use&gt;
              &lt;/svg&gt;
          &lt;/span&gt;&lt;/button&gt;
      &lt;ul class=&quot;hoo-select-dropdown &quot;&gt;
          &lt;li class=&quot;hoo-optgroup&quot;&gt;
              &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Fruit Icons&lt;/div&gt;
              &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
              &lt;/ul&gt;
          &lt;/li&gt;
          &lt;li class=&quot;hoo-optgroup&quot;&gt;
              &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Fruits&lt;/div&gt;
              &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
              &lt;/ul&gt;
          &lt;/li&gt;
          &lt;li class=&quot;hoo-optgroup&quot;&gt;
              &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Vegetables&lt;/div&gt;
              &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
              &lt;/ul&gt;
          &lt;/li&gt;
      &lt;/ul&gt;
  &lt;/div&gt;
---

# Select Grouped

A custom select component with grouped options, providing an enhanced dropdown experience with autocomplete functionality and accessibility features. Combines a text input with an expandable dropdown list organized by option groups.

## Overview

The select grouped component creates an advanced dropdown selection interface that supports option grouping, autocomplete search, and keyboard navigation. It enhances the standard HTML select element with better usability and visual appeal while maintaining accessibility standards.

## Features

- **Grouped Options**: Organizes options into logical groups with headers
- **Autocomplete**: Text input with real-time filtering and autocomplete
- **Keyboard Navigation**: Full keyboard support with arrow keys and typing
- **Live Announcements**: Screen reader feedback via `aria-live` regions
- **Custom Styling**: Modern visual design with consistent theming
- **Touch Support**: Optimized for mobile and touch interfaces
- **Search Filtering**: Filter options by typing

## Structure

The component consists of:
1. **Container**: `.hoo-select` - Main component wrapper
2. **Status Region**: `aria-live="polite"` - Screen reader announcements
3. **Text Input**: `.hoo-select-text` - Searchable input field
4. **Toggle Button**: `{{> atoms-button-icon}}` - Dropdown toggle
5. **Dropdown**: `{{>atoms-select-drop-down-grouped}}` - Grouped options list

## Data Structure

```json
{
    "select": {
        "html-props": "data-testid=\"location-select\" placeholder=\"Choose location...\"",
        "groups": [
            {
                "label": "North America",
                "options": [
                    { "value": "us", "text": "United States" },
                    { "value": "ca", "text": "Canada" },
                    { "value": "mx", "text": "Mexico" }
                ]
            },
            {
                "label": "Europe", 
                "options": [
                    { "value": "uk", "text": "United Kingdom" },
                    { "value": "de", "text": "Germany" },
                    { "value": "fr", "text": "France" }
                ]
            }
        ]
    }
}
```

## CSS Classes

- `.hoo-select`: Main select component container
- `.hoo-select-text`: Text input field
- `.hoo-select.open`: Dropdown expanded state
- `.hoo-select.disabled`: Disabled state
- `.hoo-select.error`: Error validation state
- `.hoo-select.focused`: Focused state styling

## Styling

### Visual Design
- **Container**: White background with 1px border (`#d1d1d1`)
- **Border Radius**: 4px for modern appearance
- **Input Field**: Standard text input styling with padding
- **Button**: Icon button for dropdown toggle
- **Dropdown**: Elevated panel with shadow and border

### Layout
- **Width**: Full width by default, configurable
- **Height**: 32px standard input height
- **Positioning**: Relative container for absolute dropdown
- **Responsive**: Adapts to container width and mobile screens

### Interactive States
- **Default**: Neutral border and background
- **Hover**: Subtle border color change
- **Focus**: Blue focus ring and border highlight
- **Open**: Dropdown visible with updated button icon
- **Disabled**: Reduced opacity and disabled interactions

## Use Cases

### Country Selection
```handlebars
<label for="country-select">Country</label>
<div class="hoo-select">
    <input type="text" id="country-select" class="hoo-select-text" 
           placeholder="Select country..." aria-controls="country-list">
    <!-- Grouped by continent -->
</div>
```

### Department/Team Selection
```handlebars
<label for="department-select">Department</label>
<div class="hoo-select">
    <input type="text" id="department-select" class="hoo-select-text" 
           placeholder="Choose department..." aria-controls="dept-list">
    <!-- Grouped by division -->
</div>
```

### Category Filtering
```handlebars
<label for="category-select">Product Category</label>
<div class="hoo-select">
    <input type="text" id="category-select" class="hoo-select-text" 
           placeholder="Filter categories..." aria-controls="category-list">
    <!-- Grouped by product type -->
</div>
```

## Accessibility

- **ARIA Compliance**: Full ARIA implementation for screen readers
- **Keyboard Navigation**: Arrow keys, Enter, Escape, Tab support
- **Live Regions**: `aria-live` announcements for selection changes
- **Autocomplete**: `aria-autocomplete="both"` for predictive text
- **Controls**: `aria-controls` linking input to dropdown list
- **Screen Reader**: Clear announcements of groups and options
- **Focus Management**: Proper focus handling during navigation

## Keyboard Interactions

- **Tab**: Move focus to/from the select component
- **Enter/Space**: Open dropdown when closed, select option when open
- **Escape**: Close dropdown and return focus to input
- **Arrow Up/Down**: Navigate through options
- **Home/End**: Jump to first/last option
- **Letter Keys**: Quick jump to options starting with typed letter
- **Backspace**: Clear search text and filter

## JavaScript Integration

### Event Handling

### Value Management

## Dropdown Integration

The component works with `atoms-select-drop-down-grouped` for the options panel:

```handlebars
<div class="hoo-select-dropdown" id="custom-select-list">
    {{#each groups}}
    <div class="hoo-optgroup">
        <div class="hoo-optgroup-label">{{label}}</div>
        {{#each options}}
        <div class="hoo-option" data-value="{{value}}">{{text}}</div>
        {{/each}}
    </div>
    {{/each}}
</div>
```

## Form Integration

### Within Field Component
```handlebars
{{#field}}
<div class="hoo-field" role="group">
    <label class="hoo-label" for="location-select">Location</label>
    {{> atoms-select-grouped}}
    {{> atoms-input-description}}
</div>
{{/field}}
```

### With Validation
```handlebars
<label for="country-select">Country *</label>
<div class="hoo-select error">
    <input type="text" id="country-select" class="hoo-select-text" 
           aria-describedby="country-error" required>
</div>
{{> atoms-validation-message}}
```

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Legacy Support**: Progressive enhancement for older browsers
- **Mobile Browsers**: Optimized touch interactions and virtual keyboards
- **Screen Readers**: Excellent support in NVDA, JAWS, VoiceOver

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/input.scss`
- `lib/sass/atoms/buttons.scss`

**Molecule Styles:**
- `lib/sass/molecules/forms.scss`

## Performance

- **Lazy Loading**: Options loaded on demand for large datasets
- **Virtual Scrolling**: Efficient rendering for many options
- **Debounced Search**: Optimized filtering with input debouncing
- **Memory Efficient**: Minimal DOM footprint when closed