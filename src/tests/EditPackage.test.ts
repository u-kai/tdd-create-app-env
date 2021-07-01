import { CompareJsonFileTest } from './model/CompareJsonFileTest'
import { editReactPackageJson } from '../createEnvScripts/EditReactPackageJson'
import { EditJsonFile } from 'createEnvScripts/EditJsonFile'

//edit script
//insert prettier
//insert lint-staged

const filePath = 'src/tests/testFiles/reactPackage.json'
editReactPackageJson(filePath)
new EditJsonFile(filePath, 'scripts', { udo: 'kai' }).add()
const purposeFileName = 'reactPackage.json'
const testFileName = 'reactPackage.json'

const compareJsonFileTest = new CompareJsonFileTest(purposeFileName, testFileName)
compareJsonFileTest.test()
