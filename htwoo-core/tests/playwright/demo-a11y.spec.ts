import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Demo Accessibility Test', () => {
  test('should demonstrate HTML accessibility reporting', async ({ page }) => {
    console.log('🎯 Running demo accessibility test...');
    
    // Create a simple test page in memory
    const testHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Demo Page</title>
      </head>
      <body>
        <h1>Accessibility Test Demo</h1>
        <button>Click me</button>
        <img src="test.jpg" />
        <div role="button">Fake button</div>
        <input type="text" />
      </body>
      </html>
    `;
    
    // Set the page content
    await page.setContent(testHtml);
    
    // Run accessibility scan optimized for component library testing
    const axeResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
      .disableRules([
        'landmark-one-main',    // Components don't need main landmarks
        'page-has-heading-one', // Components don't need page-level h1
        'region'                // Components don't need page regions
      ])
      .analyze();
    
    // Generate reports
    const reportsDir = path.join(process.cwd(), 'test-results');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    // Save results
    const testResults = {
      timestamp: new Date().toISOString(),
      testCase: 'Demo Accessibility Test',
      url: 'data:text/html',
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
    
    // Save JSON report
    fs.writeFileSync(
      path.join(reportsDir, 'demo-accessibility-results.json'),
      JSON.stringify(testResults, null, 2)
    );
    
    // Generate HTML report
    const htmlReport = generateDemoHtmlReport(testResults);
    fs.writeFileSync(
      path.join(reportsDir, 'demo-accessibility-report.html'),
      htmlReport
    );
    
    console.log(`📊 Demo reports generated:`);
    console.log(`   📄 JSON: test-results/demo-accessibility-results.json`);
    console.log(`   📊 HTML: test-results/demo-accessibility-report.html`);
    
    // Test should pass regardless of violations (demo purposes)
    expect(testResults).toBeDefined();
  });
});

function generateDemoHtmlReport(results: any): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Accessibility Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 40px; background: #f5f5f5; }
        .container { max-width: 1000px; margin: 0 auto; }
        .header { background: white; padding: 30px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px; }
        .metric { background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric-value { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }
        .violation { color: #dc3545; }
        .pass { color: #28a745; }
        .incomplete { color: #ffc107; }
        .inapplicable { color: #6c757d; }
        .section { background: white; margin-bottom: 20px; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .violation-item { border-left: 4px solid #dc3545; padding: 15px; margin: 10px 0; background: #f8f9fa; }
        .violation-help { margin-top: 10px; font-size: 0.9rem; color: #666; }
        .element { background: #e9ecef; padding: 8px; border-radius: 4px; font-family: monospace; margin: 5px 0; }
        .btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 5px; }
        .btn:hover { background: #0056b3; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Demo Accessibility Report</h1>
            <p><strong>Generated:</strong> ${new Date(results.timestamp).toLocaleString()}</p>
            <p><strong>Test Case:</strong> ${results.testCase}</p>
        </div>
        
        <div class="summary">
            <div class="metric">
                <div class="metric-value violation">${results.summary.violationCount}</div>
                <div>Violations</div>
            </div>
            <div class="metric">
                <div class="metric-value pass">${results.summary.passCount}</div>
                <div>Passes</div>
            </div>
            <div class="metric">
                <div class="metric-value incomplete">${results.summary.incompleteCount}</div>
                <div>Incomplete</div>
            </div>
            <div class="metric">
                <div class="metric-value inapplicable">${results.summary.inapplicableCount}</div>
                <div>Inapplicable</div>
            </div>
        </div>
        
        ${results.violations.length > 0 ? `
        <div class="section">
            <h2>🚨 Violations Found</h2>
            ${results.violations.map((violation: any) => `
            <div class="violation-item">
                <h3>${violation.id}: ${violation.help}</h3>
                <p><strong>Impact:</strong> ${violation.impact}</p>
                <p><strong>Description:</strong> ${violation.description}</p>
                <div class="violation-help">
                    <strong>Help:</strong> ${violation.helpUrl ? `<a href="${violation.helpUrl}" target="_blank">Learn more</a>` : 'No additional help available'}
                </div>
                <div style="margin-top: 10px;">
                    <strong>Affected Elements (${violation.nodes.length}):</strong>
                    ${violation.nodes.slice(0, 3).map((node: any) => `
                    <div class="element">${node.html}</div>
                    `).join('')}
                    ${violation.nodes.length > 3 ? `<p>... and ${violation.nodes.length - 3} more elements</p>` : ''}
                </div>
            </div>
            `).join('')}
        </div>
        ` : '<div class="section"><h2>✅ No violations found!</h2></div>'}
        
        <div class="section">
            <h2>📊 Additional Information</h2>
            <p><strong>Tests Passed:</strong> ${results.summary.passCount}</p>
            <p><strong>Tests Incomplete:</strong> ${results.summary.incompleteCount}</p>
            <p><strong>Tests Inapplicable:</strong> ${results.summary.inapplicableCount}</p>
            <a href="demo-accessibility-results.json" class="btn">Download Raw JSON Data</a>
        </div>
    </div>
</body>
</html>
  `;
}
