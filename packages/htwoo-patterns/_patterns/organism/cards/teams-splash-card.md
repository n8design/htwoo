---
title: Teams Splash Card
order: 11
---

# Teams Splash Card

The Teams Splash Card is a feature-rich, promotional card component designed for highlighting content with maximum visual impact. It provides a prominent presentation style with centered content layout and dedicated areas for images, descriptive text, and call-to-action buttons, making it ideal for Microsoft Teams applications and welcome interfaces.

## Overview

The Teams Splash Card serves as a high-impact content presentation component, specifically designed for feature highlights, application introductions, and promotional content. It combines visual elements with compelling messaging and clear action paths to guide user engagement and adoption.

## Features

### Visual Design
- **Centered Layout**: All content centered for maximum visual impact
- **Generous Spacing**: Large padding (3rem 1.25rem) for breathing room
- **Maximum Width**: Constrained to 33rem (≈528px) for optimal readability
- **Elevation Effects**: Footer buttons with box shadow for emphasis
- **Image Optimization**: Centered images with maximum width of 320px

### Content Structure
- **Header Section**: Optional top section for branding or context
- **Hero Image**: Large, centered visual element
- **Title Display**: Prominent heading (18px) for primary messaging
- **Description Area**: Supporting text content with proper typography
- **Action Footer**: Button collection with elevated styling

### Layout Flexibility
- **Container Adaptation**: Flexible width within maximum constraints
- **Vertical Flow**: Logical content progression from top to bottom
- **Responsive Behavior**: Adapts gracefully to different container sizes
- **Touch Optimization**: Adequate spacing and touch targets for mobile

## Structure

The Teams Splash Card consists of four main sections:
1. **[Card Splash Header](../molecules/cards-elements/card-splash-header)**: Optional branding or icon area
2. **[Card Splash Title](../molecules/cards-elements/card-splash-title)**: Primary heading and messaging
3. **[Card Splash Description](../molecules/cards-elements/card-splash-desc)**: Supporting descriptive content
4. **[Card Splash Footer](../molecules/cards-elements/card-splash-footer)**: Action buttons with elevation

## Data Structure

```json
{
    "headerImage": "../../images/branding/welcome-graphic.svg",
    "cardtitle": "Welcome to Your Enhanced Workspace Experience",
    "description": "Explore new features and capabilities designed to streamline your workflow and enhance team collaboration with powerful, intuitive tools.",
    "prim-btn": {
        "button": {
            "label": "Start Exploring"
        }
    },
    "sec-btn": {
        "button": {
            "label": "View Tutorial"
        }
    }
}
```

## CSS Classes

### Container Classes
- **`.hoo-splashcard`**: Main card container with centered layout
- **`.hoo-splashcard-header`**: Header section with optional branding
- **`.hoo-splashcard-img`**: Image styling with responsive behavior
- **`.hoo-splashcard-title`**: Title styling with prominent typography

### Content Classes
- **`.hoo-splashcard-desc`**: Description text with proper spacing
- **`.hoo-splashcard-footer`**: Action button container with elevation

## Styling

### Container Layout

### Typography Hierarchy

### Interactive Elements

### Visual Properties
- **Max Width**: 33rem (528px) for optimal readability
- **Padding**: 3rem vertical, 1.25rem horizontal for generous spacing
- **Image Size**: Maximum 320px width for hero images
- **Button Width**: 290px consistent width for action buttons
- **Gap Spacing**: 0.5rem between footer buttons

## Use Cases

### Application Onboarding
- **Welcome Screens**: First-time user introduction and orientation
- **Feature Announcements**: New feature highlights and explanations
- **Getting Started**: Initial setup and configuration guidance
- **Tutorial Introductions**: Learning path entry points

### Marketing and Promotion
- **Product Features**: Key benefit and capability highlights
- **Service Promotion**: New service or offering announcements
- **Event Marketing**: Conference, webinar, and event promotion
- **Campaign Landing**: Marketing campaign entry points

### Microsoft Teams Integration
- **Teams Apps**: Application introduction and feature highlights
- **Bot Interfaces**: Welcome messages and capability overviews
- **Tab Applications**: Feature introduction and navigation
- **Connector Cards**: Service integration and status updates

### Dashboard and Portal
- **Admin Interfaces**: Feature announcements and system updates
- **User Dashboards**: New capability introductions
- **Portal Landing**: Department or team-specific welcome content
- **Resource Centers**: Tool and service introductions

## Accessibility

### Semantic Structure
- **Article Element**: Uses `<article>` for self-contained content
- **Heading Hierarchy**: Proper heading structure with `<h2>` for titles
- **Image Alt Text**: Descriptive alternative text for all images
- **Button Labels**: Clear, action-oriented button text

### Visual Accessibility
- **Text Contrast**: High contrast ratios for all text content
- **Font Sizing**: Appropriate font sizes for readability (18px title, 14px body)
- **Spacing**: Adequate white space for visual clarity
- **Focus Indicators**: Clear focus states for interactive elements

### Interaction Design
- **Touch Targets**: Minimum 44px touch target sizes for buttons
- **Button Spacing**: 0.5rem gap between action buttons
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader**: Logical reading order and meaningful content structure

## Behavior and Interaction

### Layout Adaptation
- **Container Response**: Adapts to parent container dimensions
- **Content Flow**: Maintains vertical content progression
- **Image Scaling**: Responsive image sizing within constraints
- **Button Stacking**: Vertical button layout for mobile optimization

### Interactive Feedback
- **Button Elevation**: Box shadow effects on footer buttons
- **Hover States**: Visual feedback for interactive elements  
- **Focus Management**: Clear focus indicators and logical tab order
- **Touch Response**: Optimized for touch interactions

## Best Practices

### Content Strategy
- **Clear Messaging**: Use concise, compelling titles and descriptions
- **Action-Oriented**: Include clear, specific call-to-action buttons
- **Visual Hierarchy**: Maintain consistent information architecture
- **Brand Alignment**: Use imagery and messaging aligned with brand voice

### Visual Design
- **Image Quality**: Use high-resolution, professional imagery
- **Consistent Spacing**: Maintain uniform spacing patterns
- **Color Integration**: Leverage theme colors for consistency
- **Typography Hierarchy**: Use consistent font sizing and line heights

### User Experience
- **Progressive Disclosure**: Present information in logical order
- **Clear Actions**: Provide obvious next steps for users
- **Loading States**: Consider loading animations for dynamic content
- **Error Handling**: Graceful handling of missing or failed content

### Development
- **Performance**: Optimize images and assets for web delivery
- **Responsiveness**: Test across different container sizes
- **Accessibility**: Ensure keyboard and screen reader compatibility
- **Testing**: Validate with real content and various content lengths

## Integration Examples

### Microsoft Teams Tab App

### SharePoint SPFx Web Part

## Browser Support

- **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
- **Flexbox**: Requires CSS Flexbox support for layout
- **CSS Box Shadow**: Uses box-shadow for button elevation
- **CSS Custom Properties**: Theme integration through CSS variables
- **HTML5 Semantic Elements**: Uses modern HTML5 article element

## SCSS Import

## SCSS Imports

**Main Component:**\
@n8d/htwoo-core/components/cards

***
