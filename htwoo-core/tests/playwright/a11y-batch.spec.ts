import { test, expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';
import { 
  generateAxeHtmlReport, 
  generateIndividualHtmlReports, 
  saveAxeResultsAsJson,
  AxeResultsForHtml 
} from './utils/html-reporter';

interface PatternInfo {
  name: string;
  category: string;
  path: string;
}

interface TestResult {
  pattern: string;
  category: string;
  passed: boolean;
  violations: any[];
  passes?: any[];
  incomplete?: any[];
  inapplicable?: any[];
  error?: string;
  timestamp: Date;
  duration: number;
  url?: string;
}

// Batch processing configuration
const BATCH_SIZE = 10; // Process 10 patterns at a time
const MAX_RETRIES = 3;
const TIMEOUT_PER_PATTERN = 5000; // 5 seconds per pattern

// Helper function to discover patterns from PatternLab
function discoverPatterns(): PatternInfo[] {
  const patterns: PatternInfo[] = [];
  const publicDir = path.join(process.cwd(), 'public', 'patterns');
  
  if (!fs.existsSync(publicDir)) {
    console.log('❌ Public patterns directory not found. Make sure PatternLab is built.');
    return patterns;
  }

  function scanDirectory(dir: string, category: string = '') {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isDirectory()) {
        const newCategory = category ? `${category}-${item.name}` : item.name;
        scanDirectory(path.join(dir, item.name), newCategory);
      } else if (item.name.endsWith('.rendered.html')) {
        const patternName = path.basename(item.name, '.rendered.html');
        patterns.push({
          name: patternName,
          category,
          path: `patterns/${category}/${item.name}`
        });
      }
    }
  }

  scanDirectory(publicDir);
  
  // Filter out patterns without .rendered.html files
  const validPatterns = patterns.filter(pattern => {
    const fullPath = path.join(process.cwd(), 'public', pattern.path);
    return fs.existsSync(fullPath);
  });

  console.log(`🔍 Discovered ${validPatterns.length} patterns for testing`);
  return validPatterns;
}

test.describe('hTWOo Core - Batched Accessibility Testing', () => {
  
  test('should process all patterns in batches for accessibility violations', async ({ page }) => {
    const allPatterns = discoverPatterns();
    expect(allPatterns.length).toBeGreaterThan(0);
    
    const testResults: TestResult[] = [];
    const startTime = Date.now();
    
    // Process patterns in batches
    for (let i = 0; i < allPatterns.length; i += BATCH_SIZE) {
      const batch = allPatterns.slice(i, i + BATCH_SIZE);
      console.log(`\n📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(allPatterns.length / BATCH_SIZE)} (${batch.length} patterns)`);
      
      // Process each pattern in the current batch
      for (const pattern of batch) {
        const patternStartTime = Date.now();
        let result: TestResult = {
          pattern: pattern.name,
          category: pattern.category,
          passed: false,
          violations: [],
          passes: [],
          incomplete: [],
          inapplicable: [],
          timestamp: new Date(),
          duration: 0,
          url: `http://localhost:3001/${pattern.path}`
        };
        
        try {
          console.log(`🔍 Testing: ${pattern.name} (${pattern.category})`);
          
          // Navigate to pattern with timeout
          const patternUrl = `http://localhost:3001/${pattern.path}`;
          await page.goto(patternUrl, { 
            waitUntil: 'networkidle',
            timeout: TIMEOUT_PER_PATTERN 
          });
          
          // Run accessibility scan with AxeBuilder
          const axeResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
            .analyze();
          
          // Capture all axe results for comprehensive reporting
          result.violations = axeResults.violations;
          result.passes = axeResults.passes;
          result.incomplete = axeResults.incomplete;
          result.inapplicable = axeResults.inapplicable;
          result.passed = result.violations.length === 0;
          result.duration = Date.now() - patternStartTime;
          
          // Log results
          if (result.violations.length > 0) {
            const critical = result.violations.filter(v => v.impact === 'critical').length;
            const serious = result.violations.filter(v => v.impact === 'serious').length;
            console.log(`  ❌ ${result.violations.length} violations (${critical} critical, ${serious} serious)`);
          } else {
            console.log(`  ✅ No violations found`);
          }
          
        } catch (error) {
          result.error = error.toString();
          result.duration = Date.now() - patternStartTime;
          console.log(`  ❌ Error testing ${pattern.name}: ${error}`);
        }
        
        testResults.push(result);
        
        // Small delay between patterns to prevent overwhelming the server
        await page.waitForTimeout(100);
      }
      
      // Longer delay between batches to prevent resource exhaustion
      if (i + BATCH_SIZE < allPatterns.length) {
        console.log(`⏸️  Pausing between batches...`);
        await page.waitForTimeout(1000);
      }
    }
    
    const totalTime = Date.now() - startTime;
    
    // Generate comprehensive reports
    await generateReports(testResults, totalTime);
    
    // Log summary
    const passed = testResults.filter(r => r.passed && !r.error).length;
    const failed = testResults.filter(r => !r.passed || r.error).length;
    const totalViolations = testResults.reduce((sum, r) => sum + r.violations.length, 0);
    
    console.log(`\n🎯 BATCHED ACCESSIBILITY TEST SUMMARY`);
    console.log(`============================================================`);
    console.log(`📊 Total Patterns: ${testResults.length}`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`🚨 Total Violations: ${totalViolations}`);
    console.log(`⏱️  Total Duration: ${(totalTime / 1000).toFixed(2)} seconds`);
    console.log(`============================================================`);
    
    // This test succeeds if we processed all patterns (generates reports regardless of violations)
    expect(testResults.length).toBe(allPatterns.length);
    
  }, 900000); // 15 minutes timeout for all batches
});

