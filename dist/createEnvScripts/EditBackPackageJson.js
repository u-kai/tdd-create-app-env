"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editBackPackageJson = void 0;
const EditJsonFile_1 = require("../createEnvScripts/EditJsonFile");
// import {EditJsonFileDelegate} from "interfaces/EditJson"
const changeKeys = ["scripts", "lint-staged", "prettier"];
const scripts = {
    "start": "node build/index.js",
    "compile": "tsc",
    "ts-node": "./node_modules/.bin/ts-node -r tsconfig-paths/register",
    "test": "jest",
    "watch": "tsc-watch --onSuccess \"npm start\"",
    "prepare": "husky install",
    "lint-staged": "lint-staged",
    "lint-fix": "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'"
};
const lintStaged = {
    "src/**/*.{js,ts,tsx}": [
        "npm run lint-fix"
    ]
};
const prettier = {
    "printWidth": 120,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 4
};
const changeDatas = [scripts, lintStaged, prettier];
const editBackPackageJson = (filePath) => {
    changeKeys.map((changeKey, i) => {
        const editPackage = new EditJsonFile_1.EditJsonFile(filePath, changeKey, changeDatas[i]);
        editPackage.edit();
    });
};
exports.editBackPackageJson = editBackPackageJson;
