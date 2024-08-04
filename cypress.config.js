const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'i5e7zr',
  e2e: {
    supportFile: false,
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/integration/**/*.spec.js'
  }
});
