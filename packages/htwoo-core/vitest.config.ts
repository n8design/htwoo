// filepath: /Volumes/Code/n8design/projects/htwoo/packages/htwoo-core/vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    setupFiles: './test/setup.ts',
    include: ['test/**/*.{test,spec}.{js,ts,tsx}'],
  },
});
