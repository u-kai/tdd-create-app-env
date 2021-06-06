"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEslintrc = void 0;
const FileMaker_1 = require("../model/FileMaker");
const path = require("path");
class CreateEslintrc extends FileMaker_1.FileMaker {
    constructor(filePath) {
        super(filePath, "");
        this.filePath = path.resolve(filePath, ".eslintrc.js");
        this.fileContents = `module.exports = {
    env: {
    browser: true,
    es6: true
    },
    extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
    "prettier"
    ],
    plugins: [
    "@typescript-eslint",
    "react"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
    },
    root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
    rules: {}
}`;
    }
}
exports.CreateEslintrc = CreateEslintrc;
