---
title: Teams Dashboard Page
order: 10
---

# Teams Dashboard Page

The Teams Dashboard Page provides a complete page-level implementation for Teams-style dashboard interfaces, incorporating the full document structure, metadata, and styling needed for production deployment. This page pattern serves as the top-level container for comprehensive dashboard experiences within Microsoft Teams applications.

## Overview

The Teams Dashboard Page represents the highest level of abstraction in the atomic design hierarchy for dashboard implementations. It combines the Teams Dashboard Template with complete page structure, including document head, body, and all necessary assets for a standalone dashboard experience that maintains full compatibility with Microsoft Teams design standards.

## Features

### Complete Page Structure
- **Document Foundation**: Full HTML document with proper DOCTYPE and meta tags
- **Asset Integration**: Automatic inclusion of required CSS and JavaScript files
- **SEO Optimization**: Proper meta tags and structured data for search engines
- **Performance Optimization**: Optimized asset loading and rendering strategies

### Dashboard Experience
- **Grid Layout**: CSS Grid-based layout for flexible dashboard arrangement
- **Responsive Design**: Adaptive layout that works across all device sizes
- **Card Management**: Dynamic card placement and sizing within the grid
- **Real-time Updates**: Support for live data updates and refresh cycles

### Teams Integration
- **Brand Consistency**: Full adherence to Microsoft Teams design language
- **Accessibility Compliance**: WCAG 2.1 AA compliance throughout the page
- **Theme Support**: Automatic theme detection and application
- **SDK Integration**: Complete Teams SDK integration for context and functionality

### Production Ready
- **Cross-Browser Compatibility**: Tested across all major browsers
- **Performance Metrics**: Optimized for Core Web Vitals
- **Security Headers**: Appropriate security headers and CSP policies
- **Error Handling**: Graceful degradation and error boundary patterns

## Structure

The Teams Dashboard Page includes:
1. **Document Head**: Meta tags, title, and asset references
2. **Page Body**: Main page content with Teams branding
3. **Dashboard Template**: Grid-based dashboard layout container
4. **Dashboard Cards**: Individual dashboard card components
5. **Script Integration**: Required JavaScript for interactivity and real-time updates

## Data Structure

```json
{
    "page": {
        "title": "Team Dashboard - Teams Application",
        "description": "Comprehensive team dashboard for Microsoft Teams",
        "language": "en",
        "theme": "teams-light"
    },
    "teamName": "Project Alpha Team",
    "lastUpdated": "2025-06-25T10:30:00Z",
    "dashboardCards": [
        {
            "title": "Team Overview",
            "content": "<div class=\"metric-display\"><span class=\"metric-number\">12</span><span class=\"metric-label\">Active Members</span></div>",
            "span": 1,
            "actions": [
                {
                    "icon": "icon-refresh",
                    "label": "Refresh team data"
                }
            ]
        },
        {
            "title": "Recent Activity",
            "content": "<div class=\"activity-feed\"><!-- Activity feed content --></div>",
            "span": 2,
            "actions": [
                {
                    "icon": "icon-filter",
                    "label": "Filter activities"
                },
                {
                    "icon": "icon-export",
                    "label": "Export activities"
                }
            ]
        },
        {
            "title": "Upcoming Deadlines",
            "content": "<div class=\"deadline-list\"><!-- Deadline items --></div>",
            "span": 1
        },
        {
            "title": "Team Performance",
            "content": "<div class=\"performance-chart\"><!-- Chart component --></div>",
            "span": 4,
            "actions": [
                {
                    "icon": "icon-chart",
                    "label": "View detailed analytics"
                }
            ]
        },
        {
            "title": "Quick Actions",
            "content": "<div class=\"quick-actions-grid\"><!-- Action buttons --></div>",
            "span": 2
        }
    ]
}
```

## Page-Level Features

