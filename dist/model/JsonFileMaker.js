"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFileMaker = void 0;
const FileMaker_1 = require("./FileMaker");
const fs = require("fs");
class JsonFileMaker extends FileMaker_1.FileMaker {
    constructor(filePath, objectData) {
        super(filePath, '');
        this.writeFile = () => {
            fs.writeFileSync(this.filePath, JSON.stringify(this.objectData, null, '\t'));
        };
        this.objectData = objectData;
    }
}
exports.JsonFileMaker = JsonFileMaker;
