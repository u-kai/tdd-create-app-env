"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExeHusky = void 0;
const ExeCommand_1 = require("../functions/ExeCommand");
class ExeHusky {
    constructor(path) {
        this.exeHusky = () => {
            const cmd = `cd ${this.path}
        npx husky install`;
            ExeCommand_1.exeCommand(cmd);
            const cmd2 = `cd ${this.path}
        npx husky add .husky/pre-commit "yarn lint-staged"`;
            ExeCommand_1.exeCommand(cmd2);
        };
        this.path = path;
    }
}
exports.ExeHusky = ExeHusky;
