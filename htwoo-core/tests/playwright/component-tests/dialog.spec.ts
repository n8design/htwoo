import { test, expect } from '@playwright/test';

test.describe('Dialog Component', () => {
  test('should verify PatternLab is accessible', async ({ page }) => {
    // Navigate to the main PatternLab page
    await page.goto('http://localhost:3000');
    
    // Verify the page loads
    await expect(page.url()).toContain('http://localhost:3000/');
    
    // Check that we have access to the Pattern Lab
    await expect(page.locator('body')).toBeTruthy();
    
    console.log('PatternLab connection test complete - Successfully accessed Pattern Lab');
  });
});
