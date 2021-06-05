import {CreateReactWebpackConfig} from "../createEnvScripts/CreateReactWebpackConfig"
import {CompareFileTest} from "../tests/model/CompareFileTest"

const filePath = "src/test/testFiles/reactWebpack.config.js"
const createReactWebpackConfig = new CreateReactWebpackConfig(filePath)
createReactWebpackConfig.createFile()


const testFileName = "reactWebpack.config.js"
const purposeFileName = "webpack.config.js"
const compareFileTest = new CompareFileTest(purposeFileName,testFileName)
compareFileTest.test()