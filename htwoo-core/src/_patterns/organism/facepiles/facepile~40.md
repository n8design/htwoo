---
title: Facepile 40px
order: 12
---

# Facepile (40px)

The standard variant of the [Facepile](./facepile) component using 40px avatars, providing the optimal balance between visibility and space efficiency for most application contexts and general-purpose user displays.

## Overview

The 40px facepile serves as the recommended default size for most applications, offering clear user identification while maintaining reasonable space usage. This size works excellently across desktop and tablet interfaces and provides sufficient detail for user recognition without dominating the layout.

## Size Specifications

- **Avatar Size**: 40px circular avatars
- **Presence Size**: 12px presence indicators
- **Container Height**: ~46px (including presence overlap)
- **Spacing**: 1.118rem margins between avatars
- **Total Footprint**: Balanced for general use

## Use Cases

### Primary Content Areas
- Document headers with collaborator lists
- Project cards showing team members
- Main content areas with user context
- Dashboard team displays

### Application Headers
- Application navigation with team context
- Toolbar user indicators
- Feature headers with contributor lists
- Main page team representations

### Collaboration Features
- Real-time collaboration indicators
- Shared workspace displays
- Team-based feature interfaces
- Multi-user content displays

### Content Management
- Content contributor displays
- Review and approval workflows
- Version control interfaces
- Editorial team representations

## Data Structure

```json
{
    "items": [
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/sarah-johnson.jpg",
                "status": "online",
                "size": 40,
                "initials": "SJ",
                "displayName": "Sarah Johnson",
                "title": "Project Manager"
            },
            "size": 40
        },
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/mike-chen.jpg",
                "status": "busy",
                "size": 40,
                "initials": "MC",
                "displayName": "Mike Chen",
                "title": "Senior Developer"
            },
            "size": 40
        }
    ]
}
```

## Visual Design

- **Optimal Clarity**: Clear user identification with readable details
- **Balanced Presence**: Presence indicators are prominently visible
- **Professional Appearance**: Suitable for business and professional contexts
- **Flexible Layout**: Works well in various container sizes and orientations

## Device Compatibility

- **Desktop**: Ideal size for desktop applications and web interfaces
- **Tablet**: Excellent for tablet interfaces and responsive designs
- **Mobile**: Suitable for mobile when space allows (may prefer 32px for very constrained mobile layouts)
- **High DPI**: Scales well on high-resolution displays

## Performance Characteristics

- **Image Requirements**: 40×40px base images (recommend 80×80px for retina)
- **Loading Performance**: Good balance between quality and file size
- **Memory Usage**: Moderate memory footprint suitable for most applications
- **Rendering**: Smooth performance with reasonable DOM complexity

## Integration Patterns

### With Overflow Management

### Dynamic Updates

## Accessibility

- **Standard Touch Targets**: 40px avatars meet minimum touch target guidelines
- **Clear Visual Hierarchy**: Appropriate size for screen reader navigation
- **High Contrast**: Presence indicators maintain visibility across themes
- **Keyboard Navigation**: Smooth tab progression through interactive elements

## Best Practices

### When to Use 40px
- **General Applications**: Default choice for most application contexts
- **Team Displays**: Ideal for showing project teams and collaborators
- **Document Interfaces**: Perfect for document headers and collaboration indicators
- **Dashboard Elements**: Appropriate for dashboard team sections

### Design Considerations
- **Container Width**: Ensure adequate container width for multiple 40px avatars
- **Responsive Breakpoints**: Consider switching to 32px on smaller screens
- **Content Priority**: Use when user identification is important but not the primary focus
- **Performance**: Monitor loading performance with large user sets

## Related

- **[Facepile - Main Documentation](./facepile)**: Complete implementation guide
- **[All Facepile Variants](./)**: Size comparison and selection guide
- **[Avatar with Presence](../molecules/avatar-with-presence/)**: Core component details
- **[Facepile 32px](./facepile~32)**: Compact alternative
- **[Facepile 48px](./facepile~48)**: Larger alternative
