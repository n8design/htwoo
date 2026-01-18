---
title: Message Bars
order: 10
---

# Message Bars / Status Bars

Message bars (also known as status bars) are lightweight notification dialogs that provide contextual feedback to users. Built on the HTML5 `<dialog>` element with the `.statusbar` modifier, they display status messages, alerts, and system notifications in an unobtrusive manner.

## Overview

Message bars in HTWOO provide a consistent way to communicate different types of status information to users. They appear as horizontal bars with distinctive colors, icons, and messaging that clearly indicate the nature of the information being conveyed.

## Features

### Status Types
- **Info**: Default blue styling for general information and neutral messages
- **Success**: Green styling with checkmark icon for positive outcomes
- **Warning**: Yellow/orange styling with warning icon for cautionary messages
- **Error**: Red styling with error icon for critical issues and failures

### Visual Design
- **Compact Layout**: Horizontal bar design optimized for minimal space usage
- **Icon Integration**: Status-appropriate icons to reinforce message type
- **Color Coding**: Distinctive backgrounds and borders for immediate recognition
- **Action Support**: Optional close buttons and action links

### Accessibility
- **High Contrast**: Strong color contrasts for accessibility compliance
- **Screen Reader**: Proper ARIA labels and semantic structure
- **Keyboard Navigation**: Full keyboard support for dismissal and actions
- **Focus Management**: Appropriate focus handling for interactive elements

## Structure

Message bars consist of:
1. **Status Icon**: Visual indicator matching the message type
2. **Content Area**: Text content and optional action links
3. **Actions**: Optional close button and additional actions

## Data Structure

```json
{
    "bodyClass": "dlg-preview-flex",
    "btn-closer": {
        "button": {
            "iconname": "icon-close",
            "aria-label": "Close",
            "props": " autofocus"
        }
    }
}
```

## CSS Classes

### Base Classes
- **`.hoo-dlg`**: Main dialog container
- **`.statusbar`**: Modifier for status bar styling
- **`.hoo-dlgcontent`**: Content area container
- **`.hoo-dlg-actions`**: Actions container for buttons

### Status Modifier Classes
- **`.success`**: Green styling for success messages
- **`.warning`**: Yellow/orange styling for warnings
- **`.error`**: Red styling for error messages
- **(default)**: Blue styling for info messages

## Styling

### Visual Properties
- **Background**: Status-appropriate background colors with transparency
- **Border**: Left border accent in status color
- **Padding**: 0.75rem for compact appearance
- **Typography**: 14px font size with medium weight for content

### Status Colors
- **Info**: Blue theme colors (`#0078d4` family)
- **Success**: Green theme colors (`#107c10` family)  
- **Warning**: Yellow/orange theme colors (`#ff8c00` family)
- **Error**: Red theme colors (`#d13438` family)

## JavaScript Integration

### Manual Control

### Dynamic Creation

## Use Cases

### System Notifications
- Application status updates
- Background process completion
- System maintenance alerts
- Feature announcements

### User Feedback
- Form validation summaries
- Action confirmations
- Progress updates
- Error reporting

### Contextual Information
- Help tips and guidance
- Promotional messages
- Feature availability notices
- Temporary status information

## Accessibility

### Screen Reader Support
- **Semantic Structure**: Proper dialog semantics
- **Status Communication**: Live regions for dynamic content
- **Descriptive Text**: Clear, concise messaging
- **Icon Alternative**: Text alternatives for status icons

### Keyboard Navigation
- **Focus Management**: Logical tab order through interactive elements
- **Escape Key**: Close functionality via Escape key
- **Action Access**: Keyboard access to all interactive elements
- **Focus Return**: Appropriate focus restoration after dismissal

### Visual Accessibility
- **Color Contrast**: High contrast ratios for all text
- **Color Independence**: Status communicated through icons and text, not color alone
- **Focus Indicators**: Clear visual focus states
- **Size Flexibility**: Responsive to user font size preferences

## Best Practices

### Content Guidelines
- **Concise Messaging**: Keep messages brief and actionable
- **Clear Language**: Use plain language and avoid technical jargon
- **Action-Oriented**: Include clear next steps when appropriate
- **Context-Specific**: Tailor messages to the specific situation

### UX Guidelines
- **Appropriate Timing**: Show messages at relevant moments
- **Non-Intrusive**: Don't interrupt critical user workflows
- **Dismissible**: Always provide a way to dismiss messages
- **Consistent Positioning**: Use consistent placement across the application

### Technical Guidelines
- **Performance**: Minimize DOM manipulation for frequent messages
- **Memory Management**: Clean up dismissed message bars
- **Responsive Design**: Ensure messages work across all device sizes
- **Testing**: Test with screen readers and keyboard navigation

## SCSS Import

