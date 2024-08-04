const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/integration/**/*.spec.js'
  }
});
