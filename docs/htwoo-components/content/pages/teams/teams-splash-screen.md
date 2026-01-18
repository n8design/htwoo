---
title: "Teams Splash Screen Page"
description: "The Teams Splash Screen Page provides a complete page-level implementation for Teams-style splash screens, incorporating the full document structure, metadata, and styling needed for production deploy"
type: "components"
layout: "single"
patternId: "pages-teams-teams-splash-screen"
category: "pages"
subcategory: "teams"
seoTitle: "Pages - Teams Teams Splash Screen"
seoDescription: "Teams Teams Splash Screen Pages"
weight: 11
hasVariants: false
markup: |
  &lt;div class=&quot;hoo-splashscr&quot;&gt;
      &lt;div class=&quot;hoo-splashscr-content&quot;&gt;
          &lt;article class=&quot;hoo-splashcard&quot;&gt;
              &lt;header class=&quot;hoo-splashcard-header&quot; role=&quot;presentation&quot;&gt;
                  &lt;img src=&quot;/htwoo-core/images/card-images/htwoo-gm-001.svg&quot; class=&quot;hoo-splashcard-img&quot;&gt;
              &lt;/header&gt;
              &lt;h1 class=&quot;hoo-splashcard-title&quot;&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/h1&gt;
              &lt;p class=&quot;hoo-splashcard-desc&quot;&gt;This shows the base setup of a teams splash card setup and I&amp;#x27;am out of futher text here&lt;/p&gt;
              &lt;footer class=&quot;hoo-splashcard-footer&quot;&gt;
              &lt;/footer&gt;
          &lt;/article&gt;
      &lt;/div&gt;
  &lt;/div&gt;
---

# Teams Splash Screen Page

The Teams Splash Screen Page provides a complete page-level implementation for Teams-style splash screens, incorporating the full document structure, metadata, and styling needed for production deployment. This page pattern serves as the top-level container for splash screen experiences within Microsoft Teams applications.

## Overview

The Teams Splash Screen Page represents the highest level of abstraction in the atomic design hierarchy for splash screen implementations. It combines the Teams Splash Screen Template with complete page structure, including document head, body, and all necessary assets for a standalone splash screen experience.

## Features

### Complete Page Structure
- **Document Foundation**: Full HTML document with proper DOCTYPE and meta tags
- **Asset Integration**: Automatic inclusion of required CSS and JavaScript files
- **SEO Optimization**: Proper meta tags and structured data for search engines
- **Performance Optimization**: Optimized asset loading and rendering strategies

### Teams Integration
- **Brand Consistency**: Full adherence to Microsoft Teams design language
- **Accessibility Compliance**: WCAG 2.1 AA compliance throughout the page
- **Responsive Foundation**: Mobile-first responsive design principles
- **Theme Support**: Automatic theme detection and application

### Production Ready
- **Cross-Browser Compatibility**: Tested across all major browsers
- **Performance Metrics**: Optimized for Core Web Vitals
- **Security Headers**: Appropriate security headers and CSP policies
- **Error Handling**: Graceful degradation and error boundary patterns

## Structure

The Teams Splash Screen Page includes:
1. **Document Head**: Meta tags, title, and asset references
2. **Page Body**: Main page content with Teams branding
3. **Splash Screen Template**: Centered splash screen layout
4. **Teams Splash Card**: Individual splash card content
5. **Script Integration**: Required JavaScript for interactivity

## Data Structure

```json
{
    "page": {
        "title": "Welcome - Teams Application",
        "description": "Welcome to your new Teams application experience",
        "language": "en",
        "theme": "teams-light"
    },
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

## Page-Level Features

### SEO and Meta Tags
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Welcome screen for Teams application">
    <meta name="keywords" content="teams, welcome, onboarding, application">
    <meta name="author" content="Your Organization">
    
    <!-- Open Graph for Teams sharing -->
    <meta property="og:title" content="Welcome - Teams Application">
    <meta property="og:description" content="Get started with your new Teams experience">
    <meta property="og:image" content="images/splash-preview.jpg">
    <meta property="og:type" content="website">
    
    <!-- Teams specific meta tags -->
    <meta name="teams-app-id" content="your-app-id">
    <meta name="teams-theme" content="default">
</head>
```

### Theme Integration
```html
<html class="teams-theme teams-light" data-theme="light">
<body class="teams-splash-page">
    <!-- Page content automatically inherits Teams theme variables -->
</body>
</html>
```

### Asset Loading Strategy
```html
<!-- Critical CSS (inline) -->
<style>
    /* Critical splash screen styles for immediate rendering */
    .hoo-splashscr { display: flex; min-height: 100vh; }
</style>

<!-- Non-critical CSS (deferred) -->
<link rel="preload" href="css/teams-theme.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link rel="preload" href="css/htwoo-core.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- JavaScript (async) -->
<script async src="js/teams-analytics.js"></script>
<script defer src="js/splash-interactions.js"></script>
```

## Use Cases

### Application Welcome
- First-time user onboarding
- Feature introduction sequences
- Terms of service acceptance

### Status Communication
- Maintenance notifications
- Update announcements
- System status messages

### Promotional Content
- New feature announcements
- Event promotions
- Survey requests

## Accessibility

### Page-Level Accessibility
- **Skip Links**: Navigation bypass for keyboard users
- **Landmark Roles**: Proper semantic structure with ARIA landmarks
- **Focus Management**: Initial focus placement and restoration
- **Screen Reader Support**: Complete page structure and navigation

### Content Accessibility
- **Alt Text**: Descriptive alternative text for all images
- **Color Contrast**: WCAG AA compliant color combinations
- **Font Scaling**: Support for browser zoom up to 200%
- **Reduced Motion**: Respect for prefers-reduced-motion preferences

## Performance Optimization

### Loading Performance
- **Critical CSS**: Inline critical rendering path styles
- **Asset Preloading**: Strategic preloading of important resources
- **Image Optimization**: WebP format with fallbacks
- **Font Display**: Optimized web font loading strategy

### Runtime Performance
- **Minimal JavaScript**: Only essential scripts for splash functionality
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Memory Management**: Cleanup of event listeners and resources
- **Bundle Splitting**: Separate chunks for Teams SDK and application code

## Security Considerations

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    style-src 'self' 'unsafe-inline';
    script-src 'self' *.teams.microsoft.com;
    img-src 'self' data: https:;
    connect-src 'self' *.teams.microsoft.com;
">
```

### Teams Security
- **Token Validation**: Proper Teams authentication token handling
- **Origin Verification**: Validation of Teams context and origin
- **Data Protection**: Secure handling of user and tenant data

## Integration Patterns

### Teams SDK Integration
```html
<script src="https://res.cdn.office.net/teams-js/2.0.0/js/MicrosoftTeams.min.js"></script>
<script>
    microsoftTeams.app.initialize().then(() => {
        // Teams context is ready
        microsoftTeams.app.getContext().then((context) => {
            // Use Teams context for personalization
            updateSplashContent(context);
        });
    });
</script>
```

### Analytics Integration
```html
<script>
    // Teams-compliant analytics
    if (window.teams && teams.analytics) {
        teams.analytics.trackEvent('splash_screen_viewed', {
            user_role: context.user.role,
            tenant_id: context.user.tenant.id
        });
    }
</script>
```

### Error Boundary
```html
<script>
    window.addEventListener('error', (event) => {
        // Log error to Teams telemetry
        if (window.teams && teams.telemetry) {
            teams.telemetry.logError(event.error);
        }
        
        // Show graceful fallback
        showErrorFallback();
    });
</script>
```

## Deployment Considerations

### Teams App Manifest
```json
{
    "staticTabs": [
        {
            "entityId": "splash-screen",
            "name": "Welcome",
            "contentUrl": "https://yourapp.com/teams-splash-screen",
            "websiteUrl": "https://yourapp.com",
            "scopes": ["personal"]
        }
    ]
}
```

### Content Delivery
- **CDN Integration**: Serve static assets from CDN
- **Caching Strategy**: Appropriate cache headers for Teams content
- **Compression**: Gzip/Brotli compression for text assets
- **Region Optimization**: Geographic content distribution

## Testing Strategy

### Cross-Browser Testing
- Teams desktop client (Electron-based)
- Teams web client (various browsers)
- Mobile Teams applications
- Accessibility testing tools

### Performance Testing
- Lighthouse audits for Core Web Vitals
- Teams-specific performance metrics
- Network throttling scenarios
- Device-specific testing

## SCSS Import