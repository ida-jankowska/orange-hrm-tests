const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "cypress/tests/**/*.cy.ts",

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
