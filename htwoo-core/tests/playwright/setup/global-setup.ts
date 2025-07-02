import { FullConfig } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Global setup for accessibility testing
 * Ensures proper directory structure and environment for HTML reporting
 */
async function globalSetup(config: FullConfig) {
  console.log('🔧 Setting up accessibility testing environment...');
  
  // Ensure all required directories exist
  const reportsDir = path.join(process.cwd(), 'test-results');
  const directories = [
    reportsDir,
    path.join(reportsDir, 'accessibility-playwright-report'),
    path.join(reportsDir, 'playwright-artifacts')
  ];
  
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created directory: ${path.relative(process.cwd(), dir)}`);
    }
  });
  
  // Clean up old reports if requested
  if (process.env.CLEAN_REPORTS === 'true') {
    console.log('🧹 Cleaning up old reports...');
    directories.forEach(dir => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          if (fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
          }
        });
      }
    });
  }
  
  // Verify PatternLab is available (for batched tests)
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    console.log('⚠️  Warning: PatternLab public directory not found. Run PatternLab build first for full testing.');
  } else {
    console.log('✅ PatternLab public directory found');
  }
  
  console.log('✅ Accessibility testing environment ready');
}

export default globalSetup;
