"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVscodeSettings = void 0;
const DirectoryMaker_1 = require("../model/DirectoryMaker");
const FileMaker_1 = require("../model/FileMaker");
const path = require("path");
class CreateVscodeSettings extends DirectoryMaker_1.DirectoryMaker {
    constructor(topPath) {
        super(path.resolve(topPath, '.vscode'));
        this.createDirAndFile = () => {
            this.mkdir();
            this.fileMaker.writeFile();
        };
        const fileName = 'settings.json';
        const fileContent = `{
            "[typescript]": {
                "editor.defaultFormatter": "esbenp.prettier-vscode" // フォーマッタをprettierに指定
            },
            "editor.formatOnSave": true, // ファイル保存時にPrettierでフォーマット
            "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true // ファイル保存時にESLintでフォーマット
            }
        }
        `;
        this.fileMaker = new FileMaker_1.FileMaker(path.resolve(topPath, '.vscode', fileName), fileContent);
    }
}
exports.CreateVscodeSettings = CreateVscodeSettings;
