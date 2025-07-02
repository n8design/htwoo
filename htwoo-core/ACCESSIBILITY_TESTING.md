# hTWOo Core - Accessibility Testing Workflow

This document describes the streamlined accessibility testing workflow for hTWOo Core.

> 📚 **For comprehensive documentation**, see [ACCESSIBILITY_TESTING_COMPREHENSIVE.md](./ACCESSIBILITY_TESTING_COMPREHENSIVE.md) which includes detailed WCAG coverage, architecture details, CI/CD integration, and advanced configuration.

## Quick Start

**Option 1: Test all patterns with automatic server startup (Recommended)**
```bash
npm run test:a11y
```

**Option 2: Manual server start + tests**
```bash
# Terminal 1: Start Pattern Lab server
npm run pl:serve

# Terminal 2: Run accessibility tests on all patterns
npm run test:a11y:all
```

This will:
- Run accessibility tests on **all 333+ patterns** (comprehensive coverage)
- Generate detailed HTML and JSON reports  
- Create an interactive dashboard in `test-results/`
- Be optimized for large test suites to prevent output buffer issues

## Prerequisites

The accessibility tests require the Pattern Lab server to be running on `http://localhost:3001`. You can either:

1. **Use the integrated scripts** (recommended): `npm run test:a11y:with-server` 
2. **Start the server manually**: `npm run pl:serve` then run `npm run test:a11y`

## Test Modes

The accessibility test suite can run in different modes. **By default, all patterns are tested** for comprehensive coverage:

### All Mode (Default)
Tests all 333+ available patterns (comprehensive coverage):
```bash
npm run test:a11y                     # Starts server + runs all patterns (recommended)
npm run test:a11y:with-server         # Same as above (explicit)
# or if server is already running:
npm run test:a11y:all
```

### Sample Mode
Tests every 10th pattern (~34 patterns for faster sampling):
```bash
npm run test:a11y:sample:with-server  # Starts server + runs tests
# or if server is already running:
npm run test:a11y:sample
```

## Pattern Coverage

The test suite automatically discovers all available patterns in `public/patterns/` by looking for `{pattern}.rendered.html` files. Currently supports:

- **333+ patterns** discovered automatically
- **Dynamic pattern discovery** - no manual maintenance required
- **All pattern types**: atoms, molecules, organisms, templates, pages, design tokens

## View Results

After running tests, open the main report:

```bash
npm run view:a11y
```

This opens `test-results/index.html` which provides:
- Overall accessibility metrics
- Links to detailed reports
- Pattern-by-pattern breakdown
- Top accessibility issues

## Available Scripts

### Main Commands
- `npm run test:a11y` - Run comprehensive accessibility tests
- `npm run view:a11y` - Open main results dashboard
- `npm run test:a11y:demo` - Run simple demo test

## Generated Reports

All reports are saved to `test-results/`:

### Main Reports
- `index.html` - Main dashboard with overview and links
- `comprehensive-accessibility-report.html` - Detailed interactive report
- `comprehensive-accessibility-results.json` - Raw JSON data

### Additional Reports  
- `accessibility-playwright-report/` - Standard Playwright HTML report
- `demo-accessibility-report.html` - Simple demonstration report

## What Gets Tested

The accessibility test suite can test different pattern sets based on the mode:

### All Mode (Default - 333+ patterns)
Tests every available pattern for comprehensive coverage:

**All Pattern Types:**
- **All atoms**: buttons, inputs, icons, images, avatars, typography, colors, etc.
- **All molecules**: forms, menus, cards, media, dialogs, personas, etc.
- **All organisms**: complex cards, dialogs, facepiles, search grids, quick links, etc.
- **All templates**: page layouts, dashboard templates, etc.
- **All pages**: complete page examples
- **All design tokens**: color palettes, elevations, motion, etc.

### Sample Mode (~34 patterns)
Tests every 10th pattern for quick sampling across all categories

## Accessibility Checks

Tests use axe-core optimized for component library testing to check for:
- WCAG 2.0 AA compliance
- WCAG 2.1 AA compliance  
- Best practice violations
- Color contrast issues
- Keyboard navigation
- Screen reader compatibility

