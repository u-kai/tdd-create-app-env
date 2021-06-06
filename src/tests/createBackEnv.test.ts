import {CreateBackEnv} from "createEnvScripts/CreateBackEnv"
import {ExistTestProvider} from "./model/ExistTestProvider"

const topPath = "top-back"
const paths = [
    "dist",
    "src",
    // "build",
    "package.json",
    "tsconfig.json",
    "node_modules",
    "node_modules/mysql2",
    "node_modules/typescript",
    ".eslintrc.js",
    ".git",
    ".gitignore",
    "jest.config.ts"
]
const createReactEnv = new CreateBackEnv(topPath)
createReactEnv.run()

const existTestProvider = new ExistTestProvider(topPath,paths)
existTestProvider.test()