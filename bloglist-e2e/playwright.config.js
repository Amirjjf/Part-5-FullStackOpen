// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173', // ✅ Use backend as default
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    environment: {
      NODE_ENV: 'test' // ✅ Ensure tests run in the test environment
    }
  },
  webServer: {
    command: 'npm run dev', // ✅ Ensure frontend is running before tests
    port: 5173, // ✅ Match Vite dev server
    timeout: 15000,
    reuseExistingServer: !process.env.CI
  }
});
