const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}'
  },
});
