---
title: "Teams Dashboard Template"
description: "A comprehensive template component that provides a complete Microsoft Teams-style dashboard layout. The Teams Dashboard Template combines CSS Grid architecture with Teams Dashboard Cards to create fle"
type: "components"
layout: "single"
patternId: "templates-teams-teams-dashboard"
category: "templates"
subcategory: "teams"
seoTitle: "Templates - Teams Teams Dashboard"
seoDescription: "Teams Teams Dashboard Templates"
weight: 10
hasVariants: false
markup: |
  
---

# Teams Dashboard Template

A comprehensive template component that provides a complete Microsoft Teams-style dashboard layout. The Teams Dashboard Template combines CSS Grid architecture with Teams Dashboard Cards to create flexible, responsive dashboard interfaces that maintain consistency with Microsoft Teams design language.

## Overview

The Teams Dashboard Template serves as a foundational layout system for creating Teams-style dashboard experiences. It provides a structured grid container that automatically handles card placement, spacing, and responsive behavior while maintaining visual consistency with Microsoft Teams applications.

## Features

### Grid Architecture
- **CSS Grid Foundation**: Modern CSS Grid layout for flexible positioning
- **Automatic Placement**: Intelligent card placement with grid-auto-flow
- **Responsive Columns**: Adaptive column count based on container size
- **Grid Gap Management**: Consistent spacing between dashboard cards

### Visual Design
- **Teams Aesthetics**: Matches Microsoft Teams dashboard appearance
- **Elevation System**: Consistent elevation levels across all cards
- **Margin Management**: Standardized 20px margins for proper spacing
- **Card Integration**: Seamless integration with Teams Dashboard Cards

### Layout Flexibility
- **Dynamic Spanning**: Cards can span multiple columns as needed
- **Content Adaptation**: Flexible content areas that adapt to card content
- **Responsive Behavior**: Intelligent responsive breakpoints for all devices
- **Mixed Content**: Support for different card types within same dashboard

## Structure

The Teams Dashboard Template consists of:
1. **Dashboard Container**: `.hoo-teamsdb` - Main grid container
2. **Dashboard Cards**: Multiple `.hoo-teamsdbcard` elements - Individual content areas
3. **Grid System**: CSS Grid with automatic placement and responsive behavior

## CSS Classes

### Container Classes
- `.hoo-teamsdb`: Main dashboard grid container with layout and spacing

### Card Classes (Inherited)
- `.hoo-teamsdbcard`: Individual dashboard card styling
- `.hoo-teamsdbcard-header`: Card header with title and actions
- `.hoo-teamsdbcard-title`: Card title typography
- `.hoo-teamsdbcard-content`: Main card content area

## Styling

### Grid Layout
- **Display**: CSS Grid with automatic column generation
- **Grid Gap**: Consistent spacing between cards using grid-gap
- **Auto Flow**: Row-based automatic placement for cards
- **Column Sizing**: Flexible column sizing with minmax values

### Container Properties
- **Margin**: 20px standardized margin for proper page spacing
- **Elevation**: Level 4 elevation applied to all child cards
- **Background**: Inherits from parent container or page background

### Responsive Behavior
- **Large Screens**: Maximum column count with full feature display
- **Medium Screens**: Reduced columns with maintained functionality
- **Small Screens**: Single column stack with optimized spacing
- **Mobile**: Touch-optimized layout with adequate spacing

## Grid System Configuration

### Default Grid

### Responsive Grid Breakpoints

## Dashboard Patterns

### Executive Dashboard

```html
<div class="hoo-teamsdb">
    <!-- KPI Cards -->
    <article class="hoo-teamsdbcard">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Revenue</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            <div class="kpi-value">$2.4M</div>
            <div class="kpi-change positive">+15.3%</div>
        </div>
    </article>
    
    <!-- Charts spanning multiple columns -->
    <article class="hoo-teamsdbcard" style="grid-column: auto / span 3;">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Monthly Trends</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            <!-- Chart component -->
        </div>
    </article>
</div>
```

### Team Collaboration Dashboard

```html
<div class="hoo-teamsdb">
    <!-- Activity feed -->
    <article class="hoo-teamsdbcard" style="grid-column: auto / span 2;">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Team Activity</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-activity-feed }}
        </div>
    </article>
    
    <!-- Quick actions -->
    <article class="hoo-teamsdbcard">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Quick Actions</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-quick-actions-grid }}
        </div>
    </article>
    
    <!-- Upcoming meetings -->
    <article class="hoo-teamsdbcard" style="grid-column: auto / span 2;">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Upcoming Meetings</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-meeting-list }}
        </div>
    </article>
</div>
```

### Project Management Dashboard

```html
<div class="hoo-teamsdb">
    <!-- Project status cards -->
    <article class="hoo-teamsdbcard">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Active Projects</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            <div class="project-count">7</div>
            <div class="project-status">On track</div>
        </div>
    </article>
    
    <!-- Timeline view -->
    <article class="hoo-teamsdbcard" style="grid-column: auto / span 4;">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Project Timeline</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-project-timeline }}
        </div>
    </article>
    
    <!-- Resource allocation -->
    <article class="hoo-teamsdbcard" style="grid-column: auto / span 2;">
        <header class="hoo-teamsdbcard-header">
            <div class="hoo-teamsdbcard-title">Team Workload</div>
        </header>
        <div class="hoo-teamsdbcard-content">
            {{> molecules-workload-chart }}
        </div>
    </article>
</div>
```

