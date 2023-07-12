import path from "path"
import fs from "fs"
import merge from "deepmerge"
import prettier from "prettier"

function withFrameworkConfig(defaultConfig = {}) {
  let lib = defaultConfig?.lib?.name

  const libNextConfig = require(path.join("../", lib, "next.config"))
  const config = merge(defaultConfig, libNextConfig)

  const tsPath = path.join(process.cwd(), "tsconfig.json")
  const tsConfig = require(tsPath)

  tsConfig.compilerOptions.paths["@lib"] = [`lib/${lib}`]
  tsConfig.compilerOptions.paths["@lib/*"] = [`lib/${lib}/*`]

  fs.writeFileSync(
    tsPath,
    prettier.format(
      JSON.stringify(tsConfig), { parser: "json" }
    )
  )

  return config
}

export { withFrameworkConfig }