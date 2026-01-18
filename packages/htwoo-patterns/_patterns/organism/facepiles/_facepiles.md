---
title: Facepile Components
order: 1
---

# Facepiles

Facepile components provide efficient layouts for displaying multiple user avatars with presence indicators. These organism-level components are designed for showing teams, collaborators, and user collections in compact, visually appealing arrangements.

## Overview

Facepiles combine multiple avatar-with-presence components into organized layouts that efficiently use space while maintaining visual clarity. They're essential for user-centric interfaces where multiple people need to be represented simultaneously, such as collaboration tools, team management systems, and social applications.

## Components

### Size Variants
- **[Facepile](./facepile)**: Base component (24px avatars)
- **[Facepile 32px](./facepile~32)**: Compact size for navigation and sidebar elements
- **[Facepile 40px](./facepile~40)**: Standard size for most applications
- **[Facepile 48px](./facepile~48)**: Prominent size for featured content
- **[Facepile 64px](./facepile~64)**: Large size for hero sections and main displays

## Architecture

### Component Structure
```
Facepile (Organism)
├── Avatar with Presence (Molecule) × N
│   ├── Avatar (Atom)
│   └── Presence Indicator (Atom)
└── Overflow Indicator (Optional)
```

## Key Features

### Multi-User Display
- **Horizontal Layout**: Efficiently arranges multiple avatars in rows
- **Flexible Wrapping**: Adapts to container constraints with intelligent overflow
- **Consistent Spacing**: Maintains uniform spacing between avatars (1.118rem)
- **Responsive Design**: Automatically adjusts to available space

### Presence Integration
- **Real-time Status**: Each avatar includes live presence indicators
- **Status Types**: Online, away, busy, offline, and custom statuses
- **Visual Clarity**: Clear, color-coded presence indicators
- **Accessibility**: Screen reader compatible status announcements

### Size Flexibility
- **16px**: Ultra-compact for dense layouts
- **24px**: Compact for minimal space requirements
- **32px**: Standard compact for navigation elements
- **40px**: Balanced size for most applications
- **48px**: Prominent for featured content
- **64px**: Large for hero sections and main displays
- **72px**: Extra large for special presentations
- **96px**: Maximum size for showcase displays

## Data Structure

### Standard Facepile Data
```json
{
    "items": [
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/user1.jpg",
                "status": "online",
                "size": 40,
                "initials": "JD",
                "displayName": "John Doe"
            },
            "size": 40
        },
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/user2.jpg",
                "status": "away",
                "size": 40,
                "initials": "JS",
                "displayName": "Jane Smith"
            },
            "size": 40
        }
    ]
}
```

### With Overflow Data
```json
{
    "visibleUsers": [
        {
            "avatar": {
                "mugshot": "../../images/mug-shots/user1.jpg",
                "status": "online",
                "size": 32
            }
        }
    ],
    "hasOverflow": true,
    "overflowCount": 8,
    "totalUsers": 12
}
```

## Use Cases

### Collaboration Platforms
- **Document Editing**: Show active editors and reviewers
- **Real-time Collaboration**: Display current participants
- **Shared Workspaces**: Indicate team members and guests
- **Project Management**: Show task assignees and stakeholders

### Social and Communication
- **Chat Participants**: Display conversation members
- **Group Activities**: Show event attendees or participants
- **Social Connections**: Display mutual friends or connections
- **Community Features**: Show group members or followers

### Team and Organization
- **Department Displays**: Show team structure and hierarchy
- **Project Teams**: Display cross-functional team members
- **Reporting Lines**: Show management and direct reports
- **Skill Groups**: Display experts and specialists

### Content and Media
- **Content Contributors**: Show authors and editors
- **Media Sharing**: Display viewers and collaborators
- **Review Processes**: Show approvers and reviewers
- **Version Control**: Display contributors and committers

## Styling and Layout

### CSS Classes
- **`.hoo-facepile`**: Main container with flexbox layout
- **`.hoo-avatar-pres-{size}`**: Individual avatar-presence containers
- **Size-specific classes**: Applied automatically based on avatar size

### Layout Properties
- **Display**: Flexbox layout for efficient avatar arrangement
- **Direction**: Horizontal flow (left-to-right by default)
- **Alignment**: Flex-start positioning with wrap capability
- **Spacing**: Consistent gaps between avatar elements
- **Transitions**: Smooth animations for dynamic updates

### Responsive Behavior
- **Horizontal Flow**: Avatars arrange left-to-right by default
- **Flexible Wrapping**: Content wraps to new lines when space is constrained
- **Consistent Spacing**: Maintains uniform gaps between avatars
- **Smooth Transitions**: Animated changes for dynamic updates

## Performance Optimization

### Loading Strategies
- **Lazy Loading**: Defer avatar image loading until needed
- **Progressive Loading**: Load visible avatars first, then off-screen ones
- **Image Optimization**: Use appropriate formats and sizes
- **Caching**: Implement effective caching strategies for user images

### Large Collections
- **Virtualization**: Use virtual scrolling for very large user sets
- **Pagination**: Implement pagination for extensive user lists
- **Overflow Management**: Show limited avatars with overflow indicators
- **Search and Filter**: Provide search capabilities for large collections

### Memory Management
- **Image Cleanup**: Properly dispose of unused avatar images
- **Event Listeners**: Clean up event listeners when components unmount
- **Data Structures**: Use efficient data structures for user collections
- **Update Optimization**: Minimize re-renders for presence updates

## Accessibility

### Screen Reader Support
- **Individual Navigation**: Each avatar is individually navigable
- **Descriptive Labels**: Clear names and status descriptions
- **Live Updates**: Presence changes announced appropriately
- **Group Context**: Facepile purpose clearly communicated

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through avatars
- **Interactive Elements**: Keyboard access to clickable avatars
- **Focus Management**: Clear focus indicators and states
- **Skip Links**: Ability to skip large facepiles when needed

### Visual Accessibility
- **High Contrast**: Strong color contrast for all elements
- **Color Independence**: Status communicated through multiple methods
- **Size Flexibility**: Scales with user font size preferences
- **Focus Indicators**: Clear visual focus states

## Integration Examples

### SharePoint Framework (SPFx)
For SPFx development, use the hTWOo design system classes with your web part implementations. Refer to SPFx documentation and Storybook for integration patterns.

### React Integration
For React applications, use the `@n8d/htwoo-react` package which provides facepile components with the same design system styling. Facepile components are available in Storybook for interactive examples and documentation.

### JavaScript Integration
For vanilla JavaScript implementations, refer to:
- **Storybook**: Interactive examples with live code demos
- **PatternLab**: Working pattern examples with actual markup
- **Source Code**: Check the actual implementation files for current patterns

## Best Practices

### Design Guidelines
- **Consistent Sizing**: Use the same avatar size within a single facepile
- **Logical Ordering**: Order users by relevance, status, or alphabetically
- **Visual Hierarchy**: Use size to indicate importance or role
- **Space Management**: Implement overflow handling for large user sets

### User Experience
- **Performance**: Optimize for quick loading and smooth interactions
- **Responsiveness**: Ensure facepiles work well across all device sizes
- **Accessibility**: Maintain full keyboard and screen reader support
- **Context**: Provide clear context for who the users are and their role

## SCSS Files

**Styles:**
- `lib/sass/organisms/facepile.scss`
- `lib/sass/molecules/avatar-with-presence.scss`
- `lib/sass/atoms/avatar.scss`
- `lib/sass/atoms/presence.scss`

