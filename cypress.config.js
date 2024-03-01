const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

require("dotenv").config();

module.exports = defineConfig({
  // reporter: "mocha-allure-reporter",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  // eslint-disable-next-line no-undef
  env: { ...process.env },
  projectId: "yexqd8",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
  },
});
