import {CreateReactWebpackConfig} from "../createEnvScripts/CreateReactWebpackConfig"
import {CompareFileTest} from "../tests/model/CompareFileTest"

const filePath = "src/tests/testFiles/reactWebpack.config.js"
const createReactWebpackConfig = new CreateReactWebpackConfig(filePath)
createReactWebpackConfig.writeFile()


const testFileName = "reactWebpack.config.js"
const purposeFileName = "webpack.config.js"
const compareJsonFileTest = new CompareFileTest(purposeFileName,testFileName)
compareJsonFileTest.test()