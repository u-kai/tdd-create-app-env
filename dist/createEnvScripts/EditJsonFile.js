"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditJsonFile = void 0;
const fs = require("fs");
class EditJsonFile {
    constructor(filePath, changeKey, changeData) {
        this.readFile = () => {
            return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
        };
        this.edit = () => {
            const fileData = this.readFile();
            fileData[this.changeKey] = this.changeData;
            fs.writeFileSync(this.filePath, JSON.stringify(fileData, null, "\t"));
        };
        this.filePath = filePath;
        this.changeKey = changeKey;
        this.changeData = changeData;
    }
}
exports.EditJsonFile = EditJsonFile;
