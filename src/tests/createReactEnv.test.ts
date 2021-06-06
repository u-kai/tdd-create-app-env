import {CreateReactEnv} from "createEnvScripts/CreateReactEnv"
import {ExistTestProvider} from "./model/ExistTestProvider"


const topPath = "top-react"
const paths = [
    "dist",
    "src",
    "build",
    "package.json",
    "ts-config.json",
    "node_modules",
    "node_modules/react",
    "node_modules/react-dom",
    "node_modules/@styled-components"]
//     ".eslintrc.js",
//     ".git",
//     ".gitignore",
//     "jest.config.json"
// ]
const createReactEnv = new CreateReactEnv(topPath)
createReactEnv.run()

const existTestProvider = new ExistTestProvider(topPath,paths)
existTestProvider.test()