## Integration Patterns

### Full Application Layout

```html
<div class="teams-app-container">
    <!-- Application header -->
    <header class="app-header">
        <div class="app-branding">
            <img src="logo.svg" alt="Application name">
            <h1>Team Dashboard</h1>
        </div>
        {{> molecules-teams-toolbar }}
        <div class="user-profile">
            {{> molecules-user-menu }}
        </div>
    </header>
    
    <!-- Main dashboard content -->
    <main class="app-main">
        <div class="hoo-teamsdb">
            <!-- Dashboard cards -->
        </div>
    </main>
    
    <!-- Application footer -->
    <footer class="app-footer">
        {{> molecules-app-footer }}
    </footer>
</div>
```

### Tabbed Dashboard Interface

```html
<div class="tabbed-dashboard">
    <!-- Tab navigation -->
    <nav class="dashboard-tabs">
        <button class="tab-button active" data-tab="overview">Overview</button>
        <button class="tab-button" data-tab="analytics">Analytics</button>
        <button class="tab-button" data-tab="team">Team</button>
    </nav>
    
    <!-- Tab content -->
    <div class="tab-content active" id="overview-tab">
        <div class="hoo-teamsdb">
            <!-- Overview dashboard cards -->
        </div>
    </div>
    
    <div class="tab-content" id="analytics-tab">
        <div class="hoo-teamsdb">
            <!-- Analytics dashboard cards -->
        </div>
    </div>
</div>
```

## Dynamic Content Management

### JavaScript Integration

### Dynamic Card Addition

## Use Cases

### Microsoft Teams Applications
- **Team Dashboards**: Channel-specific dashboards with team metrics
- **Personal Dashboards**: Individual productivity and task management
- **Meeting Dashboards**: Meeting preparation and follow-up interfaces
- **Project Dashboards**: Project-specific collaboration and tracking

### SharePoint Online
- **Site Dashboards**: Site activity and content management
- **Hub Dashboards**: Multi-site organizational views
- **Department Dashboards**: Department-specific content and metrics
- **Admin Dashboards**: Site administration and governance

### Office 365 Applications
- **Power BI Integration**: Embedded analytics and reporting
- **Power Platform**: Custom application dashboards
- **Planner Integration**: Task and project management views
- **Stream Integration**: Video content and engagement metrics

### Enterprise Applications
- **Business Intelligence**: Executive and operational dashboards
- **HR Applications**: Employee engagement and performance
- **Customer Support**: Support metrics and team performance
- **Sales Applications**: Sales performance and pipeline management

## Accessibility

### Semantic Structure
- **Main Landmark**: Dashboard container as main content area
- **Article Elements**: Each card as semantic article container
- **Header Structure**: Proper heading hierarchy within cards
- **Navigation Support**: Keyboard navigation between cards

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through dashboard cards
- **Focus Management**: Clear focus indicators for interactive elements
- **Card Navigation**: Efficient navigation between dashboard sections
- **Action Accessibility**: Keyboard access to all card actions

### Screen Reader Support
- **Dashboard Structure**: Clear dashboard structure announcement
- **Card Relationships**: Proper card grouping and relationships
- **Content Updates**: Dynamic content change announcements
- **Navigation Hints**: Clear instructions for dashboard navigation

## Performance Optimization

### Rendering Performance
- **CSS Grid Optimization**: Efficient layout with modern CSS Grid
- **Lazy Loading**: Progressive loading of dashboard cards
- **Virtual Scrolling**: For large numbers of dashboard cards
- **Content Caching**: Client-side caching of dashboard data

### Data Management
- **Incremental Updates**: Update individual cards without full refresh
- **WebSocket Integration**: Real-time data updates for live metrics
- **Background Sync**: Background data synchronization
- **State Management**: Efficient dashboard state management

## Browser Support

### Modern Browsers
- **Chrome 87+**: Full CSS Grid and modern feature support
- **Firefox 110+**: Complete compatibility with all features
- **Safari 16+**: Full support including advanced CSS features
- **Edge 87+**: Complete modern feature support

### Teams Client Support
- **Teams Desktop**: Full integration with Teams desktop application
- **Teams Web**: Complete web client compatibility
- **Teams Mobile**: Mobile-optimized dashboard layouts

### Core Components
- [Teams Dashboard Card](/components/molecules/cards-elements/teams-dashboard-card/) - Individual card component
- [Teams Toolbar](/components/molecules/menus/teams-toolbar/) - Dashboard toolbar integration

### Layout Components
- [Teams Splash Screen](/components/templates/teams/teams-splash-screen/) - Welcome and onboarding screens
- [Quick Links Grid](/components/organism/quick-links-grid/) - Alternative grid layouts

### Integration Components
- Microsoft Teams Apps - Teams application integration
- SharePoint Webparts - SharePoint dashboard integration
- Power BI Embedded - Analytics dashboard integration

## SCSS Import