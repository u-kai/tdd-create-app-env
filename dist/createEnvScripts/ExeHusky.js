"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExeHusky = void 0;
const ExeCommand_1 = require("../functions/ExeCommand");
class ExeHusky {
    constructor(path) {
        this.exeHusky = () => {
            const cmd = `cd ${this.path}
        npx husky install
        npx husky add .husky/pre-commit "yarn lint-staged"`;
            ExeCommand_1.exeCommand(cmd);
        };
        this.path = path;
    }
}
exports.ExeHusky = ExeHusky;
