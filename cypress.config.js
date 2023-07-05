const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // pageLoadTimeout: 60000,

  e2e: {
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,


    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
