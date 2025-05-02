// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 5000
  },

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[
    
    ['html'],
    ['blob'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    browserName: 'chromium', // chromium for chrome, webkit for safari, firefox for firefox browser
    headless: false, //If false then open the browser and user can see the browser opening. If true then user will not able to see the browser.
    screenshot: 'on', //To get the screenshots of each and every steps in code performed by the playwright

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',//if 'on' then it will provide the traces for all test (passed,failed,flaky, skipped), 'off': it will not provide any traces, 'retain-on-failure' it will provide traces for only the failed tests.
  },
  projects: [
    {
      name: 'setup',
      testMatch:'*spec.ts',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },
  ]

});

