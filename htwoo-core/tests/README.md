# hTWOo Core Accessibility Testing

This directory contains automated accessibility testing for hTWOo Core components using both Vitest and Playwright with axe-core integration.

## Overview

The accessibility testing suite includes two complementary approaches:

1. **Vitest-based Tests**: Fast unit-style testing using JSDOM for development workflow
2. **Playwright-based Tests**: Comprehensive browser-based testing for detailed reporting

Both test suites validate built PatternLab HTML files (not the Handlebars templates) to ensure all UI components meet WCAG 2.1 AA standards.

## Testing Approaches

### Vitest Tests (Development-Focused)
- Fast execution using JSDOM
- Ideal for development workflow and CI
- Pass/fail validation for critical patterns
- Located in `tests/accessibility/`

### Playwright Tests (Reporting-Focused)
- Real browser testing with Chromium
- Comprehensive accessibility reports
- Never fails builds - focuses on detailed reporting
- Located in `tests/playwright/`
- Generates HTML and JSON reports in `../../test-results/`

## Architecture

### Test Structure

```
tests/
├── accessibility/                       # Vitest-based tests
│   ├── comprehensive-validation.test.ts # Complete pattern coverage testing
│   └── quick-validation.test.ts        # Fast validation for critical patterns
├── playwright/                         # Playwright-based tests
│   ├── playwright.config.ts           # Playwright configuration
│   └── a11y-report.spec.ts           # Browser-based accessibility reporting
└── utils/
    ├── test-server.ts                  # Local server for serving built HTML files
    └── accessibility-tester.ts         # Axe-core integration and test utilities
```

### Key Components

1. **Test Server** (`test-server.ts`): Serves the built PatternLab files and provides pattern discovery
2. **Accessibility Tester** (`accessibility-tester.ts`): Integrates with axe-core via JSDOM for fast testing
3. **Playwright Tests** (`playwright/`): Browser-based testing with detailed reporting
4. **Test Suites**: Organized by component type and importance level

## Running Tests

### Prerequisites

1. Build the PatternLab documentation:
   ```bash
   npm run pl:build
   ```

2. Install Playwright browsers (if not already installed):
   ```bash
   npx playwright install
   ```

### Test Commands

#### Vitest Tests (Development)
```bash
# Quick validation of critical patterns (recommended for development)
npm run test:a11y

# Comprehensive testing of all discovered patterns
npm run test:a11y:comprehensive

# Run all accessibility tests (both quick and comprehensive)
npm run test:a11y:all

# Watch mode for development
npm run test:a11y:watch

# Run with Vitest UI
npm run test:a11y:ui
```

#### Playwright Tests (Detailed Reporting)
```bash
# Run comprehensive browser-based accessibility testing
npm run test:a11y:playwright

# Run with browser visible (for debugging)
npm run test:a11y:playwright:headed

# View the generated HTML summary report
npm run view:a11y:playwright

# View the Playwright HTML test report
npm run view:a11y:playwright:html
```

### Nx Commands

```bash
# Quick accessibility tests
nx run htwoo-core-styleguide:test:a11y

# Comprehensive accessibility tests
nx run htwoo-core-styleguide:test:a11y:comprehensive

# All accessibility tests
nx run htwoo-core-styleguide:test:a11y:all

# Watch mode
nx run htwoo-core-styleguide:test:a11y:watch
```

## Test Categories

### 1. Critical Patterns (`quick-validation.test.ts`)
Tests the most important UI components that must be highly accessible:
- Primary buttons
- Text inputs
- Checkboxes
- Select dropdowns
- Main PatternLab index page

**Standards**: WCAG 2.1 AA, no critical or serious violations allowed

### 2. Comprehensive Testing (`comprehensive-validation.test.ts`)

