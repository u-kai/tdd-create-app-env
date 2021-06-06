"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJestConfig = void 0;
const FileMaker_1 = require("../model/FileMaker");
const path = require("path");
class CreateJestConfig extends FileMaker_1.FileMaker {
    constructor(filePath) {
        super(filePath, "");
        this.filePath = path.resolve(filePath, "jest.config.ts");
        this.fileContents = `export default {
clearMocks:true,
collectCoverage:true,
coverageDirectory:"coverage",
preset:"ts-jest",
moduleDirectories:["node_modules","src"]
}`;
    }
}
exports.CreateJestConfig = CreateJestConfig;
