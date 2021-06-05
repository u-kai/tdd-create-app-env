import {CompareFileTest} from "./model/CompareFileTest"
import {CreateReactEslintrc} from "createEnvScripts/CreateReactEslintrc"


const filePath = "src/tests/testFiles/reactEslintrc.js"
const createReactEslintrc = new CreateReactEslintrc(filePath)
createReactEslintrc.writeFile()

const purposeFileName = "reactEslintrc.js"
const testFileName  = "reactEslintrc.js"
const compareFile = new CompareFileTest(purposeFileName,testFileName)
compareFile.test()