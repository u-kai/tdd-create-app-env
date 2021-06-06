"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareFileTest = void 0;
const CompareFile_1 = require("./CompareFile");
const CompareJsonFileTest_1 = require("./CompareJsonFileTest");
class CompareFileTest extends CompareJsonFileTest_1.CompareJsonFileTest {
    constructor(purposeFileName, testFileName) {
        super(purposeFileName, testFileName);
        this.factoryCompareFile = () => {
            return new CompareFile_1.CompareFile(this.purposeFilePath, this.testFilePath);
        };
    }
}
exports.CompareFileTest = CompareFileTest;
