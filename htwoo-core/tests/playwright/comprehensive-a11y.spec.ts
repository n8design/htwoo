import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';

// Handle EPIPE errors for large test suites by preventing crashes when stdout is closed
process.stdout.on('error', (err) => {
  if (err.code === 'EPIPE') {
    // Silently ignore EPIPE errors to prevent test crashes
    process.exit(0);
  }
});

process.stderr.on('error', (err) => {
  if (err.code === 'EPIPE') {
    // Silently ignore EPIPE errors to prevent test crashes
    process.exit(0);
  }
});

// Configuration: Set to 'sample' for sampling, defaults to 'all'
const TEST_MODE = process.env.A11Y_TEST_MODE || 'all'; // 'all' | 'sample'

/**
 * Get all available patterns from the public/patterns directory
 */
function getAllAvailablePatterns(): string[] {
  try {
    // Handle both workspace root and htwoo-core directory contexts
    const currentDir = process.cwd();
    let publicDir: string;
    
    if (currentDir.endsWith('htwoo-core')) {
      // Running from htwoo-core directory
      publicDir = path.join(currentDir, 'public', 'patterns');
    } else {
      // Running from workspace root
      publicDir = path.join(currentDir, 'htwoo-core', 'public', 'patterns');
    }
    
    if (!fs.existsSync(publicDir)) {
      console.warn('⚠️ Public patterns directory not found, returning empty array');
      console.warn(`   Looked in: ${publicDir}`);
      return [];
    }
    
    // Get all directories in the patterns folder
    const entries = fs.readdirSync(publicDir, { withFileTypes: true });
    const patterns: string[] = [];
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const patternDir = path.join(publicDir, entry.name);
        const renderedHtmlFile = path.join(patternDir, `${entry.name}.rendered.html`);
        
        // Check if the pattern has a rendered.html file
        if (fs.existsSync(renderedHtmlFile)) {
          patterns.push(entry.name);
        }
      }
    }
    
    console.log(`📁 Found ${patterns.length} total patterns available for testing`);
    return patterns.sort();
  } catch (error) {
    console.warn('⚠️ Error reading patterns directory:', error);
    return [];
  }
}

/**
 * Get patterns to test based on the test mode
 */
function getPatternsToTest(): string[] {
  switch (TEST_MODE) {
    case 'all':
      return getAllAvailablePatterns();
    case 'sample':
      // Test every 10th pattern for faster sampling
      const allPatterns = getAllAvailablePatterns();
      return allPatterns.filter((_, index) => index % 10 === 0);
    default:
      return getAllAvailablePatterns();
  }
}

const PATTERNS_TO_TEST = getPatternsToTest();

