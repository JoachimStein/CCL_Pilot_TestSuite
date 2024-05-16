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
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_FPO[AGR]_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_FPO[SN]_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_LPO[AGR]_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_LPO[SN]_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_NS_DPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_NS_FPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_NS_LPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_RFQ_CS_FPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_RFQ_CS_LPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_RFQ_DPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_RFQ_NS_DPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_RFQ_NS_FPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_PR_RFQ_NS_LPO_MRR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_MR_MI_MIR.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_Accounting_Journal.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_Accounting_Payments.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_Accounting_Received.cy.js',
        '/home/stein/Pilot_TestSuite/cypress/e2e/CCL_Accounting_Contra.cy.js'
      ]
      return config;
      // implement node event listeners here
    },
  },
});