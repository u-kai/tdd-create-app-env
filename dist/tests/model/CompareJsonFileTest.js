"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareJsonFileTest = void 0;
const CompareJsonFile_1 = require("./CompareJsonFile");
const path = require("path");
class CompareJsonFileTest {
    constructor(purposeFileName, testFileName, topPath) {
        this.test = () => {
            const compareFile = this.factoryCompareFile();
            const test = compareFile.returnTest();
            const purpose = compareFile.returnPurpose();
            const isExist = compareFile.isTestFileExits();
            it(`is exists ${this.testFilePath} and is Equal data`, () => {
                expect(isExist).toEqual(true);
                expect(test).toStrictEqual(purpose);
            });
        };
        this.factoryCompareFile = () => {
            return new CompareJsonFile_1.CompareJsonFile(this.purposeFilePath, this.testFilePath);
        };
        if (topPath) {
            this.topPath = topPath;
            this.testFilePath = path.resolve(this.topPath, testFileName);
        }
        else {
            this.topPath = 'src/tests';
            this.testFilePath = path.resolve(this.topPath, 'testFiles', testFileName);
        }
        this.purposeFilePath = path.resolve('src/tests', 'purposeFiles', purposeFileName);
    }
}
exports.CompareJsonFileTest = CompareJsonFileTest;
