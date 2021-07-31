"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopSchema = void 0;
const path = require("path");
const JsonFileMaker_1 = require("../model/JsonFileMaker");
class CreateTopSchema {
    constructor(filePath) {
        this.createFile = () => {
            return new JsonFileMaker_1.JsonFileMaker(this.filePath, this.fileData).writeFile();
        };
        this.filePath = path.resolve(filePath, 'schema.graphql');
        this.fileData = {};
    }
}
exports.CreateTopSchema = CreateTopSchema;
