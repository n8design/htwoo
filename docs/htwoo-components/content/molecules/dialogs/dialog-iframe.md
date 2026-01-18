---
title: "Dialog IFrame Component"
description: "The Dialog IFrame component provides a container for embedding external web content within dialogs. It manages the display, aspect ratio, and layout of iframe elements within HTWOO dialogs."
type: "components"
layout: "single"
patternId: "molecules-dialogs-dialog-iframe"
category: "molecules"
subcategory: "dialogs"
seoTitle: "Molecules - Dialogs Dialog Iframe"
seoDescription: "Dialogs Dialog Iframe Molecules"
weight: 30
markup: |
  &lt;div class=&quot;hoo-dlgcontent&quot;&gt;
      &lt;iframe class=&quot;hoo-dlg-iframe&quot; src=&quot;../../patterns/pages-teams-teams-splash-screen/pages-teams-teams-splash-screen.rendered.html&quot; name=&quot;testIframe&quot; title=&quot;testIframe&quot; loading=&quot;lazy&quot;&gt;
      &lt;/iframe&gt;
  &lt;/div&gt;
---

# Dialog IFrame Component

The Dialog IFrame component provides a container for embedding external web content within dialogs. It manages the display, aspect ratio, and layout of iframe elements within HTWOO dialogs.

## Overview

This component is used within dialog content areas to embed web pages, documents, videos, or other external content while maintaining responsive behavior and proper aspect ratios.

## Features

- Multiple aspect ratio options (16:9, 4:3, 1:1)
- Full-width and height behavior within container
- Border-free design for seamless content integration
- Responsive scaling with the dialog
- Clean integration with dialog content area

## Usage

The Dialog IFrame component can be implemented with the following structure:

```html
<!-- Default 16:9 ratio -->
<div class="hoo-dlg-iframe">
  <iframe src="https://example.com" title="Embedded content"></iframe>
</div>

<!-- 4:3 ratio -->
<div class="hoo-dlg-iframe ratio-4by3">
  <iframe src="https://example.com" title="Embedded content"></iframe>
</div>

<!-- 1:1 square ratio -->
<div class="hoo-dlg-iframe ratio-squared">
  <iframe src="https://example.com" title="Embedded content"></iframe>
</div>
```

## SCSS Files

**Styles:**
- `src/styles/02-molecules/dialogs/_dialog-content.scss`

## Aspect Ratios

The component supports the following aspect ratios:

- **16:9 (Default)**: Optimal for videos and widescreen content
- **4:3**: Traditional presentation format
- **1:1 (Squared)**: Equal width and height for square content

## Accessibility

- Requires proper title attribute on iframe for screen readers
- Ensures embedded content is accessible
- Maintains proper sizing for readability