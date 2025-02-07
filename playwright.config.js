// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000, // Set a global timeout for tests
  use: {
    headless: true, // Run tests in headless mode
    screenshot: 'on', // Take screenshots for all test results, regardless of pass or fail
    video: 'retain-on-failure', // Record video on failure
    workers: 4, // Adjust this number based on your machine's capabilities
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'WebKit',
    //   use: { browserName: 'webkit' },
    // },
  ],
  reporter: [['html', { open: 'always' }]],
});