---
title: "Fieldset"
description: "A semantic HTML fieldset container that groups related form controls together with an optional legend. Provides accessible grouping of form fields with consistent styling and support for various visua"
type: "components"
layout: "single"
patternId: "molecules-forms-fieldset"
category: "molecules"
subcategory: "forms"
seoTitle: "Molecules - Forms Fieldset"
seoDescription: "Forms Fieldset Molecules"
weight: 30
hasVariants: false
markup: |
  &lt;fieldset class=&quot;hoo-fieldset &quot; &gt;
      &lt;legend class=&quot;hoo-legend &quot;  &gt;Personal Information&lt;/legend&gt;
      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;First Name&lt;/label&gt;
          &lt;input class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;  type=&quot;text&quot;  
        placeholder=&quot;A placeholder text&quot; 
        aria-describedby=&quot;firstname-desc-toggle-47 firstname-error-toggle-47&quot;
         &gt;
          &lt;p class=&quot;hoo-input-description&quot; id=&quot;firstname-desc-47&quot;&gt;Please enter your first name with only alphabetic characters&lt;/p&gt;
          &lt;output class=&quot;hoo-validation&quot; id=&quot;firstname-error-47&quot; &gt;This is an error message&lt;/output&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Last Name&lt;/label&gt;
          &lt;input class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;  type=&quot;text&quot;  
        placeholder=&quot;A placeholder text&quot; 
        aria-describedby=&quot;lastname-desc-toggle-47 lastname-error-toggle-47&quot;
         &gt;
          &lt;p class=&quot;hoo-input-description&quot; id=&quot;lastname-desc-47&quot;&gt;Please enter your last name with only alphabetic characters&lt;/p&gt;
          &lt;output class=&quot;hoo-validation&quot; id=&quot;lastname-error-47&quot; &gt;This is an error message&lt;/output&gt;
      &lt;/div&gt;
  &lt;/fieldset&gt;
---

# Fieldset

A semantic HTML fieldset container that groups related form controls together with an optional legend. Provides accessible grouping of form fields with consistent styling and support for various visual states.

## Overview

The fieldset component provides a semantic way to group related form controls, improving both accessibility and visual organization. It wraps multiple form fields with proper ARIA semantics and supports various styling modifiers for different use cases.

## Features

- **Semantic Grouping**: Uses native HTML `<fieldset>` element for proper accessibility
- **Legend Support**: Integrated legend for describing the field group
- **Dynamic Field Rendering**: Supports multiple field types within the group
- **Style Variants**: Multiple visual styles including no-legend, no-outline, and raised
- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Validation**: Supports group-level validation states

## Structure

The component consists of:
1. **Container**: `<fieldset>` - Main semantic container with `.hoo-fieldset` class
2. **Legend**: `{{> atoms-legend}}` - Optional group label
3. **Fields**: Dynamic field collection rendered with `{{dynamicPartial}}`

## Data Structure

```json
{
    "fieldset": {
        "modifier": "raised",
        "html-props": "data-testid=\"contact-info\"",
        "legend": {
            "text": "Contact Information"
        },
        "fields": [
            {
                "type": "atoms-input-text",
                "label": "First Name",
                "required": true
            },
            {
                "type": "atoms-input-text", 
                "label": "Last Name",
                "required": true
            }
        ]
    }
}
```

## CSS Classes

- `.hoo-fieldset`: Main fieldset container
- `.hoo-fieldset.no-legend`: Fieldset without legend styling
- `.hoo-fieldset.no-outline`: Fieldset without border outline
- `.hoo-fieldset.raised`: Fieldset with elevated/card-like appearance

## Styling

### Visual Design
- **Border**: 1px solid `#d1d1d1` with 4px border radius
- **Padding**: 16px internal spacing
- **Background**: White (`#ffffff`) with subtle shadow for raised variant
- **Margin**: 16px bottom spacing between fieldsets

### Layout
- **Direction**: Vertical stacking of child elements
- **Gap**: 12px between form fields
- **Legend**: Positioned at top with negative margin offset

### Variants
- **Default**: Standard border with legend
- **No Legend**: Simplified border without legend offset
- **No Outline**: Clean appearance without visible border
- **Raised**: Card-like appearance with elevation shadow

## Use Cases

### Personal Information Forms
```handlebars
{{#fieldset}}
<fieldset class="hoo-fieldset">
    <legend class="hoo-legend">Personal Information</legend>
    <!-- First name, last name, email fields -->
</fieldset>
{{/fieldset}}
```

### Address Information
```handlebars
{{#fieldset}}
<fieldset class="hoo-fieldset raised">
    <legend class="hoo-legend">Shipping Address</legend>
    <!-- Address, city, state, zip fields -->
</fieldset>
{{/fieldset}}
```

### Preferences Settings
```handlebars
{{#fieldset}}
<fieldset class="hoo-fieldset no-outline">
    <legend class="hoo-legend">Notification Preferences</legend>
    <!-- Checkbox and radio button groups -->
</fieldset>
{{/fieldset}}
```

## Accessibility

- **Semantic HTML**: Uses native `<fieldset>` element
- **Legend Association**: Legend is automatically associated with grouped fields
- **Screen Reader Support**: Announces group context when navigating fields
- **Keyboard Navigation**: Standard tab order through grouped fields
- **ARIA Support**: Accepts additional ARIA attributes via `html-props`

## Validation

- **Group Validation**: Can display validation state for the entire group
- **Field Validation**: Individual fields maintain their own validation states
- **Error Grouping**: Related validation errors are contextually grouped

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Legacy Support**: Graceful degradation in older browsers
- **Mobile**: Optimized for touch interfaces and mobile browsers

## SCSS Files

**Atom Styles:**
- `lib/sass/atoms/forms.scss`

**Molecule Styles:**
- `lib/sass/molecules/forms.scss`

## Performance

- **Lightweight**: Minimal CSS and no JavaScript dependencies
- **Semantic**: Uses native HTML elements for optimal performance
- **Rendering**: Efficient server-side rendering with Handlebars partials