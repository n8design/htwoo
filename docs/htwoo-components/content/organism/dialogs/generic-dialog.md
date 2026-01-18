---
title: "Generic Dialog"
description: "The Generic Dialog provides the foundational dialog implementation in the HTWOO design system. Built on the HTML5 `<dialog>` element, it offers a flexible, accessible container for displaying content,"
type: "components"
layout: "single"
patternId: "organism-dialogs-generic-dialog"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Generic Dialog"
seoDescription: "Dialogs Generic Dialog Organism"
weight: 11
hasVariants: false
markup: |
  &lt;h1&gt;Dialog&lt;/h1&gt;
  &lt;p&gt;The following buttons launch both possible option of Dialogs.&lt;/p&gt;
  &lt;button class=&quot;hoo-button-primary&quot; id=&quot;btn-dialog&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Show Dialog&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-primary&quot; id=&quot;btn-modal-dialog&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Show Modal Dialog&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul&gt;
      &lt;li&gt;&lt;strong&gt;Dialog:&lt;/strong&gt;Shows an absolute positioned dialog on the screen&lt;/li&gt;
  &lt;li&gt;&lt;strong&gt;Modal:&lt;/strong&gt;Shows an absolute fixed dialog on the screen, which has a backdrop to chancel any
          interference with the underlying content&lt;/li&gt;
  &lt;/ul&gt;Through the change to regular&lt;code&gt;&amp;lt;dialog&amp;gt;&lt;/code&gt;elements greater flexibility could be achieved.
  See&lt;a href=&quot;&quot;&gt;MDN Dialog&lt;/a&gt;
  &lt;dialog id=&quot;myDialog&quot; class=&quot;hoo-dlg statusbar&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
      &lt;svg class=&quot;hoo-icon-svg icon-info-filled&quot; aria-hidden=&quot;true&quot;&gt;
          &lt;title&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/title&gt;
          &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-info-filled&quot;&gt;
          &lt;/use&gt;
      &lt;/svg&gt;&lt;/span&gt;
  &lt;div class=&quot;hoo-dlg-content&quot;&gt;This dialog comes without a backdrop and can be used for a
          statusbar for example.&lt;/div&gt;
  &lt;div class=&quot;hoo-dlg-actions&quot;&gt;
      &lt;button id=&quot;closer-dlg&quot; autofocus&gt;Close&lt;/button&gt;
  &lt;/div&gt;
  &lt;/dialog&gt;
  &lt;dialog id=&quot;myDialog-1&quot; class=&quot;hoo-dlg&quot; resize=&quot;true&quot;&gt;
      &lt;button id=&quot;closer-mdl&quot; autofocus&gt;Close&lt;/button&gt;
      &lt;div class=&quot;hoo-dlgcontent&quot;&gt;
          &lt;p&gt;By clicking on the buttons you get a demonstation of possible options of the dialog.&lt;/p&gt;
          &lt;p&gt;To change the dialog appearance you can pass in the following css variables via the style attribute:&lt;/p&gt;
          &lt;ul&gt;
              &lt;li&gt;&lt;code&gt;style=&quot;--hoo-dlg-height: 30vh&quot;&lt;/code&gt;- result in the dialog with 30% of the viewport height&lt;/li&gt;
          &lt;li&gt;&lt;code&gt;style=&quot;--hoo-dlg-width: 30vw&quot;&lt;/code&gt;- result in the dialog with 30% of the viewport width&lt;/li&gt;
  &lt;/ul&gt;
  &lt;div style=&quot;display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 1rem; margin: 1rem;&quot;&gt;
      &lt;button class=&quot;hoo-button&quot; id=&quot;btn-sidebar-left&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Sidebar Left&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button&quot; id=&quot;btn-sidebar-right&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Sidebar Right&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button&quot; id=&quot;btn-topbar&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Top Bar&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button&quot; id=&quot;btn-bottombar&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Bottom Bar&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button&quot; id=&quot;btn-fullscreen&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Full Screen&lt;/span&gt;
  &lt;/button&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &lt;/dialog&gt;
  &lt;script&gt;if (window.location !== window.parent.location) {
      let sidebarLeft = document.querySelector(&#39;#btn-sidebar-left&#39;);
  
      sidebarLeft.addEventListener(&#39;click&#39;, (event) =&gt; {
  
          let dialog = event.target.closest(&#39;.hoo-dlg&#39;);
  
          dialog.classList = &quot;hoo-dlg&quot;;
          dialog.classList.remove(&#39;topbar&#39;, &#39;bottombar&#39;, &#39;sidebar&#39;, &#39;fullscreen&#39;, &#39;left&#39;, &#39;right&#39;);
          dialog.classList.add(&#39;sidebar&#39;, &#39;left&#39;);
  
          event.preventDefault();
  
      })
  
      let sidebarRight = document.querySelector(&#39;#btn-sidebar-right&#39;);
  
      sidebarRight.addEventListener(&#39;click&#39;, (event) =&gt; {
  
          let dialog = event.target.closest(&#39;.hoo-dlg&#39;);
          dialog.classList.remove(&#39;topbar&#39;, &#39;bottombar&#39;, &#39;sidebar&#39;, &#39;fullscreen&#39;, &#39;left&#39;, &#39;right&#39;);
          dialog.classList.add(&#39;sidebar&#39;, &#39;right&#39;);
  
          event.preventDefault();
  
      })
  
      let topbar = document.querySelector(&#39;#btn-topbar&#39;);
      topbar.addEventListener(&#39;click&#39;, (event) =&gt; {
  
          let dialog = event.target.closest(&#39;.hoo-dlg&#39;);
  
          dialog.classList.remove(&#39;topbar&#39;, &#39;bottombar&#39;, &#39;sidebar&#39;, &#39;fullscreen&#39;, &#39;left&#39;, &#39;right&#39;);
          dialog.classList.add(&#39;topbar&#39;);
  
          event.preventDefault();
  
      })
  
      let bottombar = document.querySelector(&#39;#btn-bottombar&#39;);
  
      bottombar.addEventListener(&#39;click&#39;, (event) =&gt; {
  
          let dialog = event.target.closest(&#39;.hoo-dlg&#39;);
  
          dialog.classList.remove(&#39;topbar&#39;, &#39;bottombar&#39;, &#39;sidebar&#39;, &#39;fullscreen&#39;, &#39;left&#39;, &#39;right&#39;);
          dialog.classList.add(&#39;bottombar&#39;);
  
          event.preventDefault();
  
      })
  
      let fullscreen = document.querySelector(&#39;#btn-fullscreen&#39;);
  
      fullscreen.addEventListener(&#39;click&#39;, (event) =&gt; {
  
          let dialog = event.target.closest(&#39;.hoo-dlg&#39;);
  
          dialog.classList.remove(&#39;topbar&#39;, &#39;bottombar&#39;, &#39;sidebar&#39;, &#39;fullscreen&#39;, &#39;left&#39;, &#39;right&#39;);
          dialog.classList.add(&#39;fullscreen&#39;);
  
          event.preventDefault();
  
      })
      }&lt;/script&gt;
---

# Generic Dialog

The Generic Dialog provides the foundational dialog implementation in the HTWOO design system. Built on the HTML5 `<dialog>` element, it offers a flexible, accessible container for displaying content, gathering user input, and managing user interactions in both modal and non-modal contexts.

## Overview

The Generic Dialog serves as the base component for all dialog variants in HTWOO. It provides essential dialog functionality including positioning, sizing, content management, and accessibility features while remaining flexible enough to support various use cases and customization needs.

## Features

### HTML5 Foundation
- **Native Dialog Element**: Built on HTML5 `<dialog>` for optimal accessibility
- **Browser Support**: Leverages native browser dialog functionality
- **Focus Management**: Automatic focus trapping and restoration
- **Keyboard Navigation**: Built-in Escape key support for closing

### Flexible Configuration
- **Modal and Non-Modal**: Supports both `show()` and `showModal()` methods
- **Custom Dimensions**: Configurable width and height via CSS variables
- **Content Areas**: Header, content, and action sections
- **Resize Support**: Optional resize functionality for user control

### Visual Design
- **Modern Styling**: Rounded corners (0.5rem) and smooth transitions
- **Backdrop Effects**: Blur and saturation effects for modal dialogs
- **Responsive Layout**: Adapts to viewport constraints
- **Theme Integration**: Inherits HTWOO theme colors and typography

## Structure

The Generic Dialog consists of three main areas:
1. **[Dialog Header](../molecules/dialogs/dialog-header)**: Optional title bar with close button
2. **[Dialog Content](../molecules/dialogs/dialog-content)**: Main content area
3. **Dialog Actions**: Optional button area for user actions

## Data Structure

```json
{
    "dialog": {
        "button": {
            "label": "Show Dialog",
            "props": "id=\"btn-dialog\""
        }
    },
    "modal-dialog": {
        "button": {
            "label": "Show Modal Dialog", 
            "props": "id=\"btn-modal-dialog\""
        }
    }
}
```

## CSS Classes

### Container Classes
- **`.hoo-dlg`**: Main dialog container with base styling
- **`.hoo-dlgheader`**: Header section with title and close button
- **`.hoo-dlgcontent`**: Content area with padding and overflow handling
- **`.hoo-dlg-actions`**: Footer area for action buttons

### Modifier Classes
- **`.statusbar`**: Converts dialog to status bar appearance
- **`.msg`**: Lightweight message bar styling
- **`[resize="true"]`**: Enables user resizing functionality

## Styling

### Base Dimensions

### Visual Properties
- **Background**: Neutral-000 (#ffffff) for clean appearance
- **Border**: None (relies on backdrop and shadow)
- **Border Radius**: 0.5rem for modern appearance
- **Color**: Neutral-700 (#323130) for text content
- **Transition**: 0.5s ease-in-out for smooth animations

### Backdrop Effects

## JavaScript Integration

### Basic Dialog Control

### Using HOODialog Class

### Event Handling

## Use Cases

### Content Display
- **Information Dialogs**: Displaying detailed information or help content
- **Media Viewers**: Image, video, or document preview interfaces
- **Detail Views**: Expanded views of list items or cards
- **Report Displays**: Charts, graphs, and data visualizations

### User Input
- **Form Dialogs**: Data entry and editing interfaces
- **Confirmation Dialogs**: User action confirmations
- **Settings Panels**: Configuration and preference interfaces
- **Wizard Interfaces**: Multi-step processes and workflows

### Application Features
- **About Dialogs**: Application information and credits
- **Help Systems**: Contextual help and documentation
- **Tool Palettes**: Design and editing tools
- **Search Interfaces**: Advanced search and filter options

## Accessibility

### Native HTML5 Benefits
- **Focus Trapping**: Automatic focus management within dialog
- **Keyboard Support**: Built-in Escape key handling for closing
- **Screen Reader**: Native dialog semantics and state announcements
- **ARIA Integration**: Automatic ARIA attributes and roles

### Enhanced Accessibility
- **Focus Restoration**: Returns focus to launching element on close
- **Tab Order**: Logical tab order within dialog content
- **Close Methods**: Multiple ways to close (button, Escape, backdrop)
- **Clear Labels**: Descriptive button labels and instructions

### Visual Accessibility
- **High Contrast**: Compatible with high contrast display modes
- **Focus Indicators**: Clear visual focus states for keyboard navigation
- **Text Scaling**: Responsive to user font size preferences
- **Color Independence**: Doesn't rely solely on color for information

## Best Practices

### Content Strategy
- **Single Purpose**: Each dialog should have one clear purpose
- **Concise Content**: Keep content focused and scannable
- **Clear Actions**: Use descriptive, action-oriented button labels
- **Logical Flow**: Organize content in logical reading order

### User Experience
- **Non-Intrusive Timing**: Don't interrupt critical user workflows
- **Clear Escape Routes**: Always provide obvious ways to close
- **Responsive Feedback**: Show immediate feedback for user actions
- **Context Preservation**: Maintain user context when appropriate

### Development
- **Progressive Enhancement**: Ensure basic functionality without JavaScript
- **Error Handling**: Graceful handling of content loading failures
- **Performance**: Optimize for fast loading and smooth interactions
- **Testing**: Test with keyboard users and screen readers

## Variants and Extensions

### Status Bar Mode
```html
<dialog class="hoo-dlg statusbar">
    <div class="hoo-icon">
        <svg><!-- Status icon --></svg>
    </div>
    <div class="hoo-dlg-content">Status message</div>
    <div class="hoo-dlg-actions">
        <button>Dismiss</button>
    </div>
</dialog>
```

### Message Bar Mode
```html
<dialog class="hoo-dlg msg">
    <div class="hoo-dlg-content">
        Brief message content with minimal padding
    </div>
</dialog>
```

## Browser Support

- **Modern Browsers**: Full support in Chrome 37+, Firefox 98+, Safari 15.4+
- **HTML5 Dialog**: Requires native `<dialog>` element support
- **CSS Features**: Modern CSS (custom properties, backdrop-filter)
- **JavaScript**: ES6+ features for enhanced functionality
- **Polyfills**: dialog-polyfill available for older browser support

## SCSS Import