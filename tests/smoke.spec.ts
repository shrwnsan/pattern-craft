import { test, expect } from '@playwright/test';

test.describe('CI Smoke Tests', () => {
  test('homepage loads without errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);  // Wait for hydration

    // Check page loaded
    await expect(page).toHaveTitle(/Pattern Craft/);

    // Check main content exists (using body as fallback)
    const body = await page.locator('body').first();
    await expect(body).toBeVisible();

    // No console errors should exist
    expect(consoleErrors).toHaveLength(0);
  });
});
