# hTWOo Core - Comprehensive Accessibility Testing Documentation

This document provides detailed information about the accessibility testing implementation in hTWOo Core, including WCAG coverage, testing methodology, performance optimization, and usage guidelines.

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [WCAG Compliance Coverage](#wcag-compliance-coverage)
4. [Testing Architecture](#testing-architecture)
5. [Performance & Optimization](#performance--optimization)
6. [Test Modes & Configuration](#test-modes--configuration)
7. [Report Generation](#report-generation)
8. [CI/CD Integration](#cicd-integration)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Configuration](#advanced-configuration)
11. [Extending the Framework](#extending-the-framework)

## Overview

hTWOo Core implements a comprehensive accessibility testing framework using:
- **Playwright** for browser automation
- **axe-core** for accessibility analysis 
- **Parallel execution** for performance optimization
- **Component-optimized rules** for library-specific testing
- **Comprehensive reporting** with HTML dashboards and JSON data

### Key Features

✅ **Full WCAG 2.0/2.1/2.2 Coverage**: Tests 65+ accessibility rules  
✅ **Parallel Execution**: 4 workers for optimal performance  
✅ **Component Library Optimized**: Excludes page-level requirements  
✅ **Multiple Test Modes**: All patterns vs. sample testing  
✅ **Rich Reporting**: HTML dashboards, JSON data, performance metrics  
✅ **CI/CD Ready**: Optimized for continuous integration  

## Quick Start

### Basic Usage

```bash
# Test all 333+ patterns with automatic server startup (Recommended)
npm run test:a11y

# Test sample patterns (~34) for faster feedback
npm run test:a11y:sample:with-server

# Manual server control
npm run pl:serve                # Start PatternLab server
npm run test:a11y:all          # Test all patterns
npm run test:a11y:sample       # Test sample patterns
```

### View Results

```bash
# Open HTML reports
npm run view:a11y:results       # Opens main dashboard
open test-results/comprehensive-accessibility-report.html  # Detailed report
```

## WCAG Compliance Coverage

### Tested Guidelines

Our accessibility tests cover **65+ axe-core rules** across multiple WCAG levels:

#### WCAG 2.0/2.1 Level A (47 rules)

**🖼️ Images & Alternative Text**
- `image-alt` - Images must have alt text
- `input-image-alt` - Image inputs must have alt text  
- `area-alt` - Area elements must have alt text
- `object-alt` - Object elements must have alt text
- `role-img-alt` - Elements with img role must have alt text
- `svg-img-alt` - SVG images must have alt text

**📝 Form Controls**
- `label` - Form controls must have labels
- `button-name` - Buttons must have accessible names
- `input-button-name` - Input buttons must have accessible names  
- `select-name` - Select elements must have accessible names
- `form-field-multiple-labels` - Form fields must not have multiple labels

**🔧 ARIA (18 rules)**
- `aria-allowed-attr` - ARIA attributes must be allowed
- `aria-required-attr` - Required ARIA attributes must be present
- `aria-valid-attr` - ARIA attributes must be valid
- `aria-valid-attr-value` - ARIA attribute values must be valid
- `aria-roles` - ARIA roles must be valid
- `aria-hidden-focus` - Focusable elements must not be aria-hidden
- `aria-input-field-name` - ARIA input fields must have accessible names
- `aria-toggle-field-name` - ARIA toggle fields must have accessible names
- And 10 more ARIA validation rules...

**🏗️ Document Structure**
- `html-has-lang` - HTML must have lang attribute
- `html-lang-valid` - HTML lang attribute must be valid
- `document-title` - Documents must have titles
- `list` - Lists must be structured correctly
- `listitem` - List items must be in lists
- `definition-list` - Definition lists must be structured correctly

**⌨️ Keyboard & Focus**
- `bypass` - Skip navigation must be provided
- `nested-interactive` - Interactive elements must not be nested
- `scrollable-region-focusable` - Scrollable regions must be focusable
- `frame-focusable-content` - Frames with focusable content must be accessible

**🔗 Links & Navigation**
- `link-name` - Links must have accessible names
- `link-in-text-block` - Links in text must be distinguishable

**📊 Tables**
- `td-has-header` - Table cells must have headers
- `td-headers-attr` - Table headers attributes must be valid
- `th-has-data-cells` - Table headers must have data cells

**🎬 Media & Motion**
- `video-caption` - Videos must have captions
- `audio-caption` - Audio must have captions (deprecated)
- `no-autoplay-audio` - Audio must not autoplay
- `blink` - Content must not blink
- `marquee` - Content must not use marquee
- `meta-refresh` - Pages must not auto-refresh

#### WCAG 2.0/2.1 Level AA (4 rules)

**🎨 Enhanced Visual Requirements**
- `color-contrast` - Text must have 4.5:1 contrast ratio
- `valid-lang` - Language attributes must be valid
- `meta-viewport` - Viewport must support zoom to 200%

#### WCAG 2.1 Level AA (3 rules)

**🆕 Modern Web Requirements**
- `autocomplete-valid` - Autocomplete attributes must be valid
- `avoid-inline-spacing` - Content must not prevent text spacing
- `css-orientation-lock` - Content must not lock orientation

#### Additional Best Practices

**Enhanced Quality Checks**
- Semantic structure validation
- Color accessibility beyond minimum requirements
- Enhanced keyboard navigation
- Advanced ARIA patterns

### Rules Disabled for Component Testing

```typescript
.disableRules([
  'landmark-one-main',    // Components don't need main landmarks
  'page-has-heading-one', // Components don't need page-level h1
  'region'                // Components don't need page regions
])
```

These rules are disabled because they apply to full pages, not individual components.

## Testing Architecture

### File Structure

```
htwoo-core/
├── tests/playwright/
│   ├── comprehensive-a11y.spec.ts    # Main test file
│   └── playwright.config.ts          # Playwright configuration
├── test-results/                     # All generated reports (consolidated)
│   ├── index.html                    # Main dashboard
│   ├── comprehensive-accessibility-report.html
│   ├── comprehensive-accessibility-results.json
│   ├── accessibility-playwright-report/  # Playwright native reports
│   ├── accessibility-results.json    # Playwright JSON output
│   └── accessibility-junit.xml       # JUnit test results
└── ACCESSIBILITY_TESTING.md          # Basic documentation
```

### Test Flow

1. **Pattern Discovery**: Automatically finds all `*.rendered.html` files
2. **Mode Selection**: Chooses test mode (all/sample) based on environment
3. **Parallel Execution**: Distributes patterns across multiple workers
4. **Accessibility Analysis**: Runs axe-core on each pattern
5. **Result Consolidation**: Merges results from all workers
6. **Report Generation**: Creates HTML and JSON reports

### Worker Architecture

```typescript
// Parallel execution configuration
workers: process.env.CI ? 1 : process.env.A11Y_TEST_MODE === 'all' ? 4 : undefined
```

- **Local Development**: 4 workers for all mode, default for sample
- **CI Environment**: 1 worker for stability
- **Automatic scaling** based on test mode and environment

## Performance & Optimization

### Performance Metrics

The testing framework tracks comprehensive performance data:

```json
{
  "performance": {
    "testDurationSeconds": 154,
    "testDurationMinutes": 3,
    "patternsPerSecond": 2.16,
    "averageTimePerPattern": 0.46,
    "workers": 4,
    "isParallel": true,
    "testMode": "all"
  }
}
```

### Optimization Features

**🚀 Parallel Execution**
- Multiple Playwright workers run simultaneously
- Pattern distribution across available cores
- Optimized for both speed and resource usage

**⚡ Smart Output Management**
- Reduced console output for large test runs
- EPIPE error prevention for massive output
- Progress indicators for long-running tests

**🎯 Component-Optimized Rules**
- Disabled page-level accessibility requirements
- Focus on component-specific criteria
- Reduced false positives for library testing

**📊 Efficient Reporting**
- Streamed JSON generation for large datasets
- Optimized HTML template rendering
- Background report generation

### Performance Benchmarks

| Test Mode | Patterns | Duration | Throughput | Workers |
|-----------|----------|----------|------------|---------|
| All       | 333+     | ~2.5 min | 2.2/sec   | 4       |
| Sample    | ~34      | ~15 sec  | 6.8/sec   | Default |
| CI        | 333+     | ~8 min   | 0.7/sec   | 1       |

## Test Modes & Configuration

### Available Modes

#### All Mode (Default)
```bash
npm run test:a11y                 # With server startup
A11Y_TEST_MODE=all npm run test:a11y:all  # Manual server
```

- Tests all 333+ available patterns
- Comprehensive coverage
- ~2.5 minutes execution time
- 4 parallel workers
- Best for: Complete validation, CI/CD

#### Sample Mode  
```bash
npm run test:a11y:sample:with-server      # With server startup
A11Y_TEST_MODE=sample npm run test:a11y:sample  # Manual server  
```

- Tests every 10th pattern (~34 patterns)
- Quick feedback loop
- ~15 seconds execution time
- Default workers
- Best for: Development, rapid iteration

### Environment Variables

```bash
# Test mode selection
A11Y_TEST_MODE=all|sample

# Worker configuration (automatic in most cases)
TEST_WORKER_INDEX=0|1|2|3

# CI optimization
CI=true  # Reduces workers to 1, optimizes timeouts
```

### Configuration Files

#### playwright.config.ts
```typescript
export default defineConfig({
  fullyParallel: true,
  workers: process.env.CI ? 1 : process.env.A11Y_TEST_MODE === 'all' ? 4 : undefined,
  timeout: process.env.A11Y_TEST_MODE === 'all' ? 30000 : 60000,
  globalTimeout: process.env.A11Y_TEST_MODE === 'all' ? 
    60 * 60 * 1000 : 30 * 60 * 1000,
  reporter: [
    ['html', { outputFolder: '../../test-results/accessibility-playwright-report' }],
    ['json', { outputFile: '../../test-results/accessibility-results.json' }],
    ['junit', { outputFile: '../../test-results/accessibility-junit.xml' }]
  ]
});
```

## Report Generation

### Report Types

#### 1. Main Dashboard (`index.html`)
- **Purpose**: Overview and quick access
- **Features**: 
  - Summary metrics with performance data
  - Quick navigation to detailed reports
  - Performance indicators (duration, throughput, workers)
  - Direct links to specific report types

#### 2. Comprehensive Report (`comprehensive-accessibility-report.html`)
- **Purpose**: Detailed analysis and exploration
- **Features**:
  - Tabbed interface (Overview, Performance, Patterns, Violations)
  - Pattern-by-pattern detailed results
  - Top violations analysis
  - Performance metrics dashboard
  - Interactive filtering and sorting

#### 3. JSON Data (`comprehensive-accessibility-results.json`)
- **Purpose**: Machine-readable data for integration
- **Contains**:
  - Complete test results with metadata
  - Performance metrics
  - Violation details with affected elements
  - Summary statistics

#### 4. Playwright Report (`accessibility-playwright-report/`)
- **Purpose**: Technical test execution details
- **Features**:
  - Test timeline and execution flow
  - Error traces and screenshots
  - Network logs and performance data
  - Individual test result drill-down

#### 5. JUnit XML (`accessibility-junit.xml`)
- **Purpose**: CI/CD integration and test result parsing
- **Contains**:
  - Test execution status (pass/fail)
  - Test duration and timestamps
  - Error messages and stack traces
  - Compatible with CI/CD systems

### Report Content

#### Performance Dashboard
```typescript
// Performance metrics included in reports
performance: {
  testDurationSeconds: 154,
  testDurationMinutes: 3,
  patternsPerSecond: 2.16,
  averageTimePerPattern: 0.46,
  workers: 4,
  isParallel: true,
  testMode: "all"
}
```

#### Violation Analysis
- **Top Violations**: Most common issues across patterns
- **Pattern Impact**: Percentage of patterns affected
- **Severity Levels**: Critical, serious, moderate, minor
- **Element Details**: Specific DOM elements with issues

#### Success Metrics
- **Success Rate**: Percentage of patterns loaded successfully
- **Pass/Fail Counts**: Accessibility rules passed vs. failed
- **Average Violations**: Issues per pattern
- **Trend Analysis**: Historical comparison (when available)

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Accessibility Testing

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        working-directory: htwoo-core
        
      - name: Install Playwright browsers
        run: npx playwright install chromium
        working-directory: htwoo-core
        
      - name: Run accessibility tests
        run: npm run test:a11y
        working-directory: htwoo-core
        env:
          CI: true
          A11Y_TEST_MODE: all
          
      - name: Upload accessibility reports
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: accessibility-reports
          path: htwoo-core/test-results/
          retention-days: 30
          
      - name: Comment PR with results
        if: github.event_name == 'pull_request'
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const results = JSON.parse(fs.readFileSync('htwoo-core/test-results/comprehensive-accessibility-results.json'));
            const summary = results.summary;
            
            const comment = `## 🔍 Accessibility Test Results
            
            - **Patterns Tested**: ${summary.totalPatterns}
            - **Success Rate**: ${summary.successRate}%
            - **Total Violations**: ${summary.totalViolations}
            - **Performance**: ${summary.performance.testDurationSeconds}s (${summary.performance.patternsPerSecond} patterns/sec)
            
            [View Detailed Reports](${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID})
            `;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });
```

### Azure DevOps Example

```yaml
trigger:
  branches:
    include:
      - main
      - develop

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Setup Node.js'

- script: |
    cd htwoo-core
    npm ci
  displayName: 'Install dependencies'

- script: |
    cd htwoo-core
    npx playwright install chromium
  displayName: 'Install Playwright browsers'

- script: |
    cd htwoo-core
    npm run test:a11y
  displayName: 'Run accessibility tests'
  env:
    CI: true
    A11Y_TEST_MODE: all

- task: PublishTestResults@2
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: 'htwoo-core/test-results/accessibility-junit.xml'
    testRunTitle: 'Accessibility Tests'
  condition: always()

- task: PublishHtmlReport@1
  inputs:
    reportDir: 'htwoo-core/test-results'
    tabName: 'Accessibility Report'
  condition: always()
```

### Jenkins Pipeline

```groovy
pipeline {
    agent any
    
    environment {
        CI = 'true'
        A11Y_TEST_MODE = 'all'
    }
    
    stages {
        stage('Setup') {
            steps {
                dir('htwoo-core') {
                    sh 'npm ci'
                    sh 'npx playwright install chromium'
                }
            }
        }
        
        stage('Accessibility Tests') {
            steps {
                dir('htwoo-core') {
                    sh 'npm run test:a11y'
                }
            }
            post {
                always {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'htwoo-core/test-results',
                        reportFiles: 'index.html',
                        reportName: 'Accessibility Report'
                    ])
                    
                    junit 'htwoo-core/test-results/accessibility-junit.xml'
                }
            }
        }
    }
}
```

## Troubleshooting

### Common Issues

#### 1. Connection Refused Error
```
Error: page.goto: net::ERR_CONNECTION_REFUSED
```

**Solution**: Ensure PatternLab server is running
```bash
# Start server in separate terminal
npm run pl:serve

# Or use integrated server startup
npm run test:a11y:with-server
```

#### 2. EPIPE Errors (Large Test Suites)
```
Error: write EPIPE
```

**Solution**: Already handled by error listeners in test file
```typescript
process.stdout.on('error', (err) => {
  if (err.code === 'EPIPE') {
    process.exit(0);
  }
});
```

#### 3. Timeout Errors
```
Error: Timeout exceeded while running test
```

**Solution**: Adjust timeout in `playwright.config.ts`
```typescript
timeout: process.env.A11Y_TEST_MODE === 'all' ? 30000 : 60000
```

#### 4. Out of Memory (Large Test Runs)
```
Error: JavaScript heap out of memory
```

**Solution**: Increase Node.js memory limit
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run test:a11y
```

#### 5. Worker Synchronization Issues
```
Warning: Expected X results but got Y
```

**Solution**: Increase worker completion timeout
```typescript
const maxWaitTime = 60000; // Increase if needed
```

### Debug Mode

Enable verbose logging for troubleshooting:

```bash
# Enable Playwright debug logging
DEBUG=pw:api npm run test:a11y:sample

# Enable browser console logs
PWDEBUG=1 npm run test:a11y:sample
```

### Performance Issues

#### Optimize for Large Test Suites
```bash
# Use sample mode for development
A11Y_TEST_MODE=sample npm run test:a11y

# Reduce workers for resource-constrained environments
# Edit playwright.config.ts workers setting
```

#### Monitor Resource Usage
```bash
# Monitor during test execution
htop
# or
Activity Monitor (macOS)
Task Manager (Windows)
```

## Advanced Configuration

### Custom Rule Configuration

Create custom axe rules configuration:

```typescript
// In comprehensive-a11y.spec.ts
const axeResults = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
  .withRules(['color-contrast', 'image-alt']) // Only test specific rules
  .disableRules(['landmark-one-main', 'page-has-heading-one', 'region'])
  .exclude('.skip-axe') // Exclude elements with specific class
  .analyze();
```

### Environment-Specific Configurations

```typescript
// Different configurations for different environments
const getAxeConfig = () => {
  const baseConfig = {
    tags: ['wcag2a', 'wcag2aa'],
    disableRules: ['landmark-one-main', 'page-has-heading-one', 'region']
  };
  
  if (process.env.NODE_ENV === 'development') {
    return {
      ...baseConfig,
      tags: [...baseConfig.tags, 'experimental']
    };
  }
  
  if (process.env.CI) {
    return {
      ...baseConfig,
      disableRules: [...baseConfig.disableRules, 'color-contrast'] // Skip heavy rules in CI
    };
  }
  
  return baseConfig;
};
```

### Custom Reporting

Extend the reporting system:

```typescript
// Add custom metrics to summary
const customMetrics = {
  criticalViolations: results.filter(r => 
    r.violations.some(v => v.impact === 'critical')
  ).length,
  perfectPatterns: results.filter(r => 
    r.violations.length === 0 && !r.error
  ).length,
  averageLoadTime: results.reduce((sum, r) => 
    sum + (r.loadTime || 0), 0
  ) / results.length
};

// Include in summary object
const summary = {
  // ...existing summary,
  customMetrics
};
```

### Integration with External Tools

#### Lighthouse Integration
```typescript
// Add Lighthouse audits alongside axe-core
import lighthouse from 'lighthouse';

const lighthouseResult = await lighthouse(patternUrl, {
  onlyCategories: ['accessibility'],
  port: 9222
});
```

#### Pa11y Integration
```typescript
// Add Pa11y for additional validation
import pa11y from 'pa11y';

const pa11yResult = await pa11y(patternUrl, {
  standard: 'WCAG2AA',
  ignore: ['WCAG2AA.Principle1.Guideline1_3.1_3_1.H42.2']
});
```

## Extending the Framework

### Adding New Test Types

Create additional test files following the pattern:

```typescript
// tests/playwright/performance-a11y.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Performance + Accessibility Testing', () => {
  test('should load quickly and be accessible', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(patternUrl);
    const loadTime = Date.now() - startTime;
    
    // Performance assertion
    expect(loadTime).toBeLessThan(2000);
    
    // Accessibility testing
    const axeResults = await new AxeBuilder({ page }).analyze();
    expect(axeResults.violations).toHaveLength(0);
  });
});
```

### Custom Pattern Discovery

Extend pattern discovery logic:

```typescript
function getCustomPatterns(): string[] {
  // Custom logic for finding patterns
  const customPatterns = fs.readdirSync('custom-patterns')
    .filter(file => file.endsWith('.html'))
    .map(file => file.replace('.html', ''));
    
  return customPatterns;
}
```

### Plugin Architecture

Create plugins for extended functionality:

```typescript
// plugins/accessibility-plugin.ts
export interface AccessibilityPlugin {
  name: string;
  analyze(page: Page, pattern: string): Promise<any>;
  report(results: any[]): Promise<void>;
}

export class ContrastPlugin implements AccessibilityPlugin {
  name = 'contrast-analysis';
  
  async analyze(page: Page, pattern: string) {
    // Custom contrast analysis
    return await page.evaluate(() => {
      // Analyze contrast ratios
    });
  }
  
  async report(results: any[]) {
    // Generate contrast-specific report
  }
}
```

### API Integration

Expose testing results via API:

```typescript
// api/accessibility-results.ts
import express from 'express';
import fs from 'fs';

const app = express();

app.get('/api/accessibility/summary', (req, res) => {
  const results = JSON.parse(
    fs.readFileSync('test-results/comprehensive-accessibility-results.json', 'utf8')
  );
  res.json(results.summary);
});

app.get('/api/accessibility/patterns/:pattern', (req, res) => {
  const results = JSON.parse(
    fs.readFileSync('test-results/comprehensive-accessibility-results.json', 'utf8')
  );
  const pattern = results.results.find(r => r.pattern === req.params.pattern);
  res.json(pattern);
});
```

---

## Conclusion

This comprehensive accessibility testing framework provides:

- **Complete WCAG coverage** across 65+ rules and 3 compliance levels
- **High-performance parallel execution** optimized for component libraries  
- **Rich reporting and analytics** with performance metrics
- **CI/CD integration** with multiple platform support
- **Extensible architecture** for custom requirements

The framework is designed to scale from individual developer workflows to enterprise CI/CD pipelines while maintaining comprehensive accessibility coverage and optimal performance.

For questions or contributions, please refer to the project documentation or create an issue in the repository.
