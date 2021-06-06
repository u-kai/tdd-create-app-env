import {UseCreateReactAPP} from "createEnvScripts/UseCreateReactAPP"
import {ExistTestProvider} from "./model/ExistTestProvider"

const topPath = "top-react"
const paths = [
    // "dist",
    "src",
    // "build",
    "package.json",
    "tsconfig.json",
    "node_modules",
    "node_modules/react",
    "node_modules/react-dom",
    // "node_modules/styled-components",
    "node_modules/typescript",
    // "webpack.config.js",
"src/index.tsx",
"public/index.html",
// "node_modules/webpack",
    ".eslintrc.js",
    // ".git",
    ".gitignore",
    // "jest.config.ts"
]
// const createReactEnv = new UseCreateReactAPP(topPath)
// createReactEnv.run()

const existTestProvider = new ExistTestProvider(topPath,paths)
existTestProvider.test()