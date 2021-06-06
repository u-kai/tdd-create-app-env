import {FileMaker} from "../model/FileMaker"
import * as path from "path"
export class CreateEslintrc extends FileMaker{
    constructor(filePath:string,brf:"back"|"react"|"front"){
        super(filePath,"")
        this.filePath = path.resolve(filePath, ".eslintrc.js")
        switch(brf){
            case "back":
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
}`
break
        case "react":
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
}`
break
case "front":
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
}`
        }
        
    }
}
