import { test, expect } from '@playwright/test';

test.describe('CI Smoke Tests', () => {
  test('build artifact exists', async ({ page }) => {
    // Just verify the page loads (static server test)
    const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
  });
});
