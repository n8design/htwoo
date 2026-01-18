import { Reporter } from 'vitest';
import { readFile, writeFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { AccessibilityTestResult } from './accessibility-tester';

export interface AccessibilityHtmlReporterOptions {
  outputFile?: string;
  includeAccessibilityData?: boolean;
}

export class AccessibilityHtmlReporter implements Reporter {
  private options: AccessibilityHtmlReporterOptions;
  private accessibilityResults: AccessibilityTestResult[] = [];

  constructor(options: AccessibilityHtmlReporterOptions = {}) {
    this.options = {
      outputFile: 'test-results/accessibility-report-enhanced.html',
      includeAccessibilityData: true,
      ...options
    };
  }

  // Store accessibility results for integration
  storeAccessibilityResults(results: AccessibilityTestResult[]) {
    this.accessibilityResults = results;
  }

  async onFinished() {
    if (!this.options.includeAccessibilityData || this.accessibilityResults.length === 0) {
      return;
    }

    try {
      await this.generateEnhancedHtmlReport();
    } catch (error) {
      console.error('Failed to generate enhanced HTML report:', error);
    }
  }

  async generateEnhancedHtmlReport() {
    const outputPath = resolve(this.options.outputFile!);
    
    // Check if standard Vitest HTML report exists
    const standardReportPath = resolve('test-results/accessibility-report.html');
    let baseHtml = '';
    
    try {
      baseHtml = await readFile(standardReportPath, 'utf-8');
    } catch {
      // If no standard report, create our own
      baseHtml = this.createBaseHtml();
    }

    // Enhance with accessibility data
    const enhancedHtml = this.injectAccessibilityData(baseHtml);
    
    await writeFile(outputPath, enhancedHtml, 'utf-8');
    console.log(`📊 Enhanced accessibility HTML report generated: ${outputPath}`);
  }

  private createBaseHtml(): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hTWOo Core - Accessibility Test Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .summary { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .metric { display: inline-block; margin-right: 30px; }
        .metric-value { font-size: 2em; font-weight: bold; color: #28a745; }
        .metric-label { font-size: 0.9em; color: #6c757d; }
        .failed { color: #dc3545; }
        .critical { color: #dc3545; }
        .serious { color: #fd7e14; }
        .moderate { color: #ffc107; }
        .minor { color: #17a2b8; }
        .tabs { border-bottom: 1px solid #dee2e6; margin-bottom: 20px; }
        .tab { display: inline-block; padding: 10px 20px; cursor: pointer; border: none; background: none; }
        .tab.active { border-bottom: 2px solid #007bff; color: #007bff; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .pattern-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .pattern-card { border: 1px solid #dee2e6; border-radius: 8px; padding: 15px; }
        .pattern-card.failed { border-color: #dc3545; }
        .pattern-card.passed { border-color: #28a745; }
        .violation { margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px; }
        .category-stats { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px; }
        .category-card { background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 15px; text-align: center; }
        .progress-bar { width: 100%; height: 10px; background: #e9ecef; border-radius: 5px; overflow: hidden; }
        .progress-fill { height: 100%; background: #28a745; transition: width 0.3s; }
    </style>
</head>
<body>
    <div class="container">
        <h1>hTWOo Core - Accessibility Test Report</h1>
        <div id="accessibility-content">
            <!-- Accessibility content will be injected here -->
        </div>
    </div>
    <script>
        function showTab(tabName) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.querySelector(\`[data-tab="\${tabName}"]\`).classList.add('active');
            document.querySelector(\`#\${tabName}\`).classList.add('active');
        }
        
        function filterPatterns(category) {
            const cards = document.querySelectorAll('.pattern-card');
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    </script>
</body>
</html>`;
  }

  private injectAccessibilityData(baseHtml: string): string {
    const results = this.accessibilityResults;
    const passed = results.filter(r => r.passed);
    const failed = results.filter(r => !r.passed);
    
    // Calculate violation counts
    const violationCounts = results.reduce((acc, result) => {
      result.violations.forEach(violation => {
        const impact = violation.impact || 'unknown';
        acc[impact] = (acc[impact] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    // Calculate category breakdown
    const categoryStats = results.reduce((acc, result) => {
      const category = result.patternName.split('-')[0];
      if (!acc[category]) {
        acc[category] = { total: 0, passed: 0, failed: 0 };
      }
      acc[category].total++;
      if (result.passed) {
        acc[category].passed++;
      } else {
        acc[category].failed++;
      }
      return acc;
    }, {} as Record<string, { total: number; passed: number; failed: number }>);

    const accessibilityContent = `
        <!-- Summary Dashboard -->
        <div class="summary">
            <h2>Accessibility Test Summary</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 30px;">
                <div class="metric">
                    <div class="metric-value">${results.length}</div>
                    <div class="metric-label">Total Patterns</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${passed.length}</div>
                    <div class="metric-label">Passed</div>
                </div>
                <div class="metric">
                    <div class="metric-value failed">${failed.length}</div>
                    <div class="metric-label">Failed</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${((passed.length / results.length) * 100).toFixed(1)}%</div>
                    <div class="metric-label">Success Rate</div>
                </div>
                <div class="metric">
                    <div class="metric-value critical">${violationCounts.critical || 0}</div>
                    <div class="metric-label">Critical Issues</div>
                </div>
                <div class="metric">
                    <div class="metric-value serious">${violationCounts.serious || 0}</div>
                    <div class="metric-label">Serious Issues</div>
                </div>
            </div>
        </div>

        <!-- Category Breakdown -->
        <h3>Results by Category</h3>
        <div class="category-stats">
            ${Object.entries(categoryStats).map(([category, stats]) => {
              const successRate = ((stats.passed / stats.total) * 100).toFixed(1);
              return `
                <div class="category-card">
                    <h4>${category}</h4>
                    <div style="font-size: 1.5em; margin: 10px 0;">
                        <span style="color: #28a745;">${stats.passed}</span>
                        <span style="color: #6c757d;">/${stats.total}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${successRate}%;"></div>
                    </div>
                    <div style="margin-top: 5px; font-size: 0.9em; color: #6c757d;">
                        ${successRate}% pass rate
                    </div>
                    <button onclick="filterPatterns('${category}')" style="margin-top: 10px; padding: 5px 10px; border: 1px solid #007bff; background: white; color: #007bff; border-radius: 4px; cursor: pointer;">
                        View ${category} patterns
                    </button>
                </div>
              `;
            }).join('')}
        </div>

        <!-- Filter Controls -->
        <div style="margin-bottom: 20px;">
            <button onclick="filterPatterns('all')" style="margin-right: 10px; padding: 8px 16px; border: 1px solid #007bff; background: #007bff; color: white; border-radius: 4px; cursor: pointer;">
                Show All
            </button>
            <button onclick="filterPatterns('atoms')" style="margin-right: 10px; padding: 8px 16px; border: 1px solid #007bff; background: white; color: #007bff; border-radius: 4px; cursor: pointer;">
                Atoms
            </button>
            <button onclick="filterPatterns('molecules')" style="margin-right: 10px; padding: 8px 16px; border: 1px solid #007bff; background: white; color: #007bff; border-radius: 4px; cursor: pointer;">
                Molecules
            </button>
            <button onclick="filterPatterns('organism')" style="margin-right: 10px; padding: 8px 16px; border: 1px solid #007bff; background: white; color: #007bff; border-radius: 4px; cursor: pointer;">
                Organisms
            </button>
        </div>

        <!-- Tabs -->
        <div class="tabs">
            <button class="tab active" data-tab="overview" onclick="showTab('overview')">Overview</button>
            <button class="tab" data-tab="failed" onclick="showTab('failed')">Failed Patterns (${failed.length})</button>
            <button class="tab" data-tab="passed" onclick="showTab('passed')">Passed Patterns (${passed.length})</button>
            <button class="tab" data-tab="violations" onclick="showTab('violations')">Violation Types</button>
        </div>

        <!-- Tab Contents -->
        <div id="overview" class="tab-content active">
            <h3>Test Overview</h3>
            <p>This report shows the accessibility validation results for ${results.length} patterns tested across the hTWOo Core design system.</p>
            
            <h4>Top Issues to Address:</h4>
            <ul>
                ${Object.entries(this.groupViolationsByType(failed))
                  .sort(([,a], [,b]) => b.patterns.length - a.patterns.length)
                  .slice(0, 5)
                  .map(([type, data]) => `
                    <li><strong>${type}</strong>: ${data.patterns.length} patterns affected</li>
                  `).join('')}
            </ul>
        </div>

        <div id="failed" class="tab-content">
            <h3>Failed Patterns</h3>
            <div class="pattern-grid">
                ${failed.map(result => {
                  const category = result.patternName.split('-')[0];
                  return `
                    <div class="pattern-card failed" data-category="${category}">
                        <h4>${result.patternName}</h4>
                        <p><strong>Violations:</strong> ${result.violations.length}</p>
                        <div style="margin-top: 10px;">
                            ${result.violations.map(violation => `
                                <div class="violation">
                                    <strong class="${violation.impact}">${(violation.impact || 'unknown').toUpperCase()}:</strong>
                                    ${violation.help}
                                    <br><small>Affected elements: ${violation.nodes.length}</small>
                                </div>
                            `).join('')}
                        </div>
                        <a href="${result.url}" target="_blank" style="display: inline-block; margin-top: 10px; color: #007bff; text-decoration: none;">
                            → View Pattern
                        </a>
                    </div>
                  `;
                }).join('')}
            </div>
        </div>

        <div id="passed" class="tab-content">
            <h3>Passed Patterns</h3>
            <div class="pattern-grid">
                ${passed.map(result => {
                  const category = result.patternName.split('-')[0];
                  return `
                    <div class="pattern-card passed" data-category="${category}">
                        <h4>✅ ${result.patternName}</h4>
                        <p style="color: #28a745;">All accessibility checks passed</p>
                        <a href="${result.url}" target="_blank" style="display: inline-block; margin-top: 10px; color: #007bff; text-decoration: none;">
                            → View Pattern
                        </a>
                    </div>
                  `;
                }).join('')}
            </div>
        </div>

        <div id="violations" class="tab-content">
            <h3>Violation Types</h3>
            ${Object.entries(this.groupViolationsByType(failed)).map(([type, data]) => `
                <div style="margin-bottom: 30px; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
                    <h4>${type}</h4>
                    <p><strong>Impact Level:</strong> <span class="${data.impact}">${(data.impact || 'unknown').toUpperCase()}</span></p>
                    <p><strong>Affected Patterns:</strong> ${data.patterns.length}</p>
                    <p><strong>Description:</strong> ${data.description}</p>
                    <details>
                        <summary>Show affected patterns</summary>
                        <ul>
                            ${data.patterns.map(pattern => `<li>${pattern}</li>`).join('')}
                        </ul>
                    </details>
                </div>
            `).join('')}
        </div>
    `;

    // Inject the content into the base HTML
    return baseHtml.replace(
      '<div id="accessibility-content">',
      `<div id="accessibility-content">${accessibilityContent}`
    );
  }

  private groupViolationsByType(failedResults: AccessibilityTestResult[]) {
    const grouped: Record<string, { impact: string; description: string; patterns: string[] }> = {};

    failedResults.forEach(result => {
      result.violations.forEach(violation => {
        const type = violation.help;
        if (!grouped[type]) {
          grouped[type] = {
            impact: violation.impact || 'unknown',
            description: violation.description || violation.help,
            patterns: []
          };
        }
        if (!grouped[type].patterns.includes(result.patternName)) {
          grouped[type].patterns.push(result.patternName);
        }
      });
    });

    return grouped;
  }
}

// Export a helper function to generate HTML reports standalone
export async function generateAccessibilityHtmlReport(
  results: AccessibilityTestResult[], 
  outputPath: string = 'test-results/accessibility-report-enhanced.html'
): Promise<void> {
  const reporter = new AccessibilityHtmlReporter({ outputFile: outputPath });
  reporter.storeAccessibilityResults(results);
  await reporter.generateEnhancedHtmlReport();
}
