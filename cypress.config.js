const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalWebKitSupport: true,
    setupNodeEvents(on, config) {
    }
  },
})
