"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopTsConfig = void 0;
const JsonFileMaker_1 = require("../model/JsonFileMaker");
const path = require("path");
class CreateTopTsConfig {
    constructor(filePath) {
        this.createFile = () => {
            const witer = new JsonFileMaker_1.JsonFileMaker(this.filePath, this.fileData);
            witer.writeFile();
        };
        this.filePath = path.resolve(filePath, "tsconfig.json");
        this.fileData = {
            exclude: ['.'],
        };
    }
}
exports.CreateTopTsConfig = CreateTopTsConfig;
