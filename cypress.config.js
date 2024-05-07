const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: "images",
  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_DPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_DPO[SN]_MRR.cy.js',
        
      ]
      return config;
      // implement node event listeners here
    },
  },
});