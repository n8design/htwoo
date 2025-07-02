import { Browser, Page, chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import type { AxeResults, ImpactValue, TagValue } from 'axe-core';

export interface AccessibilityTestConfig {
  includeTags?: TagValue[];
  excludeTags?: TagValue[];
  rules?: Record<string, { enabled: boolean }>;
  impact?: ImpactValue[];
  timeout?: number;
}

export interface AccessibilityTestResult {
  url: string;
  patternName: string;
  passed: boolean;
  violations: AxeResults['violations'];
  passes: AxeResults['passes'];
  incomplete: AxeResults['incomplete'];
  summary: {
    violationCount: number;
    criticalCount: number;
    seriousCount: number;
    moderateCount: number;
    minorCount: number;
    passCount: number;
    incompleteCount: number;
  };
  timestamp: string;
}

export class OptimizedAccessibilityTester {
  private browser: Browser | null = null;
  private context: any = null;
  private pagePool: Page[] = [];
  private maxPages = 5; // Reuse up to 5 pages for better performance
  private currentPageIndex = 0;
  
  private defaultConfig: AccessibilityTestConfig = {
    includeTags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
    impact: ['critical', 'serious', 'moderate', 'minor'],
    timeout: 15000, // Reduced timeout for faster testing
    rules: {
      // Enable important rules
      'color-contrast': { enabled: true },
      'button-name': { enabled: true },
      'label': { enabled: true },
      'image-alt': { enabled: true },
      'link-name': { enabled: true },
      'heading-order': { enabled: true },
      'list-structure': { enabled: true },
      'form-labels': { enabled: true },
      // Disable rules that might be too strict for component testing
      'page-has-heading-one': { enabled: false },
      'region': { enabled: false },
      'landmark-main-is-top-level': { enabled: false },
      'bypass': { enabled: false }
    }
  };

  async setup(): Promise<void> {
    try {
      if (this.browser) {
        await this.teardown();
      }
      
      this.browser = await chromium.launch({
        headless: true,
        args: [
          '--disable-dev-shm-usage', 
          '--no-sandbox',
          '--disable-gpu',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding',
          '--disable-extensions',
          '--disable-plugins',
          '--disable-default-apps',
          '--no-first-run',
          '--disable-sync'
        ]
      });
      
      this.context = await this.browser.newContext({
        viewport: { width: 1200, height: 800 },
        ignoreHTTPSErrors: true,
        reducedMotion: 'reduce', // Speed up animations
        colorScheme: 'light'
      });
      
      // Pre-create page pool for better performance
      await this.initializePagePool();
      
      console.log('✅ Optimized browser context initialized successfully');
    } catch (error) {
      console.error('❌ Failed to setup browser:', error);
      await this.teardown();
      throw error;
    }
  }

  private async initializePagePool(): Promise<void> {
    this.pagePool = [];
    for (let i = 0; i < this.maxPages; i++) {
      try {
        const page = await this.context!.newPage();
        this.pagePool.push(page);
      } catch (error) {
        console.warn(`Failed to create page ${i + 1} in pool:`, error);
        break;
      }
    }
    console.log(`📄 Created page pool with ${this.pagePool.length} pages`);
  }

  private getNextPage(): Page {
    const page = this.pagePool[this.currentPageIndex];
    this.currentPageIndex = (this.currentPageIndex + 1) % this.pagePool.length;
    return page;
  }

  async teardown(): Promise<void> {
    try {
      // Close all pages in pool
      await Promise.all(this.pagePool.map(async (page) => {
        try {
          await page.close();
        } catch (error) {
          console.warn('Error closing page:', error);
        }
      }));
      this.pagePool = [];
      
      if (this.context) {
        await this.context.close();
        this.context = null;
      }
      if (this.browser) {
        await this.browser.close();
        this.browser = null;
      }
    } catch (error) {
      console.error('Error during teardown:', error);
      // Force cleanup
      this.pagePool = [];
      this.context = null;
      this.browser = null;
    }
  }

  async testPattern(
    url: string,
    patternName: string,
    config: AccessibilityTestConfig = {}
  ): Promise<AccessibilityTestResult> {
    if (!this.browser || !this.context || this.pagePool.length === 0) {
      throw new Error('Browser and context not initialized. Call setup() first.');
    }

    const testConfig = { ...this.defaultConfig, ...config };
    const page = this.getNextPage();

    try {
      // Navigate to the pattern page with timeout
      await page.goto(url, { 
        waitUntil: 'domcontentloaded', // Faster than networkidle
        timeout: testConfig.timeout 
      });

      // Create AxeBuilder with optimized configuration
      const axeBuilder = new AxeBuilder({ page })
        .withTags(testConfig.includeTags || [])
        .options({
          runOnly: testConfig.includeTags || ['wcag2a', 'wcag2aa'],
          resultTypes: ['violations', 'passes', 'incomplete'],
          rules: testConfig.rules || {}
        });

      // Run accessibility analysis with timeout protection
      const results = await Promise.race([
        axeBuilder.analyze(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Accessibility test timeout')), testConfig.timeout!)
        )
      ]) as AxeResults;

      // Create summary
      const summary = this.createSummary(results);
      
      // Determine if test passed based on impact levels
      const allowedImpacts = testConfig.impact || ['critical', 'serious', 'moderate', 'minor'];
      const criticalViolations = results.violations.filter(v => 
        v.impact && allowedImpacts.includes(v.impact)
      );
      
      const passed = criticalViolations.length === 0;

      return {
        url,
        patternName,
        passed,
        violations: results.violations,
        passes: results.passes,
        incomplete: results.incomplete,
        summary,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error(`Error testing pattern ${patternName}:`, error);
      
      // Return failed result with error info
      return {
        url,
        patternName,
        passed: false,
        violations: [{
          id: 'test-error',
          impact: 'critical' as ImpactValue,
          tags: [],
          description: `Test failed: ${error}`,
          help: 'Fix the underlying issue causing the test to fail',
          helpUrl: '',
          nodes: []
        }],
        passes: [],
        incomplete: [],
        summary: {
          violationCount: 1,
          criticalCount: 1,
          seriousCount: 0,
          moderateCount: 0,
          minorCount: 0,
          passCount: 0,
          incompleteCount: 0
        },
        timestamp: new Date().toISOString()
      };
    }
  }

  async testMultiplePatterns(
    patterns: Array<{ url: string; name: string }>,
    config: AccessibilityTestConfig = {}
  ): Promise<AccessibilityTestResult[]> {
    const results: AccessibilityTestResult[] = [];
    const failedPatterns: Array<{ name: string, error: string }> = [];
    
    console.log(`\n🚀 Starting optimized testing of ${patterns.length} patterns...`);
    
    // Process patterns in smaller batches for better memory management
    const batchSize = 10;
    for (let i = 0; i < patterns.length; i += batchSize) {
      const batch = patterns.slice(i, i + batchSize);
      console.log(`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(patterns.length / batchSize)} (${batch.length} patterns)`);
      
      // Test patterns in this batch concurrently (but limited concurrency)
      const batchPromises = batch.map(async (pattern) => {
        try {
          const result = await this.testPattern(pattern.url, pattern.name, config);
          return result;
        } catch (error) {
          failedPatterns.push({ name: pattern.name, error: String(error) });
          console.error(`❌ Failed to test ${pattern.name}:`, error);
          return null;
        }
      });
      
      const batchResults = await Promise.allSettled(batchPromises);
      batchResults.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value) {
          results.push(result.value);
        }
      });
      
      // Small delay between batches to prevent resource exhaustion
      if (i + batchSize < patterns.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    if (failedPatterns.length > 0) {
      console.warn(`\n⚠️  ${failedPatterns.length} patterns failed to test due to errors:`);
      failedPatterns.forEach(({ name, error }) => {
        console.warn(`   - ${name}: ${error}`);
      });
    }

    return results;
  }

  private createSummary(results: AxeResults): AccessibilityTestResult['summary'] {
    const violationCounts = results.violations.reduce(
      (acc, violation) => {
        acc.violationCount++;
        switch (violation.impact) {
          case 'critical':
            acc.criticalCount++;
            break;
          case 'serious':
            acc.seriousCount++;
            break;
          case 'moderate':
            acc.moderateCount++;
            break;
          case 'minor':
            acc.minorCount++;
            break;
        }
        return acc;
      },
      {
        violationCount: 0,
        criticalCount: 0,
        seriousCount: 0,
        moderateCount: 0,
        minorCount: 0,
        passCount: results.passes.length,
        incompleteCount: results.incomplete.length
      }
    );

    return violationCounts;
  }

  // Batch testing method for maximum efficiency
  async testPatternsInParallel(
    patterns: Array<{ url: string; name: string }>,
    config: AccessibilityTestConfig = {},
    maxConcurrency: number = 3
  ): Promise<AccessibilityTestResult[]> {
    const results: AccessibilityTestResult[] = [];
    
    // Process patterns with controlled concurrency
    for (let i = 0; i < patterns.length; i += maxConcurrency) {
      const batch = patterns.slice(i, i + maxConcurrency);
      
      const batchPromises = batch.map(pattern => 
        this.testPattern(pattern.url, pattern.name, config)
      );
      
      const batchResults = await Promise.allSettled(batchPromises);
      
      batchResults.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          results.push(result.value);
        } else {
          console.error(`Failed to test ${batch[index].name}:`, result.reason);
        }
      });
    }
    
    return results;
  }
}

// Export singleton instance
export const accessibilityTester = new OptimizedAccessibilityTester();
