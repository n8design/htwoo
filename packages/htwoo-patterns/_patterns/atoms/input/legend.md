---
title: Legend
order: 92
---

# Legend

A semantic HTML legend element that provides accessible labeling for fieldset groups. Serves as the title or description for grouped form controls, improving accessibility and visual organization.

## Overview

The legend component provides semantic labeling for fieldset groups using the native HTML `<legend>` element. It creates an accessible relationship between the group label and the contained form controls, essential for screen reader users and form accessibility.

## Features

- **Semantic HTML**: Uses native `<legend>` element for proper accessibility
- **Fieldset Integration**: Automatically associated with parent fieldset
- **Custom Styling**: Supports modifier classes and custom HTML attributes
- **ARIA Support**: Accepts additional ARIA attributes for enhanced accessibility
- **Flexible Content**: Supports plain text and HTML content
- **Responsive Design**: Adapts to different screen sizes and layouts

## Structure

The component consists of:
1. **Container**: `<legend>` element with `.hoo-legend` class
2. **Modifiers**: Optional modifier classes for styling variations
3. **Content**: Text or HTML content describing the field group
4. **Attributes**: Custom HTML properties and ARIA tags

## Data Structure

```json
{
    "legend": {
        "text": "Personal Information",
        "modifier": "required",
        "html-props": "data-testid=\"personal-info\"",
        "aria-tags": "aria-describedby=\"info-description\""
    }
}
```

### With HTML Content

```json
{
    "legend": {
        "text": "Shipping Address <span class=\"required\">*</span>",
        "modifier": "emphasized"
    }
}
```

## CSS Classes

- `.hoo-legend`: Base legend styling
- `.hoo-legend.required`: Required field group styling
- `.hoo-legend.emphasized`: Emphasized/prominent styling
- `.hoo-legend.subtle`: Subdued styling for secondary groups
- `.hoo-legend.large`: Larger text size for primary sections

## Styling

### Visual Design
- **Typography**: 16px font size, 600 font weight (semi-bold)
- **Color**: `#323130` (neutral dark) for primary text
- **Spacing**: 12px bottom margin, 16px horizontal padding
- **Background**: Transparent with optional background for emphasized variant

### Layout
- **Position**: Positioned at top of fieldset border
- **Width**: Auto-width based on content
- **Alignment**: Left-aligned by default
- **Responsive**: Scales appropriately on mobile devices

### Variants
- **Default**: Standard neutral appearance
- **Required**: Red asterisk or styling to indicate required group
- **Emphasized**: Larger, bolder styling for primary sections
- **Subtle**: Lighter styling for secondary or optional groups

## Use Cases

### Personal Information Section
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend required">Personal Information</legend>
    <!-- First name, last name, email fields -->
</fieldset>
```

### Address Information
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend">Billing Address</legend>
    <!-- Address, city, state, zip fields -->
</fieldset>
```

### Preferences Group
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend subtle">Email Preferences</legend>
    <!-- Checkbox options for email types -->
</fieldset>
```

### Multi-step Form Section
```handlebars
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend emphasized">Step 2 of 3: Account Details</legend>
    <!-- Username, password, security questions -->
</fieldset>
```

## Accessibility

- **Semantic Association**: Automatically associated with parent fieldset
- **Screen Reader Support**: Announces group context when entering fieldset
- **Keyboard Navigation**: Not focusable itself, but provides context for group navigation
- **ARIA Enhancement**: Supports additional ARIA attributes for complex scenarios
- **Language Support**: Proper text content for internationalization

## HTML Structure

The legend must be the first child of a fieldset element:

```html
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend">Group Label</legend>
    <!-- Other form controls -->
</fieldset>
```

## Integration with Fieldset

Legend works seamlessly with the `molecules-fieldset` component:

```handlebars
{{#fieldset}}
<fieldset class="hoo-fieldset">
    {{> atoms-legend}}
    {{#each fields}}
        {{dynamicPartial this.type this}}
    {{/each}}    
</fieldset>
{{/fieldset}}
```

## Content Guidelines

### Clear Labeling
- Use descriptive, concise text that clearly identifies the group purpose
- Avoid technical jargon or ambiguous terms
- Consider the context of the entire form

### Required Indicators
- Use visual indicators (asterisk, color) for required field groups
- Ensure indicators are not solely color-dependent
- Provide text alternatives for screen readers

### Internationalization
- Plan for text expansion in different languages
- Use semantic HTML rather than hard-coded symbols
- Test with right-to-left languages if applicable

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Legacy Support**: Excellent backward compatibility with older browsers
- **Screen Readers**: Strong support in NVDA, JAWS, VoiceOver
- **Mobile**: Optimized for mobile screen readers and touch interfaces

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/input.scss`
- `lib/sass/atoms/forms.scss`

## Performance

- **Lightweight**: Minimal CSS footprint with no JavaScript
- **Native Element**: Uses browser-optimized native HTML element
- **No Dependencies**: Standalone component with no external requirements
- **Server Rendering**: Fully compatible with server-side rendering
