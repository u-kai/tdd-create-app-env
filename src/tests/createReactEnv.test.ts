import {CreateReactEnv} from "createEnvScripts/CreateReactEnv"
import {ExistTestProvider} from "./model/ExistTestProvider"


const topPath = "top-react"
const paths = [
    "node_modules",
    "dist",
    "src",
    "build",
    "package.json",
    "ts-config",
    ".eslintrc.js",
    ".git",
    ".gitignore",
    "jest.config.json"
]
const createReactEnv = new CreateReactEnv(topPath)
createReactEnv.run()

const existTestProvider = new ExistTestProvider(topPath,paths)
existTestProvider.test()
