"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exeCommand = void 0;
const child_process_1 = require("child_process");
const exeCommand = (cmd) => {
    child_process_1.execSync(cmd);
};
exports.exeCommand = exeCommand;
