import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 30000,

  expect: {
    timeout: 5000
  },

  reporter: [
    ["html" , {open : 'never'}],      // HTML REPORTER ENABLED
    ["list"],      // optional console reporter
    ["allure-playwright"],
    ["./allure-auto.ts"]
  ],

  use: {
    headless: false,
    actionTimeout: 10000,
    navigationTimeout: 15000,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
  }
});
