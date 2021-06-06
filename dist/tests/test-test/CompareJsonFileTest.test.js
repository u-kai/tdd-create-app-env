"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompareJsonFileTest_1 = require("../model/CompareJsonFileTest");
const purposeFileName = 'topTs-config.json';
const testFileName = 'ts-config.json';
const compareJsonFileTest = new CompareJsonFileTest_1.CompareJsonFileTest(purposeFileName, testFileName);
compareJsonFileTest.test();
