"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareFile = void 0;
const CompareJsonFile_1 = require("../model/CompareJsonFile");
const fs = require("fs");
class CompareFile extends CompareJsonFile_1.CompareJsonFile {
    constructor(purposeFilePath, testFilePath) {
        super(purposeFilePath, testFilePath);
        this.returnPurpose = () => {
            return fs.readFileSync(this.purposeFilePath, "utf-8");
        };
        this.returnTest = () => {
            return fs.readFileSync(this.testFilePath, "utf-8");
        };
    }
}
exports.CompareFile = CompareFile;
