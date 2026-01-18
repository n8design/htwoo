---
title: "Teams Dashboard Card"
description: "A specialized card component designed for Microsoft Teams dashboard layouts. The Teams Dashboard Card provides a clean, structured container for displaying dashboard content with consistent spacing, e"
type: "components"
layout: "single"
patternId: "molecules-cards-elements-teams-dashboard-card"
category: "molecules"
subcategory: "cards-elements"
seoTitle: "Molecules - Cards Elements Teams Dashboard Card"
seoDescription: "Cards Elements Teams Dashboard Card Molecules"
weight: 20
hasVariants: false
markup: |
  
---

# Teams Dashboard Card

A specialized card component designed for Microsoft Teams dashboard layouts. The Teams Dashboard Card provides a clean, structured container for displaying dashboard content with consistent spacing, elevation, and Teams-inspired visual design.

## Overview

The Teams Dashboard Card is a molecular component that creates visually cohesive content containers for Teams-style dashboards. It combines modern card design principles with Microsoft Teams aesthetics to create engaging, accessible content areas that work seamlessly within grid-based dashboard layouts.

## Features

### Design Characteristics
- **Teams Aesthetics**: Matches Microsoft Teams visual design language
- **Elevated Surface**: Subtle elevation (level 4) for depth and hierarchy
- **Clean Borders**: Rounded corners (4px radius) for modern appearance
- **Consistent Spacing**: Standardized 1rem padding for content areas
- **Flexible Content**: Adapts to various content types and structures

### Layout Properties
- **Box Sizing**: Border-box for predictable sizing behavior
- **Background**: Clean white background (neutral-000) for content focus
- **Grid Integration**: Designed for CSS Grid dashboard layouts
- **Responsive Design**: Adapts gracefully to different container sizes

### Content Structure
- **Header Section**: Optional card header with title and actions
- **Content Area**: Main content container with proper spacing
- **Footer Section**: Optional footer for actions or metadata

## Structure

The Teams Dashboard Card consists of three main areas:
1. **Card Header**: `.hoo-teamsdbcard-header` - Title and header content
2. **Card Content**: `.hoo-teamsdbcard-content` - Main content area
3. **Card Container**: `.hoo-teamsdbcard` - Overall card structure

## CSS Classes

### Core Classes
- `.hoo-teamsdbcard`: Main card container with styling and elevation
- `.hoo-teamsdbcard-header`: Header section for title and actions
- `.hoo-teamsdbcard-title`: Card title with bold typography
- `.hoo-teamsdbcard-content`: Main content area with consistent padding
- `.hoo-teamsdbcard-footer`: Optional footer section for actions

## Styling

### Visual Design
- **Background**: White (`#ffffff`) for clean content presentation
- **Border Radius**: 4px for modern, rounded appearance
- **Elevation**: Level 4 shadow for subtle depth
- **Padding**: 1rem (16px) for comfortable content spacing

### Typography
- **Title Font Size**: 1rem (16px) for clear hierarchy
- **Title Font Weight**: Bold for emphasis and structure
- **Content Typography**: Inherits base typography styles

### Layout Behavior
- **Box Sizing**: Border-box for predictable dimensions
- **Grid Integration**: Works seamlessly with CSS Grid layouts
- **Flexible Height**: Adapts to content length automatically
- **Grid Spanning**: Supports custom grid column spanning

## Dashboard Grid Integration

### Standard Grid Layout

```html
<div class="hoo-teamsdb">
    <article class="hoo-teamsdbcard">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Quick Actions</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-quick-links-compact }}
        </div>
    </article>
    
    <article class="hoo-teamsdbcard" style="grid-column: auto / span 2;">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Recent Activity</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-activity-feed }}
        </div>
    </article>
</div>
```

### Responsive Grid Patterns

## Content Patterns

### Metric Cards

```html
<article class="hoo-teamsdbcard">
    <header class="hoo-teamsdbcard-header">
        <div class="hoo-teamsdbcard-title">Active Users</div>
    </header>
    <div class="hoo-teamsdbcard-content">
        <div class="metric-display">
            <span class="metric-number">1,247</span>
            <span class="metric-change positive">+12%</span>
        </div>
        <div class="metric-subtitle">This month</div>
    </div>
</article>
```

### List Cards

```html
<article class="hoo-teamsdbcard">
    <header class="hoo-teamsdbcard-header">
        <div class="hoo-teamsdbcard-title">Recent Files</div>
        <a href="/all-files" class="hoo-link-subtle">View all</a>
    </header>
    <div class="hoo-teamsdbcard-content">
        <ul class="file-list">
            <li class="file-item">
                <span class="file-name">Project Proposal.docx</span>
                <span class="file-date">2 hours ago</span>
            </li>
            <li class="file-item">
                <span class="file-name">Budget Review.xlsx</span>
                <span class="file-date">Yesterday</span>
            </li>
        </ul>
    </div>
</article>
```

