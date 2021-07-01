import { CompareJsonFileTest } from './model/CompareJsonFileTest'
import { editReactPackageJson } from '../createEnvScripts/EditReactPackageJson'
import { EditJsonFile } from 'createEnvScripts/EditJsonFile'

//edit script
//insert prettier
//insert lint-staged

const filePath = 'src/tests/testFiles/reactPackage.json'
editReactPackageJson(filePath)
const scripts = {
    prepare: 'husky install',
    'lint-staged': 'lint-staged',
    'lint-fix': "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'",
}
new EditJsonFile(filePath, 'scripts', scripts).add()
const purposeFileName = 'reactPackage.json'
const testFileName = 'reactPackage.json'

const compareJsonFileTest = new CompareJsonFileTest(purposeFileName, testFileName)
compareJsonFileTest.test()
