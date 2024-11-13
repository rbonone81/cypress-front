const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
