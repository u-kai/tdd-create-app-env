"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDistSrcBuild = void 0;
const DirectoryMaker_1 = require("../model/DirectoryMaker");
const path = require("path");
class CreateDistSrcBuild {
    constructor(topPath) {
        this.makeDirectorys = ["src", "build", "dist"];
        this.mkdirs = () => {
            this.makeDirectorys.map((dirName) => {
                const dirPath = path.resolve(this.topPath, dirName);
                const directoryMaker = new DirectoryMaker_1.DirectoryMaker(dirPath);
                directoryMaker.mkdir();
            });
        };
        this.topPath = topPath;
    }
}
exports.CreateDistSrcBuild = CreateDistSrcBuild;
