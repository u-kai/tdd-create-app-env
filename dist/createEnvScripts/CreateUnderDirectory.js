"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnderDirectory = void 0;
const path = require("path");
const DirectoryMaker_1 = require("../model/DirectoryMaker");
class CreateUnderDirectory {
    constructor(topDirPath, underDirNName) {
        this.mkdir = () => {
            const directoryMaker = new DirectoryMaker_1.DirectoryMaker(this.underDirPath);
            directoryMaker.mkdir();
        };
        this.underDirPath = path.resolve(topDirPath, underDirNName);
    }
}
exports.CreateUnderDirectory = CreateUnderDirectory;
