import { Page } from '@playwright/test';

/**
 * Navigate to a specific pattern in PatternLab
 * @param page Playwright page object
 * @param patternId Pattern ID in format 'atoms-input-input-file'
 */
export async function navigateToPattern(page: Page, patternId: string): Promise<void> {
  // Pattern URLs follow this format: /patterns/atoms-input-input-file/atoms-input-input-file.rendered.html
  await page.goto(`http://localhost:3000/patterns/${patternId}/${patternId}.rendered.html`);
  
  // Wait for pattern to fully load
  await page.waitForSelector('body', { state: 'visible' });
  
  // Log for debugging
  console.log(`Navigated to pattern: ${patternId}`);
}

/**
 * Navigate to the PatternLab index page
 * @param page Playwright page object
 */
export async function navigateToPatternIndex(page: Page): Promise<void> {
  await page.goto('http://localhost:3000');
  await page.waitForSelector('body', { state: 'visible' });
}
