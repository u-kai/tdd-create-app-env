"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompareJsonFileTest_1 = require("./model/CompareJsonFileTest");
const EditReactPackageJson_1 = require("../createEnvScripts/EditReactPackageJson");
//edit script
//insert prettier
//insert lint-staged
const filePath = 'src/tests/testFiles/reactPackage.json';
EditReactPackageJson_1.editReactPackageJson(filePath);
const purposeFileName = "reactPackage.json";
const testFileName = "reactPackage.json";
const compareJsonFileTest = new CompareJsonFileTest_1.CompareJsonFileTest(purposeFileName, testFileName);
compareJsonFileTest.test();
