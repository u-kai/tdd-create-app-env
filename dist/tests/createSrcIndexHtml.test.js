"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateSrcIndexHtml_1 = require("createEnvScripts/CreateSrcIndexHtml");
const CompareFileTest_1 = require("./model/CompareFileTest");
CreateSrcIndexHtml_1.createSrcIndexHtml();
const fileName = "index.html";
const compareFileTest = new CompareFileTest_1.CompareFileTest(fileName, fileName);
compareFileTest.test();
