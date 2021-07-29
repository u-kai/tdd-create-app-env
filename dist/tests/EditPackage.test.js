"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompareJsonFileTest_1 = require("./model/CompareJsonFileTest");
const EditReactPackageJson_1 = require("../createEnvScripts/EditReactPackageJson");
const EditJsonFile_1 = require("createEnvScripts/EditJsonFile");
//edit script
//insert prettier
//insert lint-staged
const filePath = 'src/tests/testFiles/reactPackage.json';
EditReactPackageJson_1.editReactPackageJson(filePath);
const scripts = {
    prepare: 'husky install',
    'lint-staged': 'lint-staged',
    'lint-fix': "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'",
};
new EditJsonFile_1.EditJsonFile(filePath, 'scripts', scripts).add();
const purposeFileName = 'reactPackage.json';
const testFileName = 'reactPackage.json';
const compareJsonFileTest = new CompareJsonFileTest_1.CompareJsonFileTest(purposeFileName, testFileName);
compareJsonFileTest.test();
