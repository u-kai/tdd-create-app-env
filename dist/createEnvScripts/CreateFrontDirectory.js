"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFrontDirectory = void 0;
const DirectoryMaker_1 = require("../model/DirectoryMaker");
const path = require("path");
class CreateFrontDirectory {
    constructor(topDirPath) {
        this.getTopDirName = () => {
            const splitTopDirPath = this.topDirPath.split('/');
            return splitTopDirPath[splitTopDirPath.length - 1];
        };
        this.convert = () => {
            return path.resolve(this.topDirPath, `${this.getTopDirName()}-front`);
        };
        this.mkdir = () => {
            const directoryMaker = new DirectoryMaker_1.DirectoryMaker(this.dirPath);
            directoryMaker.mkdir();
        };
        this.topDirPath = topDirPath;
        this.dirPath = this.convert();
    }
}
exports.CreateFrontDirectory = CreateFrontDirectory;
