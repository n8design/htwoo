import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for accessibility testing
 * Enhanced with HTML accessibility reporting integration
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: '.', // Look for tests in the same directory as this config file
  testMatch: '*.spec.ts', // Only match files ending with .spec.ts
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Optimize workers for large test suites - limit to prevent resource exhaustion */
  workers: process.env.CI ? 1 : process.env.A11Y_TEST_MODE === 'all' ? 4 : undefined,
  
  /* Reporter configuration optimized for large test suites */
  reporter: [
    ['html', { 
      outputFolder: '../../test-results/accessibility-playwright-report',
      open: 'never' // Don't auto-open browser
    }],
    ['json', { 
      outputFile: '../../test-results/accessibility-results.json' 
    }],
    ['junit', { 
      outputFile: '../../test-results/accessibility-junit.xml' 
    }],
    // Use different reporters based on test mode to prevent EPIPE errors
    process.env.A11Y_TEST_MODE === 'all' ? 
      ['dot'] : // Minimal output for large test runs
      ['line'], // Detailed output for smaller runs
  ],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Video recording */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Disable web security for local testing
        launchOptions: {
          args: ['--disable-web-security', '--disable-features=VizDisplayCompositor']
        }
      },
    },
    // Uncomment to test on additional browsers
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  /* Output directory for test artifacts */
  outputDir: '../../test-results/playwright-artifacts',
  
  /* Timeout settings optimized for large test suites */
  timeout: process.env.A11Y_TEST_MODE === 'all' ? 30000 : 60000, // 30s for large runs, 1min for small
  expect: { timeout: 10000 }, // 10 seconds for assertions
  
  /* Global test timeout adjusted for large test suites */
  globalTimeout: process.env.A11Y_TEST_MODE === 'all' ? 
    60 * 60 * 1000 : // 60 minutes for all patterns
    30 * 60 * 1000,  // 30 minutes for smaller runs
  
  /* Metadata for accessibility testing */
  metadata: {
    testType: 'accessibility',
    framework: 'axe-core',
    htmlReporting: true,
    outputDirectories: {
      main: '../../test-results/',
      playwright: '../../test-results/accessibility-playwright-report',
      json: '../../test-results/accessibility-results.json',
      junit: '../../test-results/accessibility-junit.xml',
      comprehensive: '../../test-results/comprehensive-accessibility-report.html',
      dashboard: '../../test-results/index.html'
    }
  }
});
