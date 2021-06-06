"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddData2JsonFile_1 = require("../createEnvScripts/AddData2JsonFile");
const CompareJsonFileTest_1 = require("./model/CompareJsonFileTest");
const filePath = 'src/tests/testFiles/addLint.json';
const addDataKey = "lint-staged";
const addData = {
    "src/**/*.{js,ts,tsx}": [
        "npm run lint-fix"
    ]
};
const fileName = "addLint.json";
const addData2JsonFile = new AddData2JsonFile_1.AddData2JsonFile(filePath, addDataKey, addData);
addData2JsonFile.edit();
const compareJsonFileTest = new CompareJsonFileTest_1.CompareJsonFileTest(fileName, fileName);
compareJsonFileTest.test();
