---
title: "Teams Splash Screen Template"
description: "The Teams Splash Screen Template provides a full-screen layout for displaying Teams-style splash cards, typically used for welcome screens, onboarding flows, and feature introductions within Microsoft"
type: "components"
layout: "single"
patternId: "templates-teams-teams-splash-screen"
category: "templates"
subcategory: "teams"
seoTitle: "Templates - Teams Teams Splash Screen"
seoDescription: "Teams Teams Splash Screen Templates"
weight: 11
hasVariants: false
markup: |
  
---

# Teams Splash Screen Template

The Teams Splash Screen Template provides a full-screen layout for displaying Teams-style splash cards, typically used for welcome screens, onboarding flows, and feature introductions within Microsoft Teams applications. This template creates a centered, responsive layout optimized for presenting single splash card content.

## Overview

The Teams Splash Screen Template serves as a foundational layout system for creating Teams-style welcome and introduction screens. It provides a full-screen container with intelligent centering and responsive behavior, designed specifically to showcase Teams Splash Cards in an optimal viewing experience.

## Features

### Full-Screen Layout
- **Viewport Utilization**: Uses full viewport height (100vh) for immersive experience
- **Centered Content**: Flexbox centering for optimal content positioning
- **Responsive Width**: Adaptive width constraints (75vw max, adjusts for smaller screens)
- **Flexible Positioning**: Content centered both horizontally and vertically

### Responsive Design
- **Desktop First**: Optimized for large screens with centered content
- **Tablet Adaptation**: Adjusts layout for screens below 1024px
- **Mobile Optimization**: Full-width layout for mobile devices
- **Progressive Enhancement**: Graceful degradation across all screen sizes

### Content Presentation
- **Single Card Focus**: Designed to highlight a single Teams Splash Card
- **Visual Hierarchy**: Clean layout that emphasizes card content
- **Breathing Room**: Appropriate spacing and margins for readability
- **Brand Consistency**: Maintains Microsoft Teams visual language

## Structure

The Teams Splash Screen Template consists of:
1. **Screen Container**: `.hoo-splashscr` - Full-screen wrapper with centering
2. **Content Area**: `.hoo-splashscr-content` - Centered content container
3. **Splash Card**: Teams Splash Card organism component

## Data Structure

```json
{
    "splash-card": {
        "headerImage": "../../images/placeholders/16by10.png",
        "cardtitle": "Welcome to your hTWOo Splash card",
        "description": "This shows the base setup of a teams splash card setup and I'am out of futher text here",
        "prim-btn": {
            "classname": "hoo-button-primary",
            "label": "Create something"
        },
        "sec-btn": {
            "classname": "hoo-button",
            "label": "Call for action"
        }
    }
}
```

## CSS Classes

- `.hoo-splashscr`: Main full-screen container
- `.hoo-splashscr-content`: Centered content wrapper

## Responsive Behavior

### Desktop (> 1200px)
- **Max Width**: 75vw to prevent excessive stretching
- **Centering**: Both horizontal and vertical centering
- **Height**: Full viewport height utilization

### Tablet (1024px - 1200px)
- **Max Width**: 100vw for better space utilization
- **Layout**: Maintains centered approach
- **Adaptation**: Smooth transition from desktop layout

### Mobile (< 1024px)
- **Justification**: Top-aligned content instead of center
- **Width**: Full viewport width utilization
- **Accessibility**: Improved mobile touch and scroll experience

## Use Cases

### Welcome Screens
- Application onboarding flows
- Feature introduction screens
- Getting started experiences

### Information Display
- Important announcements
- System status messages
- User notifications

### Action Prompts
- Call-to-action screens
- Setup completion flows
- Feature adoption encouragement

## Accessibility

- **Keyboard Navigation**: Full keyboard support through contained elements
- **Screen Reader Support**: Semantic structure with proper headings
- **Focus Management**: Logical focus flow within splash card content
- **Color Contrast**: Sufficient contrast maintained across all elements
- **Touch Targets**: Appropriate sizing for mobile interaction

## Performance Considerations

- **Efficient Layout**: CSS Grid and Flexbox for optimal rendering
- **Image Optimization**: Responsive image loading for header graphics
- **Smooth Transitions**: Hardware-accelerated animations where applicable
- **Minimal Reflow**: Stable layout structure prevents layout shifts

## Integration

### With Teams Splash Cards
The template is designed to work seamlessly with Teams Splash Card organisms:

```handlebars
<div class="hoo-splashscr">
    <div class="hoo-splashscr-content">
        {{> organism-teams-splash-card }}
    </div>
</div>
```

### Custom Integration
Can be used with any centered content requiring full-screen presentation:

```handlebars
<div class="hoo-splashscr">
    <div class="hoo-splashscr-content">
        <!-- Your custom content here -->
    </div>
</div>
```

## SCSS Import