#!/usr/bin/env node

/**
 * Comprehensive Accessibility Test Runner
 * Runs all accessibility tests and generates consolidated reports in test-results/
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Comprehensive Accessibility Testing...');
console.log('=====================================================');

// Ensure test-results directory exists
const testResultsDir = path.join(process.cwd(), 'test-results');
if (!fs.existsSync(testResultsDir)) {
  fs.mkdirSync(testResultsDir, { recursive: true });
}

// Clean previous results
console.log('🧹 Cleaning previous test results...');
try {
  const files = fs.readdirSync(testResultsDir);
  files.forEach(file => {
    const filePath = path.join(testResultsDir, file);
    if (fs.statSync(filePath).isFile() && file !== 'index.html') {
      fs.unlinkSync(filePath);
    }
  });
} catch (error) {
  console.log('No previous results to clean');
}

// Check if PatternLab is running
console.log('🔍 Checking PatternLab availability...');
try {
  execSync('curl -s http://localhost:3001 > /dev/null', { stdio: 'ignore' });
  console.log('✅ PatternLab is running on localhost:3001');
} catch (error) {
  console.log('⚠️  PatternLab is not running. Starting it now...');
  console.log('   Run "npm run start" in another terminal if this fails');
}

const testResults = {
  timestamp: new Date().toISOString(),
  totalTests: 0,
  passed: 0,
  failed: 0,
  duration: 0,
  tests: []
};

const startTime = Date.now();

// Run different test suites
const testSuites = [
  {
    name: 'Playwright Batched Accessibility Tests',
    command: 'playwright test a11y-batch.spec.ts --config tests/playwright/playwright.config.ts',
    description: 'Comprehensive pattern-by-pattern accessibility testing'
  },
  {
    name: 'Vitest Quick Accessibility Tests', 
    command: 'vitest run tests/accessibility/quick-validation.test.ts --reporter=json --outputFile=test-results/vitest-quick-results.json',
    description: 'Fast accessibility validation tests'
  },
  {
    name: 'Vitest Optimized Accessibility Tests',
    command: 'vitest run tests/accessibility/optimized-parallel-validation.test.ts --reporter=json --outputFile=test-results/vitest-optimized-results.json --config vitest.parallel.config.ts',
    description: 'Optimized parallel accessibility validation'
  }
];

for (const suite of testSuites) {
  console.log(`\n📊 Running: ${suite.name}`);
  console.log(`   ${suite.description}`);
  console.log(`   Command: ${suite.command}`);
  
  const suiteStartTime = Date.now();
  
  try {
    execSync(suite.command, { 
      stdio: 'inherit',
      cwd: process.cwd(),
      env: { ...process.env, CLEAN_REPORTS: 'false' }
    });
    
    const suiteDuration = Date.now() - suiteStartTime;
    testResults.tests.push({
      name: suite.name,
      status: 'passed',
      duration: suiteDuration,
      description: suite.description
    });
    testResults.passed++;
    console.log(`✅ ${suite.name} completed in ${(suiteDuration / 1000).toFixed(2)}s`);
    
  } catch (error) {
    const suiteDuration = Date.now() - suiteStartTime;
    testResults.tests.push({
      name: suite.name,
      status: 'failed',
      duration: suiteDuration,
      description: suite.description,
      error: error.message
    });
    testResults.failed++;
    console.log(`❌ ${suite.name} failed after ${(suiteDuration / 1000).toFixed(2)}s`);
    console.log(`   Error: ${error.message}`);
  }
  
  testResults.totalTests++;
}

testResults.duration = Date.now() - startTime;

// Save comprehensive test results
fs.writeFileSync(
  path.join(testResultsDir, 'comprehensive-test-results.json'),
  JSON.stringify(testResults, null, 2)
);

// Generate comprehensive HTML report
const htmlReport = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hTWOo Core - Comprehensive Accessibility Test Results</title>
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
        .test-suite { background: white; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .test-header { padding: 20px; border-bottom: 1px solid #eee; }
        .test-content { padding: 20px; }
        .status-badge { padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
        .badge-passed { background: #d4edda; color: #155724; }
        .badge-failed { background: #f8d7da; color: #721c24; }
        .reports-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px; }
        .report-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 5px 5px 5px 0; }
        .btn:hover { background: #0056b3; }
        .btn-success { background: #28a745; }
        .btn-success:hover { background: #1e7e34; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 hTWOo Core - Comprehensive Accessibility Test Results</h1>
            <p><strong>Generated:</strong> ${new Date(testResults.timestamp).toLocaleString()}</p>
            <p><strong>Total Duration:</strong> ${(testResults.duration / 1000 / 60).toFixed(2)} minutes</p>
        </div>
        
        <div class="summary">
            <div class="metric">
                <div class="metric-value info">${testResults.totalTests}</div>
                <div class="metric-label">Test Suites Run</div>
            </div>
            <div class="metric">
                <div class="metric-value success">${testResults.passed}</div>
                <div class="metric-label">Passed</div>
            </div>
            <div class="metric">
                <div class="metric-value danger">${testResults.failed}</div>
                <div class="metric-label">Failed</div>
            </div>
            <div class="metric">
                <div class="metric-value ${testResults.failed === 0 ? 'success' : 'warning'}">${testResults.passed > 0 ? Math.round((testResults.passed / testResults.totalTests) * 100) : 0}%</div>
                <div class="metric-label">Success Rate</div>
            </div>
        </div>
        
        <h2>📊 Test Suite Results</h2>
        ${testResults.tests.map(test => `
        <div class="test-suite">
            <div class="test-header">
                <h3>${test.name} <span class="status-badge badge-${test.status}">${test.status.toUpperCase()}</span></h3>
                <p>${test.description}</p>
                <p><strong>Duration:</strong> ${(test.duration / 1000).toFixed(2)} seconds</p>
                ${test.error ? `<p><strong>Error:</strong> ${test.error}</p>` : ''}
            </div>
        </div>
        `).join('')}
        
        <div class="reports-grid">
            <div class="report-card">
                <h3>📄 Playwright HTML Report</h3>
                <p>Interactive test results with screenshots and traces</p>
                <a href="accessibility-playwright-report/index.html" class="btn">Open Playwright Report</a>
            </div>
            
            <div class="report-card">
                <h3>🎯 Enhanced Axe HTML Report</h3>
                <p>Detailed accessibility violations with remediation guidance</p>
                <a href="accessibility-report-axe.html" class="btn btn-success">Open Axe Report</a>
            </div>
            
            <div class="report-card">
                <h3>📊 Accessibility Summary</h3>
                <p>High-level overview of accessibility test results</p>
                <a href="accessibility-summary.html" class="btn">Open Summary</a>
            </div>
            
            <div class="report-card">
                <h3>📋 Raw JSON Data</h3>
                <p>Machine-readable test results for CI/CD integration</p>
                <a href="comprehensive-test-results.json" class="btn">Download JSON</a>
            </div>
        </div>
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(testResultsDir, 'index.html'), htmlReport);

// Print final summary
console.log('\n🎉 COMPREHENSIVE ACCESSIBILITY TESTING COMPLETE!');
console.log('=====================================================');
console.log(`📊 Total Test Suites: ${testResults.totalTests}`);
console.log(`✅ Passed: ${testResults.passed}`);
console.log(`❌ Failed: ${testResults.failed}`);
console.log(`⏱️  Total Duration: ${(testResults.duration / 1000 / 60).toFixed(2)} minutes`);
console.log(`📈 Success Rate: ${testResults.passed > 0 ? Math.round((testResults.passed / testResults.totalTests) * 100) : 0}%`);
console.log('\n📁 All reports generated in: test-results/');
console.log('🌐 Open test-results/index.html to view comprehensive results');
console.log('=====================================================');

if (testResults.failed > 0) {
  process.exit(1);
}
