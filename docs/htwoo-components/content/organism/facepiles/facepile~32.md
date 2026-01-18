---
title: "Facepile 32px"
description: "A compact variant of the [Facepile](./facepile) component using 32px avatars, optimized for navigation elements, sidebar displays, and space-constrained layouts where user representation is needed wit"
type: "components"
layout: "single"
patternId: "organism-facepiles-facepile~32"
category: "organism"
subcategory: "facepiles"
seoTitle: "Organism - Facepiles Facepile~32"
seoDescription: "Facepiles Facepile~32 Organism"
weight: 11
markup: |
  
---

# Facepile (32px)

A compact variant of the [Facepile](./facepile) component using 32px avatars, optimized for navigation elements, sidebar displays, and space-constrained layouts where user representation is needed without overwhelming the interface.

## Overview

The 32px facepile provides an ideal balance between visibility and space efficiency, making it perfect for secondary navigation areas, sidebar components, and compact team displays where space is at a premium but user identification remains important.

## Size Specifications

- **Avatar Size**: 32px circular avatars
- **Presence Size**: 10px presence indicators  
- **Container Height**: ~38px (including presence overlap)
- **Spacing**: 1.118rem margins between avatars
- **Total Footprint**: Compact, suitable for tight layouts

## Use Cases

### Navigation Elements
- Secondary navigation with team context
- Sidebar user lists and team rosters
- Compact toolbar user indicators
- Mobile navigation with user presence

### Content Areas
- Comment sections with author avatars
- Small team cards and project tiles
- Notification panels with user context
- Compact collaboration indicators

### Interface Components
- Dropdown user lists
- Small modal dialogs
- Popup user selectors
- Condensed team displays

## Data Structure

```json
{
    "items": [
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/user1.jpg",
                "status": "online",
                "size": 32,
                "initials": "JD",
                "displayName": "John Doe"
            },
            "size": 32
        }
    ]
}
```

## Visual Design

- **Compact Profile**: Clear user identification in minimal space
- **Readable Presence**: Presence indicators remain clearly visible
- **Clean Spacing**: Appropriate margins prevent visual crowding
- **Scalable Layout**: Works well with both few and many users

## Accessibility

- Maintains full keyboard navigation support
- Screen reader compatible with clear user identification
- High contrast presence indicators
- Appropriate touch targets for interactive elements (minimum 44px)

## Performance

- Reduced image size requirements (32×32px)
- Faster loading with smaller image footprint
- Efficient for large user collections
- Minimal memory usage for presence updates

## Related

- **[Facepile - Main Documentation](./facepile)**: Complete implementation guide
- **[All Facepile Variants](./)**: Size comparison and selection guide
- **[Avatar with Presence](../molecules/avatar-with-presence/)**: Core component details