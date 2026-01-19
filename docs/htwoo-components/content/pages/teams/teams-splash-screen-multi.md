---
title: "Teams Splash Screen Multi Page"
description: "The Teams Splash Screen Multi Page provides a complete page-level implementation for displaying multiple Teams-style splash cards simultaneously. This page pattern serves as the top-level container fo"
type: "components"
layout: "single"
patternId: "pages-teams-teams-splash-screen-multi"
category: "pages"
subcategory: "teams"
seoTitle: "Pages - Teams Teams Splash Screen Multi"
seoDescription: "Teams Teams Splash Screen Multi Pages"
weight: 12
hasVariants: false
markup: |
  
---

# Teams Splash Screen Multi Page

The Teams Splash Screen Multi Page provides a complete page-level implementation for displaying multiple Teams-style splash cards simultaneously. This page pattern serves as the top-level container for multi-card splash screen experiences within Microsoft Teams applications, ideal for onboarding flows, feature showcases, and multi-step introduction screens.

## Overview

The Teams Splash Screen Multi Page represents the highest level of abstraction in the atomic design hierarchy for multi-card splash screen implementations. It combines the Teams Splash Screen Multi Template with complete page structure, including document head, body, and all necessary assets for a standalone multi-card splash screen experience.

## Features

### Complete Page Structure
- **Document Foundation**: Full HTML document with proper DOCTYPE and meta tags
- **Asset Integration**: Automatic inclusion of required CSS and JavaScript files
- **SEO Optimization**: Proper meta tags and structured data for search engines
- **Performance Optimization**: Optimized asset loading and rendering strategies

### Multi-Card Experience
- **Horizontal Layout**: Side-by-side card presentation on desktop
- **Responsive Wrapping**: Cards adapt to stacked layout on mobile devices
- **Dynamic Content**: Support for any number of splash cards via data iteration
- **Progressive Disclosure**: Sequential information presentation across cards

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

The Teams Splash Screen Multi Page includes:
1. **Document Head**: Meta tags, title, and asset references
2. **Page Body**: Main page content with Teams branding
3. **Splash Screen Multi Template**: Multi-card splash screen layout
4. **Multiple Teams Splash Cards**: Individual splash card content items
5. **Script Integration**: Required JavaScript for interactivity

## Data Structure

```json
{
    "page": {
        "title": "Welcome - Teams Application Features",
        "description": "Discover the key features of your new Teams application",
        "language": "en",
        "theme": "teams-light"
    },
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
                "description": "Another splash card with different content and features",
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
        },
        {
            "splash-card": {
                "headerImage": "../../images/placeholders/16by10.png",
                "title": "This is the third splash card",
                "description": "The final card in the series showcasing additional capabilities",
                "primary-button": {
                    "button": {
                        "label": "Explore Features"
                    }
                },
                "secondary-button": {
                    "button": {
                        "label": "Skip Tour"
                    }
                }
            }
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
    <meta name="description" content="Multi-feature welcome screen for Teams application">
    <meta name="keywords" content="teams, features, onboarding, welcome, application">
    <meta name="author" content="Your Organization">
    
    <!-- Open Graph for Teams sharing -->
    <meta property="og:title" content="Welcome - Teams Application Features">
    <meta property="og:description" content="Discover all the features of your new Teams experience">
    <meta property="og:image" content="images/splash-multi-preview.jpg">
    <meta property="og:type" content="website">
    
    <!-- Teams specific meta tags -->
    <meta name="teams-app-id" content="your-app-id">
    <meta name="teams-theme" content="default">
    <meta name="teams-page-type" content="splash-multi">
</head>
```

### Multi-Card Theme Integration
```html
<html class="teams-theme teams-light" data-theme="light" data-cards="multiple">
<body class="teams-splash-multi-page">
    <!-- Multiple cards automatically inherit Teams theme variables -->
</body>
</html>
```

### Asset Loading Strategy
```html
<!-- Critical CSS (inline) -->
<style>
    /* Critical multi-splash screen styles for immediate rendering */
    .hoo-splashscr { display: flex; min-height: 100vh; }
    .hoo-splashscr-content { display: flex; flex-wrap: wrap; }
</style>

<!-- Non-critical CSS (deferred) -->
<link rel="preload" href="css/teams-theme.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link rel="preload" href="css/htwoo-core.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- JavaScript (async) -->
<script async src="js/teams-analytics.js"></script>
<script defer src="js/splash-multi-interactions.js"></script>
```

## Responsive Behavior

### Desktop (> 1200px)
- **Layout**: Horizontal flexbox with multiple cards side-by-side
- **Max Width**: 75vw to prevent excessive stretching
- **Card Distribution**: Equal spacing and sizing across available width
- **Scrolling**: Horizontal scroll if cards exceed container width

### Tablet (1024px - 1200px)
- **Layout**: Maintains horizontal arrangement with reduced card sizes
- **Adaptation**: Cards adjust proportionally to available space
- **Spacing**: Optimized gaps between cards for tablet viewing

