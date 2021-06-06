"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMaker = void 0;
const fs = require("fs");
class FileMaker {
    constructor(filePath, fileContents) {
        this.writeFile = () => {
            fs.writeFileSync(this.filePath, this.fileContents, 'utf-8');
        };
        this.filePath = filePath;
        this.fileContents = fileContents;
    }
}
exports.FileMaker = FileMaker;