async function generateReports(results: TestResult[], totalTime: number) {
  const reportsDir = path.join(process.cwd(), 'test-results');
  
  // Ensure directories exist
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  // Generate detailed JSON report
  const detailedReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPatterns: results.length,
      totalTime: totalTime,
      passed: results.filter(r => r.passed && !r.error).length,
      failed: results.filter(r => !r.passed || r.error).length,
      totalViolations: results.reduce((sum, r) => sum + r.violations.length, 0)
    },
    results: results
  };
  
  fs.writeFileSync(
    path.join(reportsDir, 'accessibility-detailed.json'),
    JSON.stringify(detailedReport, null, 2)
  );
  
  // Generate HTML summary report
  const htmlReport = generateHtmlSummary(detailedReport);
  fs.writeFileSync(
    path.join(reportsDir, 'accessibility-summary.html'),
    htmlReport
  );
  
  // Convert results to format needed for axe-html-reporter
  const axeResultsForHtml: AxeResultsForHtml[] = results
    .filter(result => !result.error) // Only include successful tests
    .map(result => ({
      url: result.url || `http://localhost:3001/patterns/${result.category}/${result.pattern}`,
      timestamp: result.timestamp.toISOString(),
      testCase: `${result.category} - ${result.pattern}`,
      violations: result.violations || [],
      passes: result.passes || [],
      incomplete: result.incomplete || [],
      inapplicable: result.inapplicable || []
    }));
  
  try {
    // Save axe results as JSON for later processing
    saveAxeResultsAsJson(axeResultsForHtml, path.join(reportsDir, 'axe-results.json'));
    
    // Generate consolidated HTML report using axe-html-reporter
    const consolidatedHtmlPath = path.join(reportsDir, 'accessibility-report-axe.html');
    generateAxeHtmlReport(axeResultsForHtml, consolidatedHtmlPath, {
      projectKey: 'htwoo-core-batched',
      doNotCreateReportFile: false
    });
    
    console.log(`📊 Enhanced HTML Reports generated:`);
    console.log(`   🎯 Consolidated Axe Report: ${consolidatedHtmlPath}`);
  } catch (error) {
    console.warn(`⚠️  Could not generate enhanced HTML reports: ${error}`);
    // Continue with existing reports even if enhanced HTML generation fails
  }
  
  console.log(`📊 Standard Reports generated:`);
  console.log(`   📄 JSON Report: test-results/accessibility-detailed.json`);
  console.log(`   📊 HTML Summary: test-results/accessibility-summary.html`);
}

function generateHtmlSummary(report: any): string {
  const { summary, results } = report;
  
  const violationsByCategory = results.reduce((acc: any, result: TestResult) => {
    if (!acc[result.category]) {
      acc[result.category] = {
        total: 0,
        passed: 0,
        failed: 0,
        violations: 0
      };
    }
    acc[result.category].total++;
    if (result.passed && !result.error) {
      acc[result.category].passed++;
    } else {
      acc[result.category].failed++;
    }
    acc[result.category].violations += result.violations.length;
    return acc;
  }, {});
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hTWOo Core - Batched Accessibility Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 2rem; }
        .header { border-bottom: 2px solid #0078d4; padding-bottom: 1rem; margin-bottom: 2rem; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
        .metric { background: #f8f9fa; padding: 1rem; border-radius: 4px; text-align: center; }
        .metric-value { font-size: 2rem; font-weight: bold; color: #0078d4; }
        .metric-label { color: #666; font-size: 0.9rem; }
        .categories { margin-bottom: 2rem; }
        .category { background: white; border: 1px solid #ddd; margin-bottom: 1rem; border-radius: 4px; }
        .category-header { background: #f8f9fa; padding: 1rem; font-weight: bold; }
        .category-stats { padding: 1rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .error { color: #d13438; }
        .success { color: #107c10; }
        .warning { color: #ff8c00; }
    </style>
</head>
<body>
    <div class="header">
        <h1>hTWOo Core - Batched Accessibility Report</h1>
        <p>Generated: ${new Date(report.timestamp).toLocaleString()}</p>
    </div>
    
    <div class="summary">
        <div class="metric">
            <div class="metric-value">${summary.totalPatterns}</div>
            <div class="metric-label">Total Patterns</div>
        </div>
        <div class="metric">
            <div class="metric-value success">${summary.passed}</div>
            <div class="metric-label">Passed</div>
        </div>
        <div class="metric">
            <div class="metric-value error">${summary.failed}</div>
            <div class="metric-label">Failed</div>
        </div>
        <div class="metric">
            <div class="metric-value warning">${summary.totalViolations}</div>
            <div class="metric-label">Total Violations</div>
        </div>
        <div class="metric">
            <div class="metric-value">${(summary.totalTime / 1000).toFixed(1)}s</div>
            <div class="metric-label">Duration</div>
        </div>
    </div>
    
    <div class="categories">
        <h2>Results by Category</h2>
        ${Object.entries(violationsByCategory).map(([category, stats]: [string, any]) => `
        <div class="category">
            <div class="category-header">${category}</div>
            <div class="category-stats">
                <div><strong>Total:</strong> ${stats.total}</div>
                <div><strong>Passed:</strong> <span class="success">${stats.passed}</span></div>
                <div><strong>Failed:</strong> <span class="error">${stats.failed}</span></div>
                <div><strong>Violations:</strong> <span class="warning">${stats.violations}</span></div>
            </div>
        </div>
        `).join('')}
    </div>
</body>
</html>
  `;
}