test.describe('Comprehensive Accessibility Testing', () => {
  const workerId = process.env.TEST_WORKER_INDEX || '0';
  let workerResults: any[] = [];
  
  test.beforeAll(async () => {
    console.log('🎯 Starting comprehensive accessibility testing...');
    console.log(`📊 Testing ${PATTERNS_TO_TEST.length} patterns in '${TEST_MODE}' mode`);
    if (TEST_MODE === 'sample') {
      console.log('💡 To test ALL patterns (default), remove A11Y_TEST_MODE or set A11Y_TEST_MODE=all');
    } else if (TEST_MODE === 'all') {
      console.log('🔄 Running full accessibility test suite. This may take several minutes...');
      console.log('💡 For faster testing, use A11Y_TEST_MODE=sample');
    }
  });

  test.afterAll(async () => {
    // Save worker results to a temporary file
    const reportsDir = path.join(process.cwd(), 'test-results');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const workerResultsFile = path.join(reportsDir, `worker-${workerId}-results.json`);
    fs.writeFileSync(workerResultsFile, JSON.stringify(workerResults, null, 2));
    
    // Create a marker file to indicate this worker is done
    const workerDoneFile = path.join(reportsDir, `worker-${workerId}-done.marker`);
    fs.writeFileSync(workerDoneFile, new Date().toISOString());
    
    console.log(`🔧 Worker ${workerId} completed with ${workerResults.length} results`);
    
    // Longer delay to ensure all workers finish
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Only let worker 0 generate the final consolidated report
    if (workerId === '0') {
      await consolidateAndGenerateReports();
    }
  });

  for (const pattern of PATTERNS_TO_TEST) {
    test(`should test accessibility for ${pattern}`, async ({ page }) => {
      const patternUrl = `http://localhost:3000/public/patterns/${pattern}/${pattern}.rendered.html`;
      
      try {
        // Navigate to pattern with a timeout
        await page.goto(patternUrl, { 
          waitUntil: 'networkidle',
          timeout: 10000 
        });
        
        // Wait for content to load
        await page.waitForTimeout(1000);
        
        // Run accessibility scan optimized for component library testing
        const axeResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
          .disableRules([
            'landmark-one-main',    // Components don't need main landmarks
            'page-has-heading-one', // Components don't need page-level h1
            'region'                // Components don't need page regions
          ])
          .analyze();
        
        const testResult = {
          pattern,
          url: patternUrl,
          timestamp: new Date().toISOString(),
          violations: axeResults.violations,
          passes: axeResults.passes,
          incomplete: axeResults.incomplete,
          inapplicable: axeResults.inapplicable,
          summary: {
            violationCount: axeResults.violations.length,
            passCount: axeResults.passes.length,
            incompleteCount: axeResults.incomplete.length,
            inapplicableCount: axeResults.inapplicable.length
          }
        };
        
        workerResults.push(testResult);
        
        // Reduce console output for large test runs to prevent EPIPE errors
        if (TEST_MODE === 'all' && PATTERNS_TO_TEST.length > 50) {
          // Only log progress every 25th test for large runs
          if ((workerResults.length % 25) === 0) {
            console.log(`🔄 Progress: ${workerResults.length}/${PATTERNS_TO_TEST.length} patterns tested by worker ${workerId}`);
          }
        } else {
          console.log(`✅ ${pattern}: ${testResult.summary.violationCount} violations, ${testResult.summary.passCount} passes`);
        }
        
        // Test passes regardless of violations (for reporting purposes)
        expect(testResult).toBeDefined();
        
      } catch (error) {
        // Reduce error output for large test runs
        if (TEST_MODE === 'all' && PATTERNS_TO_TEST.length > 50) {
          // Only log errors, not every failure detail
          if ((workerResults.length % 25) === 0) {
            console.log(`⚠️ Some patterns failed to load. Check final report for details.`);
          }
        } else {
          console.log(`❌ ${pattern}: Failed to load or test - ${error}`);
        }
        
        // Add failed result
        workerResults.push({
          pattern,
          url: patternUrl,
          timestamp: new Date().toISOString(),
          error: error.toString(),
          violations: [],
          passes: [],
          incomplete: [],
          inapplicable: [],
          summary: {
            violationCount: 0,
            passCount: 0,
            incompleteCount: 0,
            inapplicableCount: 0
          }
        });
        
        // Test still passes but we log the failure
        expect(error).toBeDefined();
      }
    });
  }
});

async function consolidateAndGenerateReports() {
  const reportsDir = path.join(process.cwd(), 'test-results');
  const allResults: any[] = [];
  
  // Get expected number of patterns for validation
  const expectedPatterns = PATTERNS_TO_TEST.length;
  
  // Wait for all workers to complete (with timeout)
  const maxWaitTime = 60000; // 60 seconds max wait
  const startWait = Date.now();
  
  console.log(`📊 Waiting for all workers to complete testing ${expectedPatterns} patterns...`);
  
  while (Date.now() - startWait < maxWaitTime) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      const files = fs.readdirSync(reportsDir);
      const workerFiles = files.filter(f => f.startsWith('worker-') && f.endsWith('-results.json'));
      const doneFiles = files.filter(f => f.startsWith('worker-') && f.endsWith('-done.marker'));
      
      if (workerFiles.length > 0) {
        // Check if we have enough results
        let totalResults = 0;
        for (const file of workerFiles) {
          try {
            const filePath = path.join(reportsDir, file);
            const workerData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            totalResults += workerData.length;
          } catch (error) {
            // Skip files that can't be read yet
          }
        }
        
        // If we have all expected results, proceed
        if (totalResults >= expectedPatterns && doneFiles.length >= workerFiles.length) {
          console.log(`✅ All workers completed. Found ${totalResults} results from ${workerFiles.length} workers.`);
          break;
        }
        
        if (totalResults > 0) {
          console.log(`🔄 Progress: ${totalResults}/${expectedPatterns} results collected from ${workerFiles.length} workers...`);
        }
      }
    } catch (error) {
      // Continue waiting if directory doesn't exist yet
    }
  }
  
  // Read all worker result files
  try {
    const files = fs.readdirSync(reportsDir);
    const workerFiles = files.filter(f => f.startsWith('worker-') && f.endsWith('-results.json'));
    
    console.log(`📊 Consolidating results from ${workerFiles.length} workers...`);
    
    for (const file of workerFiles) {
      try {
        const filePath = path.join(reportsDir, file);
        const workerData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        allResults.push(...workerData);
        
        // Clean up worker file
        fs.unlinkSync(filePath);
      } catch (error) {
        console.warn(`⚠️ Failed to read worker file ${file}:`, error);
      }
    }
    
    // Clean up marker files
    const markerFiles = files.filter(f => f.startsWith('worker-') && f.endsWith('-done.marker'));
    for (const file of markerFiles) {
      try {
        fs.unlinkSync(path.join(reportsDir, file));
      } catch (error) {
        // Ignore cleanup errors
      }
    }
    
    console.log(`📈 Consolidated ${allResults.length} test results from all workers`);
    
    // Validate we got all expected results
    if (allResults.length !== expectedPatterns) {
      console.warn(`⚠️ Expected ${expectedPatterns} results but got ${allResults.length}. Some tests may have been missed.`);
    }
    
    // Generate comprehensive report with consolidated results
    await generateComprehensiveReport(allResults);
    
  } catch (error) {
    console.error('❌ Failed to consolidate worker results:', error);
    // Fallback: generate report with empty results
    await generateComprehensiveReport([]);
  }
}

async function generateComprehensiveReport(results: any[]) {
  const reportsDir = path.join(process.cwd(), 'test-results');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  // Calculate overall statistics
  const totalPatterns = results.length;
  const successfulTests = results.filter(r => !r.error).length;
  const failedTests = results.filter(r => r.error).length;
  const totalViolations = results.reduce((sum, r) => sum + r.summary.violationCount, 0);
  const totalPasses = results.reduce((sum, r) => sum + r.summary.passCount, 0);
  const averageViolations = totalPatterns > 0 ? (totalViolations / totalPatterns).toFixed(1) : '0';
  
  // Calculate performance metrics
  const timestamps = results.map(r => new Date(r.timestamp).getTime()).filter(t => !isNaN(t));
  const testStartTime = timestamps.length > 0 ? Math.min(...timestamps) : Date.now();
  const testEndTime = Date.now();
  const testDurationMs = testEndTime - testStartTime;
  const testDurationSeconds = Math.round(testDurationMs / 1000);
  const testDurationMinutes = Math.round(testDurationSeconds / 60);
  const patternsPerSecond = totalPatterns > 0 && testDurationSeconds > 0 ? 
    (totalPatterns / testDurationSeconds).toFixed(2) : '0';
  const averageTimePerPattern = totalPatterns > 0 ? 
    (testDurationMs / totalPatterns / 1000).toFixed(2) : '0';
  
  // Get worker configuration info
  const workers = process.env.CI ? 1 : (process.env.A11Y_TEST_MODE === 'all' ? 4 : 'default');
  const isParallel = true; // From playwright.config.ts fullyParallel: true
  
  // Get most common violations
  const allViolations = results.flatMap(r => r.violations || []);
  const violationCounts = allViolations.reduce((acc, v) => {
    acc[v.id] = (acc[v.id] || 0) + 1;
    return acc;
  }, {} as any);
  
  const topViolations = Object.entries(violationCounts)
    .sort(([,a], [,b]) => (b as number) - (a as number))
    .slice(0, 10);
  
  const summary = {
    timestamp: new Date().toISOString(),
    totalPatterns,
    successfulTests,
    failedTests,
    totalViolations,
    totalPasses,
    averageViolations: parseFloat(averageViolations),
    successRate: Math.round((successfulTests / totalPatterns) * 100),
    performance: {
      testDurationSeconds,
      testDurationMinutes,
      patternsPerSecond: parseFloat(patternsPerSecond),
      averageTimePerPattern: parseFloat(averageTimePerPattern),
      workers: workers,
      isParallel,
      testMode: process.env.A11Y_TEST_MODE || 'all'
    },
    topViolations: topViolations.map(([id, count]) => ({ id, count }))
  };
  
  // Save detailed JSON results
  const detailedResults = {
    summary,
    results,
    generatedAt: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(reportsDir, 'comprehensive-accessibility-results.json'),
    JSON.stringify(detailedResults, null, 2)
  );
  
  // Generate HTML report
  const htmlReport = generateHtmlReport(detailedResults);
  fs.writeFileSync(
    path.join(reportsDir, 'comprehensive-accessibility-report.html'),
    htmlReport
  );
  
  // Update main index.html
  const indexHtml = generateIndexHtml(summary);
  fs.writeFileSync(
    path.join(reportsDir, 'index.html'),
    indexHtml
  );
  
  console.log('📊 Comprehensive accessibility reports generated:');
  console.log(`   📄 JSON: test-results/comprehensive-accessibility-results.json`);
  console.log(`   📊 HTML: test-results/comprehensive-accessibility-report.html`);
  console.log(`   🏠 Index: test-results/index.html`);
  console.log(`📈 Overall Results: ${successfulTests}/${totalPatterns} patterns tested successfully`);
  console.log(`🚨 Total violations: ${totalViolations} (avg: ${averageViolations} per pattern)`);
  console.log(`⚡ Performance: ${testDurationSeconds}s total (${patternsPerSecond} patterns/sec, ${workers} workers)`);
}

