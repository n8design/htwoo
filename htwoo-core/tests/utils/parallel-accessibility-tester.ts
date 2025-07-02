import { Browser, Page, chromium, BrowserContext } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import type { AxeResults, ImpactValue, TagValue } from 'axe-core';
import os from 'os';

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
  browserInstanceId?: string;
}

export interface PatternTestTask {
  url: string;
  patternName: string;
  config?: AccessibilityTestConfig;
}

interface BrowserInstance {
  id: string;
  browser: Browser;
  context: BrowserContext;
  busy: boolean;
}

export class ParallelAccessibilityTester {
  private browserInstances: BrowserInstance[] = [];
  private maxConcurrency: number;
  private defaultConfig: AccessibilityTestConfig = {
    includeTags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
    impact: ['critical', 'serious', 'moderate', 'minor'],
    timeout: 30000,
    rules: {
      // Enable important rules
      'color-contrast': { enabled: true },
      'focus-order-semantics': { enabled: true },
      'focus-trap': { enabled: true },
      'aria-allowed-attr': { enabled: true },
      'aria-required-attr': { enabled: true },
      'aria-valid-attr-value': { enabled: true },
      'aria-valid-attr': { enabled: true },
      'button-name': { enabled: true },
      'form-field-multiple-labels': { enabled: true },
      'heading-order': { enabled: true },
      'label': { enabled: true },
      'link-name': { enabled: true },
      'list': { enabled: true },
      'listitem': { enabled: true },
      'image-alt': { enabled: true },
      // Disable rules that might be too strict for component testing
      'page-has-heading-one': { enabled: false },
      'region': { enabled: false },
      'landmark-main-is-top-level': { enabled: false },
      'bypass': { enabled: false }
    }
  };

  constructor(maxConcurrency?: number) {
    // Default to 4 browsers or number of CPU cores, whichever is smaller
    this.maxConcurrency = maxConcurrency || Math.min(4, os.cpus().length);
    console.log(`🚀 Parallel tester configured with max ${this.maxConcurrency} concurrent browsers`);
  }

