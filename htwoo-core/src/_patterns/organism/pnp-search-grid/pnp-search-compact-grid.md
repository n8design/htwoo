---
hidden: true
---

# PnP Search Compact Grid

Internal component that renders quick link items in compact format within the PnP Search Grid system. This component focuses on space efficiency while maintaining essential functionality and visual clarity.

## Overview

The compact grid variant optimizes vertical space usage by utilizing the `molecules-ql-compact-item` component. It's designed for high-density information display where screen real estate is premium but user access to multiple options remains important.

## Features

- **Space Efficient**: Minimal vertical height per item
- **High Density**: Maximum items visible in available space
- **Consistent Styling**: Uniform appearance across all grid items
- **Selection Support**: Built-in selection wrapper for interactive features

## Structure

```handlebars
<div class="hoo-pnpsearch-grid">
    {{#each quick-links}}
    {{#this}}
    <pnp-select>
        {{> molecules-ql-compact-item quick-link=this}}
    </pnp-select>
    {{/this}}
    {{/each}}
</div>
```

## Use Cases

- **Navigation Hubs**: Quick access to multiple destinations
- **Dashboard Panels**: Compact information display
- **Mobile Interfaces**: Space-constrained environments
- **Sidebar Content**: Secondary navigation areas
