import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 900000, // 15 minutes for comprehensive tests
    hookTimeout: 60000,  // 1 minute for setup/teardown
    teardownTimeout: 30000, // 30 seconds for cleanup
    globals: true,
    environment: 'node',
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
    }
  }
});
