import { test, expect } from '@playwright/test';

test('Basic connection test', async ({ page }) => {
  // Navigate to the Pattern Lab homepage
  await page.goto('http://localhost:3000');
  
  // Ensure the page loads successfully
  await expect(page).toHaveTitle(/Pattern Lab/);
  
  console.log('Successfully connected to Pattern Lab server');
});
