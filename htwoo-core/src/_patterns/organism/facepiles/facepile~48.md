---
title: Facepile 48px
order: 13
---

# Facepile (48px)

A prominent variant of the [Facepile](./facepile) component using 48px avatars, designed for featured content areas, main page headers, and contexts where user representation should be visually prominent and easily recognizable.

## Overview

The 48px facepile provides enhanced visibility and user recognition, making it ideal for featured content areas, hero sections, and interfaces where the user collection is a primary focal point. This size works excellently for showcasing important teams or highlighting key contributors.

## Size Specifications

- **Avatar Size**: 48px circular avatars
- **Presence Size**: 14px presence indicators
- **Container Height**: ~54px (including presence overlap)
- **Spacing**: 1.118rem margins between avatars
- **Total Footprint**: Prominent, suitable for featured content

## Use Cases

### Featured Content
- Hero sections with team showcases
- Featured project displays
- Main page team introductions
- Spotlight team presentations

### Important User Groups
- Executive team displays
- Key stakeholder presentations
- Featured contributor showcases
- VIP user representations

### Main Interface Elements
- Primary navigation with user context
- Main dashboard team displays
- Featured collaboration sections
- Important announcement headers

### Marketing and Presentation
- About page team sections
- Company overview displays
- Client testimonial sections
- Partner showcase areas

## Data Structure

```json
{
    "items": [
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/alex-thompson.jpg",
                "status": "online",
                "size": 48,
                "initials": "AT",
                "displayName": "Alex Thompson",
                "title": "Chief Executive Officer"
            },
            "size": 48
        },
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/jordan-martinez.jpg",
                "status": "away",
                "size": 48,
                "initials": "JM",
                "displayName": "Jordan Martinez",
                "title": "Chief Technology Officer"
            },
            "size": 48
        }
    ]
}
```

## Visual Design

- **Enhanced Visibility**: Clear, prominent user identification
- **Professional Impact**: Strong visual presence suitable for important contexts
- **Rich Detail**: Sufficient size for facial recognition and detail visibility
- **Commanding Presence**: Draws appropriate attention to user representation

## Device Considerations

- **Desktop**: Excellent for desktop hero sections and featured content
- **Tablet**: Good for tablet interfaces in landscape orientation
- **Mobile**: Consider reducing to 40px or 32px for mobile displays
- **Large Screens**: Works well on larger displays and presentation screens

## Performance Considerations

- **Image Requirements**: 48×48px base images (recommend 96×96px for retina)
- **File Size**: Larger images require attention to optimization
- **Loading Strategy**: Consider lazy loading for large collections
- **Memory Usage**: Monitor memory usage with many 48px avatars

## Accessibility

- **Excellent Touch Targets**: 48px avatars exceed minimum touch target requirements
- **High Visibility**: Easy to see and recognize for users with visual impairments
- **Clear Navigation**: Prominent size aids in keyboard and screen reader navigation
- **Strong Presence Indicators**: Large enough for clear status communication

## Best Practices

### When to Use 48px
- **Featured Content**: When users are the primary focus of the section
- **Important Teams**: For showcasing key personnel or important groups
- **Hero Sections**: Main page introductions and team showcases
- **Executive Displays**: Leadership teams and important stakeholders

### Design Considerations
- **Space Planning**: Ensure adequate container width for multiple 48px avatars
- **Content Hierarchy**: Use when user representation is a primary focus
- **Performance**: Optimize images and consider loading strategies
- **Responsive Design**: Plan for smaller sizes on constrained displays

## Related

- **[Facepile - Main Documentation](./facepile)**: Complete implementation guide
- **[All Facepile Variants](./)**: Size comparison and selection guide
- **[Avatar with Presence](../molecules/avatar-with-presence/)**: Core component details
- **[Facepile 40px](./facepile~40)**: Standard alternative
- **[Facepile 64px](./facepile~64)**: Larger alternative
