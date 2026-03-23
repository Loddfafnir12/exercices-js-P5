const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xq185q',
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
