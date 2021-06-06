import {CompareFileTest} from "./model/CompareFileTest"
import {CreateEslintrc} from "createEnvScripts/CreateEslintrc"


const filePath = "src/tests/testFiles/reactEslintrc.js"
const createReactEslintrc = new CreateEslintrc(filePath,"react")
createReactEslintrc.writeFile()

const purposeFileName = "reactEslintrc.js"
const testFileName  = "reactEslintrc.js"
const compareFile = new CompareFileTest(purposeFileName,testFileName)
compareFile.test()