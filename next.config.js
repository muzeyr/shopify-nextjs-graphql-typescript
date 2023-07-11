
const { withFrameworkConfig } = require("./lib/common/config")

module.exports = withFrameworkConfig({
  lib: {
    name: process.env.STORE_NAME
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
