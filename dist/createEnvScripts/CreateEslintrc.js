"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEslintrc = void 0;
const FileMaker_1 = require("../model/FileMaker");
const path = require("path");
class CreateEslintrc extends FileMaker_1.FileMaker {
    constructor(filePath, brf) {
        super(filePath, '');
        this.filePath = path.resolve(filePath, '.eslintrc.js');
        switch (brf) {
            case 'back':
                this.fileContents = `module.exports = {
env: {
    browser: true,
    es6: true
},
extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
    "prettier"
],
plugins: [
    "@typescript-eslint"
],
parser: "@typescript-eslint/parser",
parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
},
root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
rules: {}
}`;
                break;
            case 'react':
                this.fileContents = `module.exports = {
env: {
browser: true,
es6: true
},
extends: [
"eslint:recommended",
//"plugin:react/recommended",
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
rules: {
    "react/prop-types": 0,
    "@typescript-eslint/ban-types": [
        "error",
        {
          "extendDefaults": true,
          "types": {
            "{}": false
          }
          }  
    ]
}}
`;
                break;
            case 'front':
                this.fileContents = `module.exports = {
env: {
browser: true,
es6: true
},
extends: [
"eslint:recommended",
"plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
"prettier"
],
plugins: [
"@typescript-eslint"
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
}
exports.CreateEslintrc = CreateEslintrc;
