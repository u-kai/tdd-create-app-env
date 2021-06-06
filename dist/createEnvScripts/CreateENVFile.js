"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnvFile = void 0;
const FileMaker_1 = require("../model/FileMaker");
const path = require("path");
const createEnvFile = (topPath) => {
    const filePath = path.resolve(topPath, ".env");
    const fileContents = `SKIP_PREFLIGHT_CHECK=true`;
    const fileMaker = new FileMaker_1.FileMaker(filePath, fileContents);
    fileMaker.writeFile();
};
exports.createEnvFile = createEnvFile;