**All Patterns Testing**: Automatically discovers and tests all patterns built by PatternLab. This test:
- Discovers all available patterns in the `public/patterns/` directory
- Tests each pattern for WCAG 2.1 AA compliance
- Provides detailed reporting by category (atoms, molecules, organisms, etc.)
- Currently runs in monitoring mode (reports results but doesn't fail build)
- Tracks accessibility compliance across the entire component library

**Pattern Categories Tested**:
- **Atoms**: Basic UI elements (buttons, inputs, icons, etc.)
- **Molecules**: Simple component combinations 
- **Organisms**: Complex component compositions
- **Templates**: Page-level layouts
- **Pages**: Complete page examples
- **Design Tokens**: Color, typography, and spacing patterns

### 3. Critical Patterns Testing
Extended testing of essential UI components including:
- Button components
- Form inputs
- Navigation elements
- Card components
- Dialog components
- Facepile components

#### Button Components
All button variations tested for:
- Button naming
- Color contrast
- Focus management
- Keyboard navigation

#### Form Components
All form input variations tested for:
- Label association
- Field validation
- Color contrast
- Keyboard accessibility

#### Navigation Components
Menu and navigation patterns tested for:
- Link naming
- Keyboard navigation
- Landmark roles
- Color contrast

#### Main Index Page
PatternLab interface tested for:
- Page structure
- Heading hierarchy
- Landmark roles
- Color contrast

## Test Configuration

### Accessibility Rules

The test suite is configured with the following accessibility standards:

**Enabled Rules:**
- `color-contrast`: Ensures sufficient color contrast ratios
- `button-name`: Validates button accessibility names
- `label`: Ensures form controls have proper labels
- `form-field-multiple-labels`: Prevents multiple labels on form fields
- `link-name`: Validates link accessibility names
- `image-alt`: Ensures images have appropriate alt text
- `keyboard`: Tests keyboard navigation
- `landmark-roles`: Validates proper use of landmark roles
- `heading-order`: Ensures logical heading hierarchy

**Disabled Rules:**
- `page-has-heading-one`: Disabled for component testing
- `region`: Disabled for individual component testing

### Impact Levels

Tests are categorized by impact level:
- **Critical**: Must pass (blocks deployment)
- **Serious**: Should pass (warnings for review)
- **Moderate**: Nice to pass (informational)
- **Minor**: Good to pass (informational)

## Test Results

### Output Files

Test results are saved to `test-results/`:
- `accessibility-results.json`: Raw test data in JSON format
- `accessibility-report.md`: Human-readable markdown report
- `accessibility-report.html`: Interactive HTML report (when using Vitest UI)

### Report Content

The accessibility report includes:
- **Summary**: Total patterns tested, pass/fail counts, success rate
- **Violation Summary**: Breakdown by impact level
- **Detailed Results**: Per-pattern results with specific violations
- **Failed Patterns**: Detailed breakdown of accessibility issues
- **Passed Patterns**: List of patterns that passed all tests

## CI/CD Integration

### GitHub Actions

The `.github/workflows/accessibility.yml` workflow runs accessibility tests on:
- Push to main/develop branches
- Pull requests
- Manual workflow dispatch

**Features:**
- Automatic test execution on code changes
- Test result artifacts uploaded for 30 days
- PR comments with accessibility results
- Workflow summary with test details

### Integration with Build Pipeline

Accessibility tests are integrated with the Nx build pipeline:
- Tests depend on successful build completion
- Can be run as part of the release process
- Results are cached by Nx for performance

## Development Workflow

### For Component Development

1. **During Development:**
   ```bash
   npm run test:a11y:watch
   ```

2. **Before Committing:**
   ```bash
   npm run test:a11y
   ```

3. **Before Release:**
   ```bash
   npm run test:a11y:full
   ```

### For New Components

When adding new components:

1. Ensure the component follows hTWOo accessibility guidelines
2. Add the component to critical patterns if it's a foundational UI element
3. Test the component with screen readers manually
4. Verify the automated tests pass

### Debugging Accessibility Issues

1. **Use Vitest UI** for interactive debugging:
   ```bash
   npm run test:a11y:ui
   ```

2. **Check specific patterns** by modifying test files to focus on problem areas

3. **Use browser dev tools** to manually inspect accessibility issues

4. **Review axe-core documentation** for specific rule violations

## Best Practices

### Component Design
- Always provide semantic HTML structure
- Ensure proper ARIA attributes when needed
- Test with keyboard navigation
- Verify screen reader compatibility
- Maintain sufficient color contrast

### Testing
- Run accessibility tests early and often
- Don't ignore warnings - they often indicate real issues
- Test with actual assistive technologies when possible
- Consider edge cases and different user scenarios

### Documentation
- Document accessibility features in component documentation
- Include keyboard navigation instructions
- Provide examples of proper usage
- Note any accessibility limitations

## Troubleshooting

### Common Issues

1. **Server not starting**: Ensure PatternLab is built (`npm run pl:build`)
2. **Tests timing out**: Increase timeout values in test configuration
3. **Playwright errors**: Reinstall browsers (`npx playwright install`)
4. **Missing patterns**: Check that PatternLab build completed successfully

### Performance Optimization

- Use `quick-validation.test.ts` for development
- Run full tests only before releases
- Leverage Nx caching for faster test execution
- Consider parallel test execution for large test suites

## Contributing

When contributing to accessibility testing:

1. Follow existing test patterns and naming conventions
2. Add tests for new critical components
3. Update documentation when adding new test categories
4. Ensure tests are reliable and not flaky
5. Consider test performance impact

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [Playwright Testing](https://playwright.dev/docs/test-assertions)
- [Vitest Documentation](https://vitest.dev/guide/)
- [hTWOo Design System](https://lab.n8d.studio/htwoo/)