### Chart Cards

```html
<article class="hoo-teamsdbcard" style="grid-column: auto / span 3;">
    <header class="hoo-teamsdbcard-header">
        <div class="hoo-teamsdbcard-title">Team Performance Trends</div>
        <div class="chart-controls">
            <select class="hoo-select-compact">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
            </select>
        </div>
    </header>
    <div class="hoo-teamsdbcard-content">
        <div class="chart-container">
            <canvas id="performance-chart"></canvas>
        </div>
    </div>
</article>
```

## Use Cases

### Team Dashboards
- **Performance Metrics**: Key performance indicators and team statistics
- **Activity Feeds**: Recent team activities and updates
- **Quick Actions**: Frequently used team tools and shortcuts
- **Announcements**: Important team messages and updates

### Project Management
- **Project Status**: Current project health and progress indicators
- **Task Lists**: Priority tasks and upcoming deadlines
- **Resource Allocation**: Team workload and capacity information
- **Timeline Views**: Project milestones and delivery schedules

### Analytics Dashboards
- **Usage Statistics**: Application and content usage metrics
- **User Engagement**: Participation and interaction data
- **Performance Data**: System and application performance metrics
- **Trend Analysis**: Historical data and predictive insights

### Content Management
- **Recent Content**: Recently created or modified documents
- **Popular Resources**: Most accessed files and information
- **Shared Content**: Team collaboration and sharing activities
- **Content Health**: Document status and compliance information

## Accessibility

### Semantic Structure
- **Article Element**: Semantic article container for screen readers
- **Header Element**: Proper header structure for card titles
- **Heading Hierarchy**: Appropriate heading levels for content structure
- **Landmark Roles**: Clear content areas for navigation

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through interactive elements
- **Focus Management**: Clear focus indicators for all interactive content
- **Action Accessibility**: Keyboard access to all card actions
- **Content Navigation**: Screen reader-friendly content structure

### Visual Accessibility
- **High Contrast**: Support for high contrast modes and themes
- **Color Independence**: No color-only information conveyance
- **Text Scaling**: Support for browser zoom up to 200%
- **Focus Indicators**: Clear visual focus states for interactive elements

## Performance Considerations

### Rendering Efficiency
- **CSS Grid Integration**: Efficient layout with modern CSS Grid
- **Content Lazy Loading**: Progressive loading for dashboard content
- **Image Optimization**: Optimized images and graphics for web delivery
- **Animation Performance**: Smooth transitions with CSS transforms

### Memory Management
- **Event Delegation**: Efficient event handling for dynamic content
- **Content Cleanup**: Proper cleanup of dynamic dashboard content
- **Reference Management**: Avoid memory leaks with card interactions

## Browser Support

### Modern Browsers
- **Chrome 87+**: Full CSS Grid and elevation support
- **Firefox 110+**: Complete feature compatibility
- **Safari 16+**: Full support including advanced CSS features
- **Edge 87+**: Complete modern feature support

### Teams Client Support
- **Teams Desktop**: Full integration with Teams desktop application
- **Teams Web**: Complete web client compatibility
- **Teams Mobile**: Mobile-optimized card layouts

### Dashboard Components
- [Teams Dashboard Template](../../templates/teams/) - Complete dashboard layout
- [Teams Toolbar](../menus/teams-toolbar.html) - Dashboard toolbar integration

### Card Components
- [Teams Splash Card](../../organism/cards/teams-splash-card.html) - Promotional splash cards
- [Card Elements](./card-splash-header.html) - Reusable card elements

### Grid Components
- [Quick Links Grid](../../organism/quick-links-grid/) - Alternative grid layouts
- [Cards Layout](../../organism/cards/) - General card layout systems

## SCSS Import

## Configuration Examples

### Metric Dashboard

```html
<div class="hoo-teamsdb">
    <article class="hoo-teamsdbcard">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Active Projects</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            <div class="metric-large">24</div>
        </div>
    </article>
    
    <article class="hoo-teamsdbcard">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Completed Tasks</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            <div class="metric-large">187</div>
        </div>
    </article>
</div>
```

### Content Dashboard

```html
<div class="hoo-teamsdb">
    <article class="hoo-teamsdbcard" style="grid-column: auto / span 4;">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Team Activity Stream</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-activity-timeline }}
        </div>
    </article>
</div>
```