const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "cypress/tests/**/*.cy.js",

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
