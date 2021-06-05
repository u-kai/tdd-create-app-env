import * as fs from "fs"
import * as path from "path"

const filePath = path.resolve("src/file-data/files/reactWebpackConfig.js")
export const reactWebpackConfigData = fs.readFileSync(filePath,"utf-8")

