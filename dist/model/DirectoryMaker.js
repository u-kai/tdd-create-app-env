"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryMaker = void 0;
const fs = require("fs");
class DirectoryMaker {
    constructor(name) {
        this.isExist = () => {
            return fs.existsSync(this.directoryName);
        };
        this.mkdir = () => {
            if (!this.isExist()) {
                fs.mkdirSync(this.directoryName);
            }
        };
        this.directoryName = name;
    }
}
exports.DirectoryMaker = DirectoryMaker;
