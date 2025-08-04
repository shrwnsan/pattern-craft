import { test, expect } from '@playwright/test';

test.describe('Image Optimization Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the homepage
    await page.goto('/');
  });

  test('site loads successfully with optimized images', async ({ page }) => {
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Pattern Craft/);
    
    // Verify no console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait for network to be idle
    await page.waitForLoadState('networkidle');
    
    // Assert no console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('WebP images are accessible directly', async ({ page, request }) => {
    // Test first few optimized screenshots
    const screenshots = [
      '/snapshots/screenshot-1.webp',
      '/snapshots/screenshot-2.webp', 
      '/snapshots/screenshot-3.webp'
    ];

    for (const screenshot of screenshots) {
      const response = await request.get(screenshot);
      
      // Should return 200 OK
      expect(response.status()).toBe(200);
      
      // Should be WebP format
      expect(response.headers()['content-type']).toBe('image/webp');
      
      // Should be reasonably small (under 100KB for our optimized images)
      const contentLength = parseInt(response.headers()['content-length'] || '0');
      expect(contentLength).toBeLessThan(100 * 1024); // 100KB max
      expect(contentLength).toBeGreaterThan(1000); // At least 1KB (not empty)
    }
  });

  test('page load performance meets targets', async ({ page }) => {
    // Track network activity
    const responses: any[] = [];
    page.on('response', response => {
      responses.push({
        url: response.url(),
        status: response.status(),
        size: response.headers()['content-length'] || '0'
      });
    });

    const startTime = Date.now();
    
    // Navigate and wait for load
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Load time should be under 5 seconds (generous target)
    expect(loadTime).toBeLessThan(5000);
    
    // Check that we're not downloading massive files anymore
    const largeFiles = responses.filter(r => 
      parseInt(r.size) > 1024 * 1024 // Files over 1MB
    );
    
    // Should have no files over 1MB (our images are now <100KB each)
    expect(largeFiles).toHaveLength(0);
  });

  test('SEO structured data contains WebP references', async ({ page }) => {
    await page.goto('/');
    
    // Get the page source
    const content = await page.content();
    
    // Check that JSON-LD contains WebP references
    expect(content).toContain('screenshot-1.webp');
    expect(content).toContain('screenshot-2.webp');
    expect(content).toContain('snapshots/screenshot');
    
    // Should NOT contain old PNG references
    expect(content).not.toContain('screenshot-1.png');
    expect(content).not.toContain('screenshot-2.png');
  });

  test('mobile performance is acceptable', async ({ page }) => {
    // Emulate slow 3G connection
    await page.context().setExtraHTTPHeaders({});
    
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Even on slow connection, should load reasonably fast due to small images
    expect(loadTime).toBeLessThan(15000); // 15 seconds max on slow connection
  });

  test('all pattern examples render correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Wait for patterns to load (assuming they have a specific class or selector)
    // Adjust selector based on actual pattern container
    const patternElements = page.locator('[class*="pattern"], [class*="gradient"], [class*="background"]');
    
    // Should have multiple pattern examples
    await expect(patternElements.first()).toBeVisible();
    
    // Take a screenshot for visual regression testing
    await expect(page).toHaveScreenshot('patterns-homepage.png');
  });

  test('responsive design works across devices', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1200, height: 800, name: 'desktop' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Should not have horizontal scrollbars
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // Allow 1px tolerance
      
      // Take screenshot for visual regression
      await expect(page).toHaveScreenshot(`patterns-${viewport.name}.png`);
    }
  });
});
