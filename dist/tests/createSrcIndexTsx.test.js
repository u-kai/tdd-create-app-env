"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompareFileTest_1 = require("./model/CompareFileTest");
createSrcIndexTsx();
const fileName = "index.tsx";
const compareFileTest = new CompareFileTest_1.CompareFileTest(fileName, fileName);
compareFileTest.test();
