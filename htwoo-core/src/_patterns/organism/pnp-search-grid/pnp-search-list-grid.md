---
hidden: true
---

# PnP Search List Grid

Internal component that renders quick link items in detailed list format within the PnP Search Grid system. This component provides comprehensive information display including descriptions and extended content for each grid item.

## Overview

The list grid variant maximizes information density by utilizing the `molecules-ql-list-item` component. It's designed for scenarios where users benefit from additional context, descriptions, or metadata about each quick link option.

## Features

- **Detailed Information**: Support for titles, descriptions, and metadata
- **Rich Content**: Enhanced item presentation with additional context
- **Consistent Layout**: Uniform appearance across all grid items
- **Selection Support**: Built-in selection wrapper for interactive features

## Structure

```handlebars
<div class="hoo-pnpsearch-grid">
    {{#each quick-links}}
    {{#this}}
    <pnp-select>
        {{> molecules-ql-list-item quick-link=this}}
    </pnp-select>
    {{/this}}
    {{/each}}
</div>
```

## Use Cases

- **Search Results**: Detailed search result presentations
- **Content Discovery**: Browsing interfaces with rich metadata
- **Resource Libraries**: Comprehensive resource listings
- **Documentation Hubs**: Technical content with descriptions
