"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareJsonFile = void 0;
const fs = require("fs");
class CompareJsonFile {
    constructor(purposeFilePath, testFilePath) {
        this.isTestFileExits = () => {
            return fs.existsSync(this.testFilePath);
        };
        this.returnPurpose = () => {
            return JSON.parse(fs.readFileSync(this.purposeFilePath, 'utf-8'));
        };
        this.returnTest = () => {
            return JSON.parse(fs.readFileSync(this.testFilePath, 'utf-8'));
        };
        this.isEqual = () => {
            const purposeData = JSON.parse(fs.readFileSync(this.purposeFilePath, 'utf-8'));
            const testData = JSON.parse(fs.readFileSync(this.testFilePath, 'utf-8'));
            console.log('purpose', purposeData);
            console.log('testData', testData);
            return purposeData === testData;
        };
        this.purposeFilePath = purposeFilePath;
        this.testFilePath = testFilePath;
    }
}
exports.CompareJsonFile = CompareJsonFile;