  async setup(): Promise<void> {
    try {
      console.log(`🔧 Setting up ${this.maxConcurrency} browser instances...`);
      
      // Clean up any existing instances
      await this.teardown();
      
      // Create browser instances
      for (let i = 0; i < this.maxConcurrency; i++) {
        const browser = await chromium.launch({
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
            '--disable-default-apps',
            '--disable-sync'
          ]
        });
        
        const context = await browser.newContext({
          viewport: { width: 1200, height: 800 },
          ignoreHTTPSErrors: true
        });
        
        this.browserInstances.push({
          id: `browser-${i + 1}`,
          browser,
          context,
          busy: false
        });
      }
      
      console.log(`✅ ${this.browserInstances.length} browser instances initialized successfully`);
    } catch (error) {
      console.error('❌ Failed to setup browsers:', error);
      await this.teardown();
      throw error;
    }
  }

  async teardown(): Promise<void> {
    console.log('🧹 Cleaning up browser instances...');
    
    for (const instance of this.browserInstances) {
      try {
        if (instance.context) {
          await instance.context.close();
        }
        if (instance.browser) {
          await instance.browser.close();
        }
      } catch (error) {
        console.error(`Error closing ${instance.id}:`, error);
      }
    }
    
    this.browserInstances = [];
    console.log('✅ All browser instances cleaned up');
  }

  private getAvailableBrowser(): BrowserInstance | null {
    return this.browserInstances.find(instance => !instance.busy) || null;
  }

  private async waitForAvailableBrowser(): Promise<BrowserInstance> {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        const available = this.getAvailableBrowser();
        if (available) {
          clearInterval(checkInterval);
          resolve(available);
        }
      }, 50); // Check every 50ms
    });
  }

  async testPattern(
    url: string,
    patternName: string,
    config: AccessibilityTestConfig = {}
  ): Promise<AccessibilityTestResult> {
    const testConfig = { ...this.defaultConfig, ...config };
    
    // Wait for an available browser instance
    const browserInstance = await this.waitForAvailableBrowser();
    browserInstance.busy = true;

    let page: Page | null = null;
    
    try {
      // Create a new page for this test
      page = await browserInstance.context.newPage();
      
      if (!page) {
        throw new Error('Failed to create new page');
      }

      // Navigate to the pattern page with retries
      let navigationSuccess = false;
      let retries = 3;
      
      while (!navigationSuccess && retries > 0) {
        try {
          await page.goto(url, { 
            waitUntil: 'networkidle', 
            timeout: testConfig.timeout 
          });
          navigationSuccess = true;
        } catch (navError) {
          retries--;
          if (retries === 0) {
            throw new Error(`Failed to navigate to ${url} after 3 attempts: ${navError}`);
          }
          console.warn(`Navigation attempt failed for ${patternName}, retrying... (${retries} attempts left)`);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      // Wait for content to load
      await page.waitForLoadState('domcontentloaded');
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay for dynamic content

      // Create AxeBuilder with configuration
      const axeBuilder = new AxeBuilder({ page });
      
      // Apply configuration
      if (testConfig.includeTags) {
        axeBuilder.withTags(testConfig.includeTags);
      }
      if (testConfig.excludeTags) {
        // AxeBuilder doesn't have disableTags, so we'll use exclude method
        axeBuilder.exclude(`[data-axe-exclude]`); // Placeholder for now
      }
      if (testConfig.rules) {
        Object.entries(testConfig.rules).forEach(([ruleId, ruleConfig]) => {
          if (ruleConfig.enabled === false) {
            axeBuilder.disableRules(ruleId);
          }
        });
      }

      // Run accessibility scan
      const results = await axeBuilder.analyze();
      
      // Filter violations by impact if specified
      let filteredViolations = results.violations;
      if (testConfig.impact && testConfig.impact.length > 0) {
        filteredViolations = results.violations.filter(violation => 
          violation.impact && testConfig.impact!.includes(violation.impact)
        );
      }

      // Calculate summary
      const summary = {
        violationCount: filteredViolations.length,
        criticalCount: filteredViolations.filter(v => v.impact === 'critical').length,
        seriousCount: filteredViolations.filter(v => v.impact === 'serious').length,
        moderateCount: filteredViolations.filter(v => v.impact === 'moderate').length,
        minorCount: filteredViolations.filter(v => v.impact === 'minor').length,
        passCount: results.passes.length,
        incompleteCount: results.incomplete.length
      };

      return {
        url,
        patternName,
        passed: filteredViolations.length === 0,
        violations: filteredViolations,
        passes: results.passes,
        incomplete: results.incomplete,
        summary,
        timestamp: new Date().toISOString(),
        browserInstanceId: browserInstance.id
      };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`❌ Error testing ${patternName} on ${browserInstance.id}:`, errorMessage);
      
      return {
        url,
        patternName,
        passed: false,
        violations: [{
          id: 'test-error',
          impact: 'critical' as ImpactValue,
          tags: ['error'],
          description: `Test execution failed: ${errorMessage}`,
          help: 'Fix the underlying test infrastructure issue',
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
        timestamp: new Date().toISOString(),
        browserInstanceId: browserInstance.id
      };
    } finally {
      // Clean up page and mark browser as available
      if (page) {
        try {
          await page.close();
        } catch (error) {
          console.error(`Error closing page on ${browserInstance.id}:`, error);
        }
      }
      browserInstance.busy = false;
    }
  }

  async testPatternsInParallel(tasks: PatternTestTask[]): Promise<AccessibilityTestResult[]> {
    if (this.browserInstances.length === 0) {
      throw new Error('Browser instances not initialized. Call setup() first.');
    }

    console.log(`🧪 Testing ${tasks.length} patterns across ${this.browserInstances.length} browser instances...`);
    const startTime = Date.now();
    
    // Create promises for all test tasks
    const testPromises = tasks.map(task => 
      this.testPattern(task.url, task.patternName, task.config)
    );
    
    // Wait for all tests to complete
    const results = await Promise.all(testPromises);
    
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;
    const avgTimePerPattern = totalTime / tasks.length;
    
    console.log(`✅ Completed ${tasks.length} patterns in ${totalTime.toFixed(2)}s (avg: ${avgTimePerPattern.toFixed(2)}s per pattern)`);
    
    // Log summary by browser instance
    const instanceStats = this.browserInstances.map(instance => {
      const instanceResults = results.filter(r => r.browserInstanceId === instance.id);
      return {
        id: instance.id,
        testsRun: instanceResults.length,
        passed: instanceResults.filter(r => r.passed).length,
        failed: instanceResults.filter(r => !r.passed).length
      };
    });
    
    console.log('📊 Browser instance distribution:');
    instanceStats.forEach(stat => {
      console.log(`   ${stat.id}: ${stat.testsRun} tests (${stat.passed} passed, ${stat.failed} failed)`);
    });
    
    return results;
  }

  getMetrics() {
    return {
      maxConcurrency: this.maxConcurrency,
      activeInstances: this.browserInstances.length,
      busyInstances: this.browserInstances.filter(i => i.busy).length,
      availableInstances: this.browserInstances.filter(i => !i.busy).length
    };
  }
}

// Create a singleton instance
export const parallelAccessibilityTester = new ParallelAccessibilityTester();
