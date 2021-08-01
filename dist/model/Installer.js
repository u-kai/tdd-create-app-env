"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Installer = void 0;
const ExeCommand_1 = require("../functions/ExeCommand");
class Installer {
    constructor(packageNames) {
        this.returnCmd = () => {
            let cmd = '';
            this.packageNames.map((packageName) => {
                cmd += `npm install ${packageName}\n`;
            });
            return cmd.substr(0, cmd.length - 1);
        };
        this.returnDCmd = () => {
            let cmd = '';
            this.packageNames.map((packageName) => {
                cmd += `npm install -D ${packageName}\n`;
            });
            return cmd.substr(0, cmd.length - 1);
        };
        this.exeInstall = (d) => {
            if (d) {
                ExeCommand_1.exeCommand(this.returnDCmd());
                return;
            }
            ExeCommand_1.exeCommand(this.returnCmd());
        };
        this.packageNames = packageNames;
    }
}
exports.Installer = Installer;
