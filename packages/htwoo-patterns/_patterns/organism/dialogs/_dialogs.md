---
title: Dialog Components
order: 1
---

# Dialog Organisms

The Dialog organism collection provides a comprehensive set of modal, sidebar, and notification interface components designed for displaying content, gathering user input, and managing user focus within applications. These components leverage the HTML5 `<dialog>` element to create accessible, flexible, and performant dialog experiences.

## Overview

Dialog organisms represent the highest level of dialog implementation in the HTWOO design system. They combine molecular-level dialog components (header, content, actions) into complete dialog interfaces that handle various user interaction patterns, from simple notifications to complex modal workflows.

## Components

### Primary Dialogs
- **[Generic Dialog](./generic-dialog)**: Standard centered dialog for general content display
- **[Modal Dialog](./modal-dialog)**: Full-screen overlay with backdrop for focused interactions
- **[Status Dialogs](./status-dialogs)**: Contextual messaging for error, warning, success, and info states

### Positioned Dialogs
- **[Sidebar Dialog](./dialog-sidebar)**: Left or right-aligned panels for additional content
- **[Topbar Dialog](./dialog-topbar)**: Fixed-position notification bar at viewport top
- **[Bottombar Dialog](./dialog-bottombar)**: Fixed-position notification bar at viewport bottom

### Content Dialogs
- **[IFrame Dialog](./dialog-iframe)**: Container for embedded web content and external applications
- **[Message Bars](./msgbars)**: Lightweight notification bars for status messages

### Legacy Components
- **[Legacy Dialogs](./legacy/)**: Backward compatibility components for existing implementations

## Architecture

### Component Hierarchy
```
Dialog Organisms
├── Dialog Container (HTML5 <dialog>)
│   ├── Dialog Header (Molecule)
│   │   ├── Title Text (Atom)
│   │   └── Close Button (Atom)
│   ├── Dialog Content (Molecule)
│   │   └── Content Area (Atom)
│   └── Dialog Actions (Molecule)
│       └── Action Buttons (Atom)
```

## Key Features

### HTML5 Dialog Foundation
- **Native Element**: Built on HTML5 `<dialog>` for optimal accessibility
- **Browser Support**: Leverages native browser dialog functionality
- **Focus Management**: Automatic focus trapping and restoration
- **Keyboard Navigation**: Built-in keyboard support (Escape to close)

### Flexible Positioning
- **Modal**: Center-screen with backdrop overlay
- **Sidebar**: Left or right-aligned panel layouts
- **Topbar/Bottombar**: Fixed-position notification bars
- **Custom**: Configurable positioning through CSS variables

### Responsive Design
- **Container Adaptation**: Adapts to viewport and container constraints
- **Mobile Optimization**: Touch-friendly interactions and sizing
- **Viewport Units**: Uses modern viewport units (svh, svw) for consistency
- **Flexible Dimensions**: CSS custom properties for width and height control

### Advanced Interactions
- **Backdrop Control**: Optional backdrop clicking to close
- **Escape Key**: Configurable Escape key handling
- **Focus Management**: Automatic focus trapping within dialog
- **Animation Support**: Smooth transitions and backdrop effects

## JavaScript Integration

### HOODialog Class
The HTWOO system includes a JavaScript class for enhanced dialog management:

### Manual Dialog Control

## Styling Architecture

### CSS Custom Properties

### Dialog Variants

### Visual Properties
- **Background**: Neutral-000 (#ffffff) with transparency support
- **Border Radius**: 0.5rem for modern appearance
- **Padding**: 1.5rem standard, 0.5rem for message bars
- **Backdrop**: Blur effect with 75% opacity
- **Transition**: 0.5s ease-in-out for smooth animations

## Use Cases

### Application Workflows
- **Confirmation Dialogs**: User action confirmations and warnings
- **Form Dialogs**: Data input and editing interfaces
- **Settings Panels**: Configuration and preference interfaces
- **Help Systems**: Contextual help and documentation

### Content Display
- **Media Viewers**: Image, video, and document preview
- **Detail Views**: Expanded item information and metadata
- **Embedded Content**: External web content and applications
- **Reports**: Data visualization and analytics displays

### Notifications and Messaging
- **Status Updates**: System status and progress indicators
- **Error Handling**: Error messages and resolution guidance
- **Success Feedback**: Completion confirmations and next steps
- **Information Alerts**: Important announcements and updates

### Navigation and Layout
- **Side Panels**: Additional navigation and context
- **Tool Palettes**: Design and editing tool collections
- **Filter Panels**: Search and filter controls
- **Property Inspectors**: Object and selection properties

## Accessibility Features

### Native HTML5 Benefits
- **Focus Trapping**: Automatic focus management within dialog
- **Keyboard Support**: Built-in Escape key handling
- **Screen Reader**: Native dialog semantics and announcements
- **ARIA Integration**: Automatic ARIA states and properties

### Enhanced Accessibility
- **Focus Restoration**: Returns focus to launching element on close
- **High Contrast**: Compatible with high contrast display modes
- **Keyboard Navigation**: Full keyboard operation without mouse
- **Screen Reader Labels**: Descriptive labels and instructions

### Visual Accessibility
- **Color Contrast**: High contrast ratios for all text and controls
- **Focus Indicators**: Clear visual focus states
- **Text Scaling**: Responsive to user font size preferences
- **Motion Sensitivity**: Respectful animation and transition timing

## Performance Optimization

### Loading and Rendering
- **Lazy Loading**: Defer dialog content until needed
- **Virtual Scrolling**: Efficient rendering of large content lists
- **Image Optimization**: Appropriate sizing and loading strategies
- **Memory Management**: Proper cleanup of event listeners and resources

### Animation Performance
- **GPU Acceleration**: Hardware-accelerated transitions
- **Efficient Animations**: CSS transforms over layout changes
- **Reduced Motion**: Respect user motion preferences
- **Frame Rate**: Smooth 60fps animations

## Best Practices

### Content Strategy
- **Clear Purpose**: Each dialog should have a single, clear purpose
- **Concise Content**: Keep dialog content focused and scannable
- **Action Clarity**: Use clear, action-oriented button labels
- **Progressive Disclosure**: Show information in logical progression

### User Experience
- **Non-Intrusive**: Don't interrupt critical user workflows
- **Escape Routes**: Always provide clear ways to close or cancel
- **Responsive Feedback**: Provide immediate feedback for user actions
- **Context Preservation**: Maintain user context when possible

### Development
- **Progressive Enhancement**: Ensure basic functionality without JavaScript
- **Error Handling**: Graceful handling of content loading failures
- **Testing Strategy**: Test with keyboard users and screen readers
- **Performance Monitoring**: Monitor dialog loading and interaction performance

## Integration Examples

### SharePoint Framework (SPFx)

### React Integration
For React applications, use the `@n8d/htwoo-react` package which provides dialog components with the same design system styling. Dialog components are available in Storybook for interactive examples and documentation.

## Browser Support

- **Modern Browsers**: Full support in Chrome 37+, Firefox 98+, Safari 15.4+
- **HTML5 Dialog**: Requires native `<dialog>` element support
- **CSS Features**: Modern CSS features (custom properties, backdrop-filter)
- **JavaScript**: ES6+ features for enhanced functionality
- **Polyfills**: Available for older browser support

## SCSS Files

**Dialog Organism Styles:**
- `lib/sass/03-organism/dialog/`

**Dialog Molecule Styles:**
- `lib/sass/02-molecules/dialogs/`