### Mobile (< 1024px)
- **Layout**: Cards wrap to vertical stacking
- **Justification**: Top-aligned content for better mobile scrolling
- **Card Sizing**: Full-width cards with consistent vertical spacing
- **Navigation**: Vertical scroll through stacked cards

## Use Cases

### Feature Onboarding
- Multi-step application tours
- Feature introduction sequences
- Capability showcases

### Product Demonstrations
- Before/after comparisons
- Multiple option presentations
- Sequential process explanations

### Information Architecture
- Categorized content presentation
- Multi-topic overviews
- Modular information delivery

## Accessibility

### Page-Level Accessibility
- **Skip Links**: Navigation bypass for keyboard users across multiple cards
- **Landmark Roles**: Proper semantic structure with ARIA landmarks
- **Focus Management**: Sequential focus flow through all cards
- **Screen Reader Support**: Complete page structure and card navigation

### Multi-Card Accessibility
- **Card Navigation**: Logical tab sequence through all cards
- **Card Numbering**: Screen reader announcement of card position (e.g., "Card 1 of 3")
- **Content Grouping**: Related cards grouped with appropriate ARIA labels
- **Keyboard Shortcuts**: Arrow key navigation between cards when focused

## Performance Optimization

### Loading Performance
- **Critical CSS**: Inline critical rendering path styles for multi-card layout
- **Asset Preloading**: Strategic preloading of card images and resources
- **Progressive Loading**: Lazy loading for below-the-fold cards
- **Image Optimization**: WebP format with responsive sizing for all card headers

### Runtime Performance
- **Efficient Layout**: CSS Flexbox and Grid for optimal multi-card rendering
- **Intersection Observer**: Lazy loading and animation triggers for card visibility
- **Memory Management**: Efficient handling of multiple card instances
- **Smooth Scrolling**: Hardware-accelerated scrolling for mobile stacked layout

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
- **Data Protection**: Secure handling of user and tenant data across all cards

## Integration Patterns

### Teams SDK Integration
```html
<script src="https://res.cdn.office.net/teams-js/2.0.0/js/MicrosoftTeams.min.js"></script>
<script>
    microsoftTeams.app.initialize().then(() => {
        // Teams context is ready
        microsoftTeams.app.getContext().then((context) => {
            // Personalize all cards based on Teams context
            personalizeAllCards(context);
        });
    });
</script>
```

### Analytics Integration
```html
<script>
    // Teams-compliant analytics for multi-card interactions
    if (window.teams && teams.analytics) {
        // Track overall splash screen view
        teams.analytics.trackEvent('splash_multi_screen_viewed', {
            card_count: document.querySelectorAll('.hoo-splashcard').length,
            user_role: context.user.role,
            tenant_id: context.user.tenant.id
        });
        
        // Track individual card interactions
        document.querySelectorAll('.hoo-splashcard').forEach((card, index) => {
            card.addEventListener('click', () => {
                teams.analytics.trackEvent('splash_card_clicked', {
                    card_index: index,
                    card_title: card.querySelector('.hoo-splashcard-title').textContent
                });
            });
        });
    }
</script>
```

### Multi-Card State Management
```html
<script>
    class MultiSplashManager {
        constructor() {
            this.currentCard = 0;
            this.totalCards = document.querySelectorAll('.hoo-splashcard').length;
            this.initializeNavigation();
        }
        
        initializeNavigation() {
            // Add keyboard navigation between cards
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') this.nextCard();
                if (e.key === 'ArrowLeft') this.previousCard();
            });
        }
        
        nextCard() {
            if (this.currentCard < this.totalCards - 1) {
                this.currentCard++;
                this.focusCard(this.currentCard);
            }
        }
        
        previousCard() {
            if (this.currentCard > 0) {
                this.currentCard--;
                this.focusCard(this.currentCard);
            }
        }
        
        focusCard(index) {
            const cards = document.querySelectorAll('.hoo-splashcard');
            cards[index].focus();
        }
    }
    
    // Initialize multi-card management
    new MultiSplashManager();
</script>
```

## Deployment Considerations

### Teams App Manifest
```json
{
    "staticTabs": [
        {
            "entityId": "splash-screen-multi",
            "name": "Welcome Tour",
            "contentUrl": "https://yourapp.com/teams-splash-screen-multi",
            "websiteUrl": "https://yourapp.com",
            "scopes": ["personal"]
        }
    ]
}
```

### Content Strategy
- **Card Sequencing**: Logical progression of information across cards
- **Content Balance**: Consistent content length and complexity per card
- **Visual Harmony**: Coordinated imagery and color schemes across all cards
- **Call-to-Action Flow**: Strategic placement of primary actions across cards

## Testing Strategy

### Multi-Card Testing
- Cross-browser testing for flexbox layout behavior
- Responsive testing for card wrapping and stacking
- Touch interaction testing on mobile devices
- Keyboard navigation testing across all cards

### Performance Testing
- Load testing with varying numbers of cards
- Image loading performance across multiple cards
- Memory usage testing for card-heavy implementations
- Network throttling impact on multi-card loading

## SCSS Import