"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateReactWebpackConfig_1 = require("../createEnvScripts/CreateReactWebpackConfig");
const CompareFileTest_1 = require("../tests/model/CompareFileTest");
const filePath = "src/tests/testFiles";
const createReactWebpackConfig = new CreateReactWebpackConfig_1.CreateReactWebpackConfig(filePath);
createReactWebpackConfig.writeFile();
const testFileName = "webpack.config.js";
const purposeFileName = "webpack.config.js";
const compareJsonFileTest = new CompareFileTest_1.CompareFileTest(purposeFileName, testFileName);
compareJsonFileTest.test();
