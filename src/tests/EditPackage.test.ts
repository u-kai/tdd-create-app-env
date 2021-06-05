import { CompareJsonFileTest } from './model/CompareJsonFileTest'
import { EditJsonFile } from "../createEnvScripts/EditJsonFile"
const filePath = 'src/tests/testFiles/reactPackage.json'
const changeKey = "scripts"
const changeData = {
    "start": "node build/index.js",
    "compile": "tsc",
    "watch": "tsc-watch --onSuccess \"npm start\"",
    "prepare": "husky install",
    "lint-fix": "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'"
}
const editPackage = new EditJsonFile(filePath,changeKey,changeData)
editPackage.edit()
const purposeFileName = "reactPackage.json"
const testFileName = "reactPackage.json"

const compareJsonFileTest = new CompareJsonFileTest(purposeFileName,testFileName)
compareJsonFileTest.test()