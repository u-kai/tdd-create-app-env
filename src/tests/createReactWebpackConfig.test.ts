import {CreateReactWebpackConfig} from "../createEnvScripts/CreateReactWebpackConfig"
import {CompareJsonFileTest} from "../tests/model/CompareJsonFileTest"

const filePath = "src/tests/testFiles/reactWebpack.config.js"
const createReactWebpackConfig = new CreateReactWebpackConfig(filePath)
createReactWebpackConfig.writeFile()


const testFileName = "reactWebpack.config.js"
const purposeFileName = "webpack.config.js"
const compareJsonFileTest = new CompareJsonFileTest(purposeFileName,testFileName)
compareJsonFileTest.test()