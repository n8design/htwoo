import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 900000, // 15 minutes for comprehensive tests
    hookTimeout: 60000,  // 1 minute for setup/teardown
    teardownTimeout: 30000, // 30 seconds for cleanup
    globals: true,
    environment: 'node', // Default environment for non-DOM tests
    include: ['tests/**/*.test.{js,ts}'],
    exclude: ['node_modules', 'public', 'src'],
    reporters: ['default', 'html'],
    outputFile: {
      html: './test-results/accessibility-report.html',
      json: './test-results/accessibility-results.json'
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './test-results/coverage'
    },
    // Allow tests to run sequentially to avoid resource conflicts
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true
      }
    },
    // Setup specific environments for different test types
    environmentMatchGlobs: [
      // Use the JSDOM setup for component tests
      ['tests/unit/components/**', 'jsdom']
    ],
    // Setup files
    setupFiles: ['tests/unit/setup.ts']
  }
});
