import {AddData2JsonFile} from "../createEnvScripts/AddData2JsonFile"
import { CompareJsonFileTest } from "./model/CompareJsonFileTest"


const filePath = 'src/tests/testFiles/addLint.json'
const addDataKey = "lint-staged"
const addData =  {
    "src/**/*.{js,ts,tsx}": [
        "npm run lint-fix"
    ]
}
const fileName = "addLint.json"
const addData2JsonFile = new AddData2JsonFile(filePath,addDataKey,addData)
addData2JsonFile.edit()

const compareJsonFileTest = new CompareJsonFileTest(fileName,fileName)
compareJsonFileTest.test()