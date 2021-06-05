import {CreateReactEnv} from "createEnvScripts/CreateReactEnv"
import {ExistTestProvider} from "./model/ExistTestProvider"


const topPath = "top-react"
const paths = [
    "dist",
    "src",
    "build",
    "package.json",
    "node_modules",]
//     "ts-config",
//     ".eslintrc.js",
//     ".git",
//     ".gitignore",
//     "jest.config.json"
// ]
const createReactEnv = new CreateReactEnv(topPath)
createReactEnv.run()

const existTestProvider = new ExistTestProvider(topPath,paths)
existTestProvider.test()
