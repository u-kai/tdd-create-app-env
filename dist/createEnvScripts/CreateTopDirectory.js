"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopDirectory = void 0;
const DirectoryMaker_1 = require("../model/DirectoryMaker");
class CreateTopDirectory {
    constructor(dirPath) {
        this.mkdir = () => {
            const directoryMaker = new DirectoryMaker_1.DirectoryMaker(this.dirPath);
            directoryMaker.mkdir();
        };
        this.dirPath = dirPath;
    }
}
exports.CreateTopDirectory = CreateTopDirectory;
