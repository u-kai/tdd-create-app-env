"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddData2JsonFile = void 0;
const EditJsonFile_1 = require("./EditJsonFile");
class AddData2JsonFile extends EditJsonFile_1.EditJsonFile {
    constructor(filePath, addDataKey, addData) {
        super(filePath, addDataKey, addData);
        this.addData = addData;
        this.addDataKey = addDataKey;
    }
}
exports.AddData2JsonFile = AddData2JsonFile;