### SEO and Meta Tags
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Team dashboard for Microsoft Teams collaboration">
    <meta name="keywords" content="teams, dashboard, collaboration, metrics, analytics">
    <meta name="author" content="Your Organization">
    
    <!-- Open Graph for Teams sharing -->
    <meta property="og:title" content="Team Dashboard - Teams Application">
    <meta property="og:description" content="Comprehensive team dashboard for Microsoft Teams">
    <meta property="og:image" content="images/dashboard-preview.jpg">
    <meta property="og:type" content="website">
    
    <!-- Teams specific meta tags -->
    <meta name="teams-app-id" content="your-app-id">
    <meta name="teams-theme" content="default">
    <meta name="teams-page-type" content="dashboard">
</head>
```

### Dashboard Theme Integration
```html
<html class="teams-theme teams-light" data-theme="light" data-page="dashboard">
<body class="teams-dashboard-page">
    <!-- Dashboard content automatically inherits Teams theme variables -->
</body>
</html>
```

### Asset Loading Strategy
```html
<!-- Critical CSS (inline) -->
<style>
    /* Critical dashboard styles for immediate rendering */
    .hoo-teamsdb { display: grid; margin: 1.25rem; }
    .hoo-teamsdbcard { background: #fff; border-radius: 8px; }
</style>

<!-- Non-critical CSS (deferred) -->
<link rel="preload" href="css/teams-theme.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link rel="preload" href="css/htwoo-core.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link rel="preload" href="css/teams-dashboard.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- JavaScript (async) -->
<script async src="js/teams-analytics.js"></script>
<script defer src="js/dashboard-interactions.js"></script>
```

## Responsive Behavior

### Desktop (> 1200px)
- **Grid Layout**: Multi-column grid with optimal card distribution
- **Card Sizing**: Variable card spans for rich content display
- **Navigation**: Full dashboard navigation and toolbar
- **Interactions**: Hover states and advanced interactions

### Tablet (1024px - 1200px)
- **Adaptive Grid**: Reduced column count with maintained functionality
- **Card Adaptation**: Cards resize to fit available space
- **Touch Optimization**: Touch-friendly interactions and sizing

### Mobile (< 1024px)
- **Single Column**: Stacked card layout for mobile viewing
- **Touch Navigation**: Mobile-optimized navigation patterns
- **Content Priority**: Most important cards shown first
- **Collapsible Sections**: Expandable card content for space efficiency

## Use Cases

### Team Management
- Team performance dashboards
- Member activity tracking
- Task and project management
- Meeting and collaboration metrics

### Project Dashboards
- Project status tracking
- Resource allocation views
- Timeline and milestone tracking
- Risk and issue management

### Analytics Dashboards
- Usage analytics and insights
- Performance metrics
- Engagement tracking
- Compliance and governance

## Accessibility

### Page-Level Accessibility
- **Skip Links**: Navigation bypass for keyboard users
- **Landmark Roles**: Proper semantic structure with ARIA landmarks
- **Focus Management**: Logical focus flow through dashboard cards
- **Screen Reader Support**: Complete page structure and navigation

### Dashboard Accessibility
- **Card Navigation**: Keyboard navigation between dashboard cards
- **Dynamic Updates**: Announced changes to dashboard content
- **High Contrast**: Support for high contrast themes
- **Screen Reader**: Proper card structure and content announcement

## Performance Optimization

### Loading Performance
- **Critical CSS**: Inline critical dashboard rendering styles
- **Asset Preloading**: Strategic preloading of dashboard resources
- **Progressive Loading**: Lazy loading of non-critical dashboard cards
- **Image Optimization**: Optimized graphics and chart rendering

### Runtime Performance
- **Efficient Updates**: Incremental dashboard updates without full refresh
- **Memory Management**: Efficient handling of dashboard data and charts
- **Background Sync**: Background data synchronization for real-time updates
- **Caching Strategy**: Client-side caching of dashboard data

## Security Considerations

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    style-src 'self' 'unsafe-inline';
    script-src 'self' *.teams.microsoft.com *.powerbi.com;
    img-src 'self' data: https:;
    connect-src 'self' *.teams.microsoft.com *.graph.microsoft.com;
    frame-src 'self' *.powerbi.com;
">
```

### Teams Security
- **Token Validation**: Proper Teams authentication token handling
- **Origin Verification**: Validation of Teams context and origin
- **Data Protection**: Secure handling of team and user data
- **API Security**: Secure integration with Teams and Graph APIs

## Integration Patterns

### Teams SDK Integration
```html
<script src="https://res.cdn.office.net/teams-js/2.0.0/js/MicrosoftTeams.min.js"></script>
<script>
    microsoftTeams.app.initialize().then(() => {
        // Teams context is ready
        microsoftTeams.app.getContext().then((context) => {
            // Initialize dashboard with Teams context
            initializeDashboard(context);
            
            // Set up theme handling
            microsoftTeams.app.registerOnThemeChangeHandler((theme) => {
                updateDashboardTheme(theme);
            });
        });
    });
    
    function initializeDashboard(context) {
        // Use Teams context for dashboard personalization
        document.querySelector('.team-name').textContent = context.team?.displayName || 'Team';
        document.querySelector('.dashboard-title').textContent = `${context.team?.displayName} Dashboard`;
        
        // Load team-specific dashboard data
        loadDashboardData(context.team.groupId);
    }
</script>
```

### Analytics Integration
```html
<script>
    // Teams-compliant analytics for dashboard usage
    if (window.teams && teams.analytics) {
        teams.analytics.trackEvent('dashboard_loaded', {
            team_id: context.team.groupId,
            user_role: context.user.role,
            card_count: document.querySelectorAll('.hoo-teamsdbcard').length
        });
        
        // Track card interactions
        document.querySelectorAll('.hoo-teamsdbcard').forEach((card, index) => {
            card.addEventListener('click', () => {
                teams.analytics.trackEvent('dashboard_card_clicked', {
                    card_index: index,
                    card_title: card.querySelector('.hoo-teamsdbcard-title').textContent
                });
            });
        });
    }
</script>
```

### Real-time Data Integration
```html
<script>
    class DashboardManager {
        constructor() {
            this.websocket = null;
            this.refreshInterval = null;
            this.init();
        }
        
        init() {
            this.setupWebSocket();
            this.setupAutoRefresh();
            this.setupEventListeners();
        }
        
        setupWebSocket() {
            this.websocket = new WebSocket('wss://api.yourapp.com/dashboard');
            
            this.websocket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                this.updateDashboardCard(data.cardId, data.content);
            };
        }
        
        setupAutoRefresh() {
            this.refreshInterval = setInterval(() => {
                this.refreshDashboardData();
            }, 30000); // Refresh every 30 seconds
        }
        
        updateDashboardCard(cardId, content) {
            const card = document.querySelector(`[data-card-id="${cardId}"]`);
            if (card) {
                const contentArea = card.querySelector('.hoo-teamsdbcard-content');
                contentArea.innerHTML = content;
                
                // Announce change to screen readers
                this.announceUpdate(cardId);
            }
        }
        
        announceUpdate(cardId) {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = `Dashboard card ${cardId} has been updated`;
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        }
    }
    
    // Initialize dashboard manager
    const dashboardManager = new DashboardManager();
</script>
```

## Deployment Considerations

### Teams App Manifest
```json
{
    "staticTabs": [
        {
            "entityId": "team-dashboard",
            "name": "Dashboard",
            "contentUrl": "https://yourapp.com/teams-dashboard",
            "websiteUrl": "https://yourapp.com",
            "scopes": ["team"]
        }
    ],
    "permissions": [
        "identity",
        "messageTeamMembers"
    ]
}
```

### Content Delivery
- **CDN Integration**: Serve dashboard assets from CDN
- **Caching Strategy**: Appropriate cache headers for Teams content
- **Compression**: Gzip/Brotli compression for dashboard assets
- **Progressive Enhancement**: Fallbacks for older browsers

## Testing Strategy

### Dashboard Testing
- Cross-browser testing for dashboard layout and functionality
- Responsive testing across different screen sizes
- Performance testing with varying amounts of dashboard data
- Teams integration testing within Teams client

### User Experience Testing
- Usability testing for dashboard navigation and interaction
- Accessibility testing with screen readers and keyboard navigation
- Load testing for dashboard performance under heavy usage
- A/B testing for different dashboard layouts and configurations

## SCSS Import

