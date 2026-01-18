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

export class AccessibilityTester {
  private browser: Browser | null = null;
  private context: any = null;
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
      'region': { enabled: false }
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
          '--disable-renderer-backgrounding'
        ]
      });
      
      this.context = await this.browser.newContext({
        viewport: { width: 1200, height: 800 },
        ignoreHTTPSErrors: true
      });
      
      console.log('✅ Browser context initialized successfully');
    } catch (error) {
      console.error('❌ Failed to setup browser:', error);
      await this.teardown();
      throw error;
    }
  }

  async teardown(): Promise<void> {
    try {
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
      this.context = null;
      this.browser = null;
    }
  }

  private async ensureBrowserReady(): Promise<void> {
    if (!this.browser || !this.context) {
      console.log('Browser context not ready, reinitializing...');
      await this.setup();
    }
  }

  async testPattern(
    url: string,
    patternName: string,
    config: AccessibilityTestConfig = {}
  ): Promise<AccessibilityTestResult> {
    // Ensure browser is ready before testing
    await this.ensureBrowserReady();
    
    if (!this.browser || !this.context) {
      throw new Error('Browser and context not initialized. Call setup() first.');
    }

    let page: Page | null = null;
    const testConfig = { ...this.defaultConfig, ...config };

    try {
      // Create a new page for this test
      page = await this.context.newPage();
      
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
          console.log(`Navigation failed for ${patternName}, retrying... (${retries} attempts left)`);
          await page.waitForTimeout(1000);
        }
      }

      // Wait for any dynamic content to load
      await page.waitForTimeout(1000);

      // Create axe builder with configuration
      let axeBuilder = new AxeBuilder({ page });
      
      // Focus testing on the pattern content (everything after h1)
      // This excludes PatternLab's UI scaffolding and focuses on the actual pattern
      const patternContentExists = await page.locator('h1').count() > 0;
      if (patternContentExists) {
        // Include everything in the body after the h1
        axeBuilder = axeBuilder.include('body').exclude('h1, script, style');
      }
      
      // Add tags if specified
      if (testConfig.includeTags) {
        axeBuilder = axeBuilder.withTags(testConfig.includeTags);
      }
      
      // Configure specific rules
      if (testConfig.rules) {
        const enabledRules = Object.entries(testConfig.rules)
          .filter(([, config]) => config.enabled)
          .map(([ruleId]) => ruleId);
        
        const disabledRules = Object.entries(testConfig.rules)
          .filter(([, config]) => !config.enabled)
          .map(([ruleId]) => ruleId);
        
        if (enabledRules.length > 0) {
          axeBuilder = axeBuilder.withRules(enabledRules);
        }
        
        if (disabledRules.length > 0) {
          axeBuilder = axeBuilder.disableRules(disabledRules);
        }
      }

      // Run accessibility analysis with timeout protection
      const results = await Promise.race([
        axeBuilder.analyze(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Accessibility analysis timeout')), testConfig.timeout!)
        )
      ]) as AxeResults;

      // Filter results by impact level if specified
      const filteredViolations = testConfig.impact
        ? results.violations.filter(violation => 
            testConfig.impact!.includes(violation.impact as ImpactValue)
          )
        : results.violations;

      // Calculate summary statistics
      const summary = this.calculateSummary(results, filteredViolations);

      return {
        url,
        patternName,
        passed: filteredViolations.length === 0,
        violations: filteredViolations,
        passes: results.passes,
        incomplete: results.incomplete,
        summary,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error(`Error testing pattern ${patternName}:`, error);
      throw error;
    } finally {
      if (page) {
        try {
          await page.close();
        } catch (closeError) {
          console.error(`Error closing page for ${patternName}:`, closeError);
        }
      }
    }
  }

  async testMultiplePatterns(
    patterns: Array<{ url: string; name: string }>,
    config: AccessibilityTestConfig = {}
  ): Promise<AccessibilityTestResult[]> {
    const results: AccessibilityTestResult[] = [];
    const failedPatterns: Array<{ url: string; name: string; error: string }> = [];

    for (const pattern of patterns) {
      let retries = 2;
      let success = false;

      while (!success && retries > 0) {
        try {
          // Ensure browser is ready for each pattern
          await this.ensureBrowserReady();
          
          const result = await this.testPattern(pattern.url, pattern.name, config);
          results.push(result);
          
          // Log progress
          const status = result.passed ? '✅ PASS' : '❌ FAIL';
          console.log(`${status} ${pattern.name} (${result.summary.violationCount} violations)`);
          success = true;
        } catch (error) {
          retries--;
          const errorMessage = error instanceof Error ? error.message : String(error);
          
          if (retries === 0) {
            console.error(`Failed to test ${pattern.name} after retries: ${errorMessage}`);
            failedPatterns.push({ ...pattern, error: errorMessage });
          } else {
            console.log(`Retrying ${pattern.name} (${retries} attempts left): ${errorMessage}`);
            // Brief pause before retry
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      }
    }

    if (failedPatterns.length > 0) {
      console.log(`\n⚠️  ${failedPatterns.length} patterns failed testing:`);
      failedPatterns.forEach(({ name, error }) => {
        console.log(`   - ${name}: ${error}`);
      });
    }

    return results;
  }

  private calculateSummary(
    results: AxeResults,
    filteredViolations: AxeResults['violations']
  ) {
    const violationCounts = filteredViolations.reduce(
      (counts, violation) => {
        const impact = violation.impact as ImpactValue;
        switch (impact) {
          case 'critical':
            counts.criticalCount++;
            break;
          case 'serious':
            counts.seriousCount++;
            break;
          case 'moderate':
            counts.moderateCount++;
            break;
          case 'minor':
            counts.minorCount++;
            break;
        }
        return counts;
      },
      { criticalCount: 0, seriousCount: 0, moderateCount: 0, minorCount: 0 }
    );

    return {
      violationCount: filteredViolations.length,
      ...violationCounts,
      passCount: results.passes.length,
      incompleteCount: results.incomplete.length
    };
  }

  /**
   * Generate a detailed report of accessibility test results
   */
  generateReport(results: AccessibilityTestResult[]): string {
    const totalPatterns = results.length;
    const passedPatterns = results.filter(r => r.passed).length;
    const failedPatterns = totalPatterns - passedPatterns;

    const totalViolations = results.reduce((sum, r) => sum + r.summary.violationCount, 0);
    const criticalViolations = results.reduce((sum, r) => sum + r.summary.criticalCount, 0);
    const seriousViolations = results.reduce((sum, r) => sum + r.summary.seriousCount, 0);

    let report = `
# hTWOo Core Accessibility Test Report

## Summary
- **Total Patterns Tested**: ${totalPatterns}
- **Passed**: ${passedPatterns} ✅
- **Failed**: ${failedPatterns} ❌
- **Success Rate**: ${((passedPatterns / totalPatterns) * 100).toFixed(1)}%

## Violation Summary
- **Total Violations**: ${totalViolations}
- **Critical**: ${criticalViolations}
- **Serious**: ${seriousViolations}
- **Moderate**: ${results.reduce((sum, r) => sum + r.summary.moderateCount, 0)}
- **Minor**: ${results.reduce((sum, r) => sum + r.summary.minorCount, 0)}

## Detailed Results

`;

    // Group results by category
    const failedResults = results.filter(r => !r.passed);
    const passedResults = results.filter(r => r.passed);

    if (failedResults.length > 0) {
      report += `### Failed Patterns (${failedResults.length})\n\n`;
      failedResults.forEach(result => {
        report += `#### ${result.patternName} ❌\n`;
        report += `- **URL**: ${result.url}\n`;
        report += `- **Violations**: ${result.summary.violationCount}\n`;
        
        if (result.violations.length > 0) {
          report += `- **Issues**:\n`;
          result.violations.forEach(violation => {
            report += `  - **${violation.impact?.toUpperCase()}**: ${violation.help} (${violation.nodes.length} instances)\n`;
          });
        }
        report += `\n`;
      });
    }

    if (passedResults.length > 0) {
      report += `### Passed Patterns (${passedResults.length})\n\n`;
      passedResults.forEach(result => {
        report += `- ${result.patternName} ✅ (${result.summary.passCount} checks passed)\n`;
      });
    }

    report += `\n---\nGenerated on: ${new Date().toLocaleString()}\n`;

    return report;
  }
}

export const accessibilityTester = new AccessibilityTester();
