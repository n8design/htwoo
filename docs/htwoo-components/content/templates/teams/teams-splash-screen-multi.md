---
title: "Teams Splash Screen Multi Template"
description: "The Teams Splash Screen Multi Template provides a full-screen layout for displaying multiple Teams-style splash cards in a horizontal arrangement. This template is ideal for onboarding flows, feature "
type: "components"
layout: "single"
patternId: "templates-teams-teams-splash-screen-multi"
category: "templates"
subcategory: "teams"
seoTitle: "Templates - Teams Teams Splash Screen Multi"
seoDescription: "Teams Teams Splash Screen Multi Templates"
weight: 12
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-splashscr&quot;&gt;
      &lt;div class=&quot;hoo-splashscr-content&quot;&gt;
      &lt;/div&gt;
  &lt;/div&gt;
---

# Teams Splash Screen Multi Template

The Teams Splash Screen Multi Template provides a full-screen layout for displaying multiple Teams-style splash cards in a horizontal arrangement. This template is ideal for onboarding flows, feature showcases, and multi-step introduction screens within Microsoft Teams applications.

## Overview

The Teams Splash Screen Multi Template extends the single splash screen concept to support multiple splash cards displayed side-by-side. It provides intelligent responsive behavior that adapts from horizontal layouts on desktop to wrapped layouts on smaller screens, ensuring optimal presentation across all devices.

## Features

### Multi-Card Layout
- **Horizontal Arrangement**: Side-by-side card display on desktop
- **Dynamic Iteration**: Supports any number of splash cards via data iteration
- **Flexible Spacing**: Automatic spacing and sizing between cards
- **Content Adaptation**: Cards automatically size to fit available space

### Responsive Design
- **Desktop Layout**: Horizontal arrangement with centered cards
- **Tablet Adaptation**: Maintains side-by-side with reduced sizing
- **Mobile Wrapping**: Cards wrap to vertical stacking on small screens
- **Progressive Enhancement**: Smooth transitions between layout modes

### Full-Screen Experience
- **Viewport Utilization**: Uses full viewport height for immersive experience
- **Centered Content**: Flexbox centering for optimal card positioning
- **Responsive Width**: Adaptive width constraints with device-specific adjustments
- **Visual Balance**: Equal spacing and sizing across multiple cards

## Structure

The Teams Splash Screen Multi Template consists of:
1. **Screen Container**: `.hoo-splashscr` - Full-screen wrapper with centering
2. **Content Area**: `.hoo-splashscr-content` - Horizontal flex container for cards
3. **Multiple Splash Cards**: Teams Splash Card organisms iterated from data

## Data Structure

```json
{
    "cards": [
        {
            "splash-card": {
                "headerImage": "../../images/placeholders/16by10.png",
                "title": "This is the first splash card",
                "description": "This shows the base setup of a teams splash card setup and I'am out of further text here",
                "primary-button": {
                    "button": {
                        "label": "Create something"
                    }
                },
                "secondary-button": {
                    "button": {
                        "label": "Call for action"
                    }
                }
            }
        },
        {
            "splash-card": {
                "headerImage": "../../images/placeholders/16by10.png",
                "title": "This is the second splash card",
                "description": "Another splash card with different content",
                "primary-button": {
                    "button": {
                        "label": "Get Started"
                    }
                },
                "secondary-button": {
                    "button": {
                        "label": "Learn More"
                    }
                }
            }
        }
    ]
}
```

## CSS Classes

- `.hoo-splashscr`: Main full-screen container
- `.hoo-splashscr-content`: Horizontal flex container for multiple cards

## Responsive Behavior

### Desktop (> 1200px)
- **Layout**: Horizontal flexbox with center justification
- **Max Width**: 75vw to prevent excessive stretching
- **Card Sizing**: Equal flex-shrink for balanced sizing
- **Spacing**: Even distribution with automatic gaps

### Tablet (1024px - 1200px)
- **Max Width**: 100vw for better space utilization
- **Layout**: Maintains horizontal arrangement
- **Card Adaptation**: Cards adjust size for available space

### Mobile (< 1024px)
- **Justification**: Flex-start alignment for better mobile experience
- **Wrapping**: `flex-wrap: wrap` for card stacking
- **Card Sizing**: Maximum 45% width per card for optimal mobile viewing
- **Layout Flow**: Cards wrap to new lines as needed

## Use Cases

### Onboarding Flows
- Multi-step welcome sequences
- Feature introduction tours
- Getting started walkthroughs

### Feature Showcases
- Product capability highlights
- New feature announcements
- Benefit demonstrations

### Choice Presentations
- Option selection screens
- Plan comparison displays
- Path selection interfaces

## Layout Patterns

### Two-Card Layout
Ideal for binary choices or before/after comparisons:
```html
<div class="hoo-splashscr">
    <div class="hoo-splashscr-content">
        <!-- Card 1: Option A -->
        <!-- Card 2: Option B -->
    </div>
</div>
```

### Three-Card Layout
Perfect for feature trios or step-by-step processes:
```html
<div class="hoo-splashscr">
    <div class="hoo-splashscr-content">
        <!-- Card 1: Step 1 -->
        <!-- Card 2: Step 2 -->
        <!-- Card 3: Step 3 -->
    </div>
</div>
```

### Four+ Card Layout
Suitable for comprehensive overviews (wraps on mobile):
```html
<div class="hoo-splashscr">
    <div class="hoo-splashscr-content">
        <!-- Multiple cards with automatic wrapping -->
    </div>
</div>
```

## Accessibility

- **Keyboard Navigation**: Sequential focus through all cards
- **Screen Reader Support**: Proper heading hierarchy and card structure
- **Focus Management**: Logical tab order across multiple cards
- **ARIA Labels**: Appropriate labeling for card collections
- **Touch Accessibility**: Appropriate touch targets on mobile devices

## Performance Considerations

- **Efficient Rendering**: CSS Flexbox for optimal multi-card layout
- **Image Optimization**: Lazy loading for card header images
- **Smooth Transitions**: Hardware-accelerated layout changes
- **Memory Management**: Efficient handling of multiple card instances

## Content Guidelines

### Card Balance
- Maintain consistent content length across cards
- Use parallel structure for titles and descriptions
- Ensure visual balance with similar image dimensions

### Progressive Disclosure
- Present information in logical sequence
- Use cards to break complex concepts into digestible pieces
- Consider user flow and decision points

### Responsive Content
- Plan for card wrapping on mobile devices
- Ensure content remains meaningful when cards stack
- Test layouts with varying content lengths

## Integration

### Dynamic Content
```handlebars
{{#each dynamicCards}}
<div class="hoo-splashscr">
    <div class="hoo-splashscr-content">
        {{> organism-teams-splash-card this}}
    </div>
</div>
{{/each}}
```

### Mixed Content Types
Can integrate different splash card variants:
```html
<div class="hoo-splashscr">
    <div class="hoo-splashscr-content">
        {{> organism-teams-splash-card-variant-1}}
        {{> organism-teams-splash-card-variant-2}}
        {{> organism-teams-splash-card-variant-3}}
    </div>
</div>
```

## SCSS Import