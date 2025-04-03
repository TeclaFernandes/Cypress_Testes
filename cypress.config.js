const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000, // Aumenta o tempo de espera para comandos
    pageLoadTimeout: 30000 // Aumenta o tempo de espera para carregar páginas
  },
});
