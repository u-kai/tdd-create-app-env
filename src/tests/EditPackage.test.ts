import { CompareJsonFileTest } from './model/CompareJsonFileTest'
import { editReactPackageJson } from "../createEnvScripts/EditReactPackageJson"


//edit script
//insert prettier
//insert lint-staged

const filePath = 'src/tests/testFiles/reactPackage.json'
editReactPackageJson(filePath)

const purposeFileName = "reactPackage.json"
const testFileName = "reactPackage.json"

const compareJsonFileTest = new CompareJsonFileTest(purposeFileName,testFileName)
compareJsonFileTest.test()