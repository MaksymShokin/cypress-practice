import { defineConfig } from 'cypress';

export default defineConfig({
  // can change some config here
  // defaultCommandTimeout: 3000,
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
