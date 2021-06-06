"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExist = void 0;
const fs = require("fs");
const isExist = (path) => {
    return fs.existsSync(path);
};
exports.isExist = isExist;
