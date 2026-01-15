#!/usr/bin/env node

/**
 * Script to integrate accessibility report link into the standard Vitest HTML report
 * This makes the enhanced accessibility report easily discoverable from the main test report
 */

const fs = require('fs').promises;
const path = require('path');

const VITEST_REPORT_PATH = path.resolve(__dirname, '../test-results/accessibility-report.html');
const ENHANCED_REPORT_NAME = 'accessibility-report-enhanced.html';

async function integrateAccessibilityReport() {
  try {
    // Check if files exist
    const vitestReportExists = await fs.access(VITEST_REPORT_PATH).then(() => true).catch(() => false);
    const enhancedReportExists = await fs.access(
      path.resolve(__dirname, `../test-results/${ENHANCED_REPORT_NAME}`)
    ).then(() => true).catch(() => false);

    if (!vitestReportExists) {
      console.log('⚠️  Standard Vitest HTML report not found - skipping integration');
      return;
    }

    if (!enhancedReportExists) {
      console.log('⚠️  Enhanced accessibility report not found - skipping integration');
      return;
    }

    // Read the Vitest HTML file
    let htmlContent = await fs.readFile(VITEST_REPORT_PATH, 'utf-8');

    // Check if our enhancement is already injected
    if (htmlContent.includes('accessibility-enhancement-injected')) {
      console.log('✅ Accessibility report integration already present');
      return;
    }

    // Inject our accessibility report link into the Vitest UI
    const enhancementScript = `
    <script id="accessibility-enhancement-injected">
      // Wait for the Vitest UI to load, then inject our accessibility report link
      function injectAccessibilityReportLink() {
        const header = document.querySelector('[data-testid="header"]') || 
                      document.querySelector('header') || 
                      document.querySelector('.header') ||
                      document.querySelector('nav') ||
                      document.querySelector('#app > div:first-child');
        
        if (header && !document.getElementById('accessibility-report-link')) {
          const linkContainer = document.createElement('div');
          linkContainer.id = 'accessibility-report-link';
          linkContainer.style.cssText = \`
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 9999;
            background: #10b981;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: system-ui, -apple-system, sans-serif;
          \`;
          
          linkContainer.innerHTML = \`
            <a href="./${ENHANCED_REPORT_NAME}" 
               target="_blank" 
               style="color: white; text-decoration: none; display: flex; align-items: center; gap: 6px;">
              🔍 Enhanced A11y Report
            </a>
          \`;
          
          linkContainer.onmouseover = () => {
            linkContainer.style.background = '#059669';
            linkContainer.style.transform = 'translateY(-1px)';
          };
          
          linkContainer.onmouseout = () => {
            linkContainer.style.background = '#10b981';
            linkContainer.style.transform = 'translateY(0)';
          };
          
          document.body.appendChild(linkContainer);
          console.log('✅ Enhanced accessibility report link injected');
        }
      }

      // Try to inject immediately and also watch for DOM changes
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(injectAccessibilityReportLink, 500);
        });
      } else {
        setTimeout(injectAccessibilityReportLink, 500);
      }

      // Also try after a longer delay in case the Vitest UI takes time to load
      setTimeout(injectAccessibilityReportLink, 2000);
      
      // Watch for navigation changes in SPA
      const observer = new MutationObserver(() => {
        setTimeout(injectAccessibilityReportLink, 100);
      });
      
      setTimeout(() => {
        const appElement = document.querySelector('#app');
        if (appElement) {
          observer.observe(appElement, { childList: true, subtree: true });
        }
      }, 1000);
    </script>`;

    // Inject before the closing </body> tag
    htmlContent = htmlContent.replace('</body>', `${enhancementScript}\n</body>`);

    // Write the modified HTML back
    await fs.writeFile(VITEST_REPORT_PATH, htmlContent, 'utf-8');

    console.log('🎨 Enhanced accessibility report link integrated into Vitest HTML report');
    console.log(`   Standard report: ${VITEST_REPORT_PATH}`);
    console.log(`   Enhanced report: test-results/${ENHANCED_REPORT_NAME}`);

  } catch (error) {
    console.error('❌ Error integrating accessibility report:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  integrateAccessibilityReport();
}

module.exports = { integrateAccessibilityReport };
