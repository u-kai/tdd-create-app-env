"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactWebpackConfigData = void 0;
const fs = require("fs");
const path = require("path");
const filePath = path.resolve("src/file-data/files/reactWebpackConfig.js");
exports.reactWebpackConfigData = fs.readFileSync(filePath, "utf-8");
