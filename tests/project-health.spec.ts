import { test, expect } from '@playwright/test';

test.describe('Project Health & Performance Tests', () => {

  // =================================================================
  // Core Functionality & SEO
  //
  // These tests ensure the site is fundamentally operational,
  // accessible, and indexed correctly.
  // =================================================================
  test.describe('Core Functionality & SEO', () => {
    test('site loads successfully and is accessible', async ({ page }) => {
      await page.goto('/');

      // Check page title
      await expect(page).toHaveTitle(/Pattern Craft/);

      // Verify no console errors
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      await page.waitForLoadState('networkidle');
      expect(consoleErrors).toHaveLength(0);

      // Check for main content visibility
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('nav').first()).toBeVisible();
    });
  });

  // =================================================================
  // Performance & Optimization
  //
  // These tests validate the core performance goals of the project,
  // including image optimization, load times, and network usage.
  // =================================================================
  test.describe('Performance & Optimization', () => {
    test('image optimization impact measurement', async ({ request }) => {
      const screenshots = Array.from({ length: 21 }, (_, i) => `screenshot-${i + 1}.webp`);
      let totalOptimizedSize = 0;

      for (const screenshot of screenshots) {
        const response = await request.get(`/snapshots/${screenshot}`);
        expect(response.status()).toBe(200);

        const size = parseInt(response.headers()['content-length'] || '0');
        totalOptimizedSize += size;

        expect(size).toBeLessThan(100 * 1024); // Each image under 100KB
      }

      expect(totalOptimizedSize).toBeLessThan(2 * 1024 * 1024); // Total under 2MB

      console.log(`📊 Total optimized image size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
    });

    test('page load speed benchmark', async ({ page }) => {
      const metrics: any[] = [];
      for (let i = 0; i < 3; i++) {
        const startTime = Date.now();
        await page.goto('/', { waitUntil: 'networkidle' });
        const loadTime = Date.now() - startTime;
        metrics.push({ totalLoadTime: loadTime });
        await page.context().clearCookies();
      }

      const avgLoadTime = metrics.reduce((sum, m) => sum + m.totalLoadTime, 0) / metrics.length;
      expect(avgLoadTime).toBeLessThan(3000); // Average load time under 3s

      console.log(`🚀 Average load time: ${avgLoadTime.toFixed(0)}ms`);
    });

    test('network usage is minimal', async ({ page }) => {
      let totalBytes = 0;
      page.on('response', response => {
        totalBytes += parseInt(response.headers()['content-length'] || '0');
      });

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      expect(totalBytes).toBeLessThan(10 * 1024 * 1024); // Entire page under 10MB
      console.log(`🌐 Total page size: ${(totalBytes / 1024 / 1024).toFixed(2)}MB`);
    });
  });

  // =================================================================
  // Visual & Responsive Testing
  //
  // These tests ensure the UI is consistent and functional across
  // different devices and viewports.
  // =================================================================
  test.describe('Visual & Responsive Testing', () => {
    const viewports = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1200, height: 800 },
    ];

    for (const viewport of viewports) {
      test(`responsive design on ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        // Hide dynamic elements
        await page.addStyleTag({
          content: `* { animation-duration: 0s !important; transition-duration: 0s !important; }`
        });

        // No horizontal scrollbars
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = page.viewportSize()!.width;
        expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);

        // Visual regression test
        await expect(page).toHaveScreenshot(`health-check-${viewport.name}.png`, {
          threshold: 0.15,
          maxDiffPixels: 1000,
        });
      });
    }
  });
});