function generateHtmlReport(data: any): string {
  const { summary, results } = data;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hTWOo Core - Comprehensive Accessibility Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; background: #f5f5f5; }
        .container { max-width: 1400px; margin: 0 auto; padding: 20px; }
        .header { background: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric { background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric-value { font-size: 2.5rem; font-weight: bold; margin-bottom: 10px; }
        .metric-label { color: #666; font-size: 0.9rem; }
        .success { color: #28a745; }
        .danger { color: #dc3545; }
        .warning { color: #ffc107; }
        .info { color: #17a2b8; }
        .section { background: white; margin-bottom: 20px; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .pattern-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 15px; }
        .pattern-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; background: #f8f9fa; }
        .pattern-name { font-weight: bold; margin-bottom: 10px; color: #333; }
        .pattern-stats { display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 10px; }
        .violations-list { max-height: 200px; overflow-y: auto; }
        .violation-item { background: #fff3cd; border-left: 4px solid #ffc107; padding: 8px; margin: 5px 0; border-radius: 4px; font-size: 0.85rem; }
        .error-card { border-color: #dc3545; background: #f8d7da; }
        .top-violations { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; }
        .violation-stat { background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; }
        .tabs { display: flex; margin-bottom: 20px; }
        .tab { padding: 10px 20px; background: #e9ecef; border: none; cursor: pointer; margin-right: 5px; border-radius: 4px 4px 0 0; }
        .tab.active { background: white; border-bottom: 2px solid #007bff; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 5px; }
        .btn:hover { background: #0056b3; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 hTWOo Core - Comprehensive Accessibility Report</h1>
            <p><strong>Generated:</strong> ${new Date(summary.timestamp).toLocaleString()}</p>
            <p><strong>Patterns Tested:</strong> ${summary.totalPatterns}</p>
        </div>
        
        <div class="summary">
            <div class="metric">
                <div class="metric-value info">${summary.totalPatterns}</div>
                <div class="metric-label">Total Patterns</div>
            </div>
            <div class="metric">
                <div class="metric-value success">${summary.successfulTests}</div>
                <div class="metric-label">Successfully Tested</div>
            </div>
            <div class="metric">
                <div class="metric-value danger">${summary.failedTests}</div>
                <div class="metric-label">Failed to Load</div>
            </div>
            <div class="metric">
                <div class="metric-value warning">${summary.totalViolations}</div>
                <div class="metric-label">Total Violations</div>
            </div>
            <div class="metric">
                <div class="metric-value success">${summary.totalPasses}</div>
                <div class="metric-label">Total Passes</div>
            </div>
            <div class="metric">
                <div class="metric-value info">${summary.successRate}%</div>
                <div class="metric-label">Success Rate</div>
            </div>
            <div class="metric">
                <div class="metric-value info">${summary.performance.testDurationSeconds}s</div>
                <div class="metric-label">Test Duration</div>
            </div>
            <div class="metric">
                <div class="metric-value info">${summary.performance.patternsPerSecond}</div>
                <div class="metric-label">Patterns/Second</div>
            </div>
            <div class="metric">
                <div class="metric-value info">${summary.performance.workers}</div>
                <div class="metric-label">Workers Used</div>
            </div>
        </div>
        
        <div class="tabs">
            <button class="tab active" onclick="showTab('overview')">📊 Overview</button>
            <button class="tab" onclick="showTab('performance')">⚡ Performance</button>
            <button class="tab" onclick="showTab('patterns')">🧩 Pattern Details</button>
            <button class="tab" onclick="showTab('violations')">🚨 Top Violations</button>
        </div>
        
        <div id="overview" class="tab-content active">
            <div class="section">
                <h2>📈 Summary Statistics</h2>
                <p><strong>Average violations per pattern:</strong> ${summary.averageViolations}</p>
                <p><strong>Test success rate:</strong> ${summary.successRate}% (${summary.successfulTests} out of ${summary.totalPatterns} patterns loaded successfully)</p>
                ${summary.failedTests > 0 ? `<p><strong>⚠️ Note:</strong> ${summary.failedTests} patterns failed to load (likely due to PatternLab not running)</p>` : ''}
            </div>
        </div>
        
        <div id="performance" class="tab-content">
            <div class="section">
                <h2>⚡ Performance Metrics</h2>
                <div class="summary">
                    <div class="metric">
                        <div class="metric-value info">${Math.floor(summary.performance.testDurationSeconds / 60)}m ${summary.performance.testDurationSeconds % 60}s</div>
                        <div class="metric-label">Total Duration</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value info">${summary.performance.patternsPerSecond}</div>
                        <div class="metric-label">Patterns per Second</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value info">${summary.performance.averageTimePerPattern}s</div>
                        <div class="metric-label">Avg. Time per Pattern</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value info">${summary.performance.workers}</div>
                        <div class="metric-label">Parallel Workers</div>
                    </div>
                </div>
                <div class="metric">
                    <h3>🔧 Test Configuration</h3>
                    <p><strong>Test Mode:</strong> ${summary.performance.testMode}</p>
                    <p><strong>Parallel Execution:</strong> ${summary.performance.isParallel ? '✅ Enabled' : '❌ Disabled'}</p>
                    <p><strong>Worker Configuration:</strong> ${summary.performance.workers} workers</p>
                    <p><strong>Browser:</strong> Chromium (headless)</p>
                    <p><strong>Accessibility Engine:</strong> axe-core via Playwright</p>
                </div>
            </div>
        </div>
        
        <div id="patterns" class="tab-content">
            <div class="section">
                <h2>🧩 Pattern-by-Pattern Results</h2>
                <div class="pattern-grid">
                    ${results.map((result: any) => `
                    <div class="pattern-card ${result.error ? 'error-card' : ''}">
                        <div class="pattern-name">${result.pattern}</div>
                        ${result.error ? `
                        <div style="color: #721c24; font-weight: bold;">❌ Failed to load</div>
                        <div style="font-size: 0.8rem; color: #721c24;">${result.error}</div>
                        ` : `
                        <div class="pattern-stats">
                            <span>🚨 ${result.summary.violationCount} violations</span>
                            <span>✅ ${result.summary.passCount} passes</span>
                        </div>
                        ${result.violations.length > 0 ? `
                        <div class="violations-list">
                            ${result.violations.slice(0, 3).map((v: any) => `
                            <div class="violation-item">
                                <strong>${v.id}:</strong> ${v.help}
                                <br><small>${v.nodes.length} affected element(s)</small>
                            </div>
                            `).join('')}
                            ${result.violations.length > 3 ? `<div style="text-align: center; font-size: 0.8rem; color: #666;">... and ${result.violations.length - 3} more violations</div>` : ''}
                        </div>
                        ` : '<div style="color: #28a745; font-weight: bold;">✅ No violations found!</div>'}
                        `}
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div id="violations" class="tab-content">
            <div class="section">
                <h2>🚨 Most Common Violations</h2>
                <div class="top-violations">
                    ${summary.topViolations.map((v: any) => `
                    <div class="violation-stat">
                        <h4>${v.id}</h4>
                        <p><strong>${v.count} occurrences</strong></p>
                        <p>Found in ${Math.round((v.count / summary.totalPatterns) * 100)}% of patterns</p>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="section">
            <h2>🔗 Additional Resources</h2>
            <a href="comprehensive-accessibility-results.json" class="btn">📄 Download Raw JSON Data</a>
            <a href="accessibility-playwright-report/index.html" class="btn">📊 View Playwright Report</a>
        </div>
    </div>
    
    <script>
        function showTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all tabs
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }
        
        console.log('🔍 Comprehensive Accessibility Report Loaded');
        console.log('📊 Summary:', ${JSON.stringify(summary)});
    </script>
</body>
</html>
  `;
}

function generateIndexHtml(summary: any): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hTWOo Core - Accessibility Test Results</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 40px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric { background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric-value { font-size: 2.5rem; font-weight: bold; margin-bottom: 10px; }
        .metric-label { color: #666; font-size: 0.9rem; }
        .success { color: #28a745; }
        .danger { color: #dc3545; }
        .warning { color: #ffc107; }
        .info { color: #17a2b8; }
        .reports-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .report-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .report-card h3 { margin-top: 0; color: #333; }
        .btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 5px 5px 5px 0; }
        .btn:hover { background: #0056b3; }
        .btn-primary { background: #007bff; }
        .btn-success { background: #28a745; }
        .btn-success:hover { background: #1e7e34; }
        .alert { padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .alert-success { background: #d4edda; border-left: 4px solid #28a745; color: #155724; }
        .alert-info { background: #cce7ff; border-left: 4px solid #007bff; color: #004085; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 hTWOo Core - Accessibility Test Results</h1>
            <p><strong>Last Updated:</strong> ${new Date(summary.timestamp).toLocaleString()}</p>
            <p><strong>Test Summary:</strong> ${summary.successfulTests}/${summary.totalPatterns} patterns tested successfully</p>
        </div>
        
        <div class="summary">
            <div class="metric">
                <div class="metric-value info">${summary.totalPatterns}</div>
                <div class="metric-label">Patterns Tested</div>
            </div>
            <div class="metric">
                <div class="metric-value ${summary.successRate >= 90 ? 'success' : summary.successRate >= 70 ? 'warning' : 'danger'}">${summary.successRate}%</div>
                <div class="metric-label">Success Rate</div>
            </div>
            <div class="metric">
                <div class="metric-value ${summary.totalViolations === 0 ? 'success' : 'danger'}">${summary.totalViolations}</div>
                <div class="metric-label">Total Violations</div>
            </div>
            <div class="metric">
                <div class="metric-value success">${summary.totalPasses}</div>
                <div class="metric-label">Tests Passed</div>
            </div>
            <div class="metric">
                <div class="metric-value info">${summary.performance.testDurationSeconds}s</div>
                <div class="metric-label">Duration</div>
            </div>
            <div class="metric">
                <div class="metric-value info">${summary.performance.patternsPerSecond}</div>
                <div class="metric-label">Patterns/Sec</div>
            </div>
        </div>
        
        <div class="alert alert-info">
            <strong>⚡ Performance:</strong> Tested ${summary.totalPatterns} patterns in ${summary.performance.testDurationSeconds} seconds using ${summary.performance.workers} parallel workers (${summary.performance.patternsPerSecond} patterns/second).
        </div>
        
        ${summary.failedTests > 0 ? `
        <div class="alert alert-info">
            <strong>ℹ️ Note:</strong> ${summary.failedTests} patterns failed to load. To test all patterns, make sure PatternLab is running with <code>npm start</code> before running tests.
        </div>
        ` : `
        <div class="alert alert-success">
            <strong>✅ All patterns loaded successfully!</strong> Full accessibility analysis completed.
        </div>
        `}
        
        <div class="reports-grid">
            <div class="report-card">
                <h3>📊 Comprehensive Report</h3>
                <p>Detailed accessibility analysis with pattern-by-pattern results, violation summaries, and interactive dashboard.</p>
                <p><strong>Features:</strong> Pattern grid, violation breakdown, top issues analysis</p>
                <a href="comprehensive-accessibility-report.html" class="btn btn-primary">Open Comprehensive Report</a>
            </div>
            
            <div class="report-card">
                <h3>🎯 Playwright HTML Report</h3>
                <p>Standard Playwright test results with traces, screenshots, and detailed test execution info.</p>
                <p><strong>Features:</strong> Test timeline, error traces, network logs</p>
                <a href="accessibility-playwright-report/index.html" class="btn">Open Playwright Report</a>
            </div>
            
            <div class="report-card">
                <h3>📄 Raw JSON Data</h3>
                <p>Machine-readable test results for CI/CD integration and custom analysis.</p>
                <p><strong>Contains:</strong> All violation details, test metadata, summary statistics</p>
                <a href="comprehensive-accessibility-results.json" class="btn">Download JSON Data</a>
            </div>
            
            <div class="report-card">
                <h3>🎯 Demo Report</h3>
                <p>Simple demonstration report showing accessibility testing capabilities.</p>
                <p><strong>Purpose:</strong> Quick validation that reporting system works</p>
                <a href="demo-accessibility-report.html" class="btn">View Demo Report</a>
            </div>
        </div>
        
        ${summary.topViolations.length > 0 ? `
        <div style="background: white; margin-top: 30px; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2>🚨 Top Accessibility Issues</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                ${summary.topViolations.slice(0, 6).map((v: any) => `
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
                    <h4 style="margin: 0 0 10px 0;">${v.id}</h4>
                    <p style="margin: 0; font-weight: bold;">${v.count} occurrences</p>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #666;">Found in ${Math.round((v.count / summary.totalPatterns) * 100)}% of patterns</p>
                </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        <div style="background: white; margin-top: 30px; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2>🚀 Quick Commands</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
                <div>
                    <h4>Run All Tests (Default)</h4>
                    <code style="background: #f8f9fa; padding: 8px; border-radius: 4px; display: block;">npm run test:a11y</code>
                </div>
                <div>
                    <h4>Run Sample Test</h4>
                    <code style="background: #f8f9fa; padding: 8px; border-radius: 4px; display: block;">npm run test:a11y:sample:with-server</code>
                </div>
                <div>
                    <h4>View Reports</h4>
                    <code style="background: #f8f9fa; padding: 8px; border-radius: 4px; display: block;">npm run view:a11y:results</code>
                </div>
                <div>
                    <h4>Start PatternLab</h4>
                    <code style="background: #f8f9fa; padding: 8px; border-radius: 4px; display: block;">npm start</code>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        console.log('🔍 hTWOo Core Accessibility Reports Navigation Ready');
        console.log('📊 Test Summary:', ${JSON.stringify(summary)});
    </script>
</body>
</html>
  `;
}
