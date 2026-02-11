import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,  // Reduced from 2 to 1
  workers: process.env.CI ? 2 : undefined,  // Increased from 1 to 2
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results.json' }],
    ['list']
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    actionTimeout: 15000,
    navigationTimeout: 30000,  // Added navigation timeout
  },
  
  expect: {
    toHaveScreenshot: {
      threshold: 0.2,
      animations: 'disabled'
    },
  },

  // Reduced browser matrix for CI - just chromium and one mobile
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],

  // Use webServer instead of manual serve
  webServer: {
    command: 'npx serve out -l 3000',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,  // Create new on CI
    timeout: 120 * 1000,
    env: {
      NODE_OPTIONS: '--max-old-space-size=2048'  // Increase memory for serve
    }
  },
});
