import { defineConfig } from 'cypress';

export default defineConfig({
  // can change some config here
  // defaultCommandTimeout: 3000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