### Component Library Optimizations

The following rules are disabled as they don't apply to individual components:
- `landmark-one-main`: Components don't need main landmarks
- `page-has-heading-one`: Components don't need page-level headings
- `region`: Components don't need page-level regions

This ensures tests focus on actual component accessibility issues, not page-level structure requirements.

### Large Test Suite Optimizations

For reliable testing of all 333+ patterns, the following optimizations are applied:

**Output Management:**
- Reduced console output during large test runs to prevent EPIPE errors
- Progress reporting every 25th test instead of per-test logging
- Minimal "dot" reporter for all-pattern runs vs. detailed "line" reporter for smaller runs

**Resource Management:**
- Limited to 4 parallel workers for large test runs (vs. unlimited for small runs)
- Extended global timeout (60 minutes for all patterns vs. 30 minutes for smaller runs)
- Optimized per-test timeout (30 seconds for large runs vs. 60 seconds for small runs)

**Error Handling:**
- EPIPE error handling to prevent crashes when stdout is closed
- Graceful failure handling for patterns that don't load
- Comprehensive error reporting in final results

These optimizations ensure reliable testing of large component libraries without resource exhaustion or output buffer issues.

## Understanding Results

### Success Metrics
- **Success Rate**: Percentage of patterns that loaded successfully
- **Total Violations**: Number of accessibility issues found
- **Average Violations**: Violations per pattern
- **Test Coverage**: Patterns tested vs. total patterns

### Common Issues
The reports identify the most frequent violations relevant to components:
- Button naming issues (`button-name`)
- Image alt text (`image-alt`)
- Label associations (`label`)
- Color contrast (`color-contrast`)
- Keyboard focus management (`focus-order-semantics`)
- Form controls (`autocomplete-valid`, `duplicate-id-aria`)

Note: Page-level issues like missing main landmarks or h1 headings are excluded as they don't apply to individual components.

## CI/CD Integration

The JSON reports can be integrated into CI/CD pipelines:

```bash
# Run tests and check exit code
npm run test:a11y

# Parse JSON results
cat test-results/comprehensive-accessibility-results.json | jq '.summary'
```

## Troubleshooting

### PatternLab Not Running
- Tests work without PatternLab - all 333+ patterns are available as static files
- PatternLab is not required for accessibility testing
- The test suite automatically discovers all available `.rendered.html` files

### No Reports Generated
- Check that test completed successfully
- Verify `test-results/` directory exists
- Run demo test first: `npm run test:a11y:demo`

### Performance Issues
- Tests run in parallel by default
- Reduce pattern list in `comprehensive-a11y.spec.ts` if needed
- Use `--workers=1` flag for serial execution

## Customization

### Testing Different Patterns
The test automatically discovers all patterns in the `public/patterns/` directory. You can use:

- **All mode** (default): Tests all discovered patterns
- **Sample mode**: Tests every 10th pattern for quick sampling

Use `npm run test:a11y` (default) or `npm run test:a11y:all` for comprehensive testing.

### Changing Accessibility Rules
Modify the axe configuration in the test file. For example, to add more disabled rules:

```typescript
const axeResults = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
  .disableRules([
    'landmark-one-main',    // Components don't need main landmarks
    'page-has-heading-one', // Components don't need page-level h1
    'region',               // Components don't need page regions
    'your-custom-rule'      // Add more rules to disable
  ])
  .exclude(['#skip-this-element'])
  .analyze();
```

## File Structure

After cleanup, the accessibility testing uses these files:

```
htwoo-core/
├── tests/
│   └── playwright/
│       ├── comprehensive-a11y.spec.ts    # Main test suite
│       ├── demo-a11y.spec.ts            # Demo test
│       └── playwright.config.ts         # Playwright configuration
├── test-results/                        # All generated reports
└── ACCESSIBILITY_TESTING.md            # This documentation
```

## Support

For issues with accessibility testing:
1. Check this README
2. Review generated reports in `test-results/`
3. Run demo test to verify setup: `npm run test:a11y:demo`
4. Check PatternLab status if needed: `npm start`
