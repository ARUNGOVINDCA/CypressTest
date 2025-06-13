const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200', // ✅ this is the key
    setupNodeEvents(on, config) {
      // Node events if needed
    }
  }
});
