import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "vue-nuxt-cypress",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
