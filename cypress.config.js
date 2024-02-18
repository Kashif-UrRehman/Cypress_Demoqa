const { defineConfig } = require("cypress");

require("dotenv").config();

module.exports = defineConfig({
  // eslint-disable-next-line no-undef
  env: { ...process.env },
  projectId: "yexqd8",

  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
