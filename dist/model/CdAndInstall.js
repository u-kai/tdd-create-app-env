"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdAndInstall = void 0;
const Installer_1 = require("../model/Installer");
const ExeCommand_1 = require("../functions/ExeCommand");
class CdAndInstall extends Installer_1.Installer {
    constructor(cdPath, packages) {
        super(packages);
        this.returnCmdWithCd = () => {
            if (this.cdPath === '') {
                return this.returnCmd();
            }
            return `cd ${this.cdPath}\n${this.returnCmd()}`;
        };
        this.returnDCmdWithCd = () => {
            if (this.cdPath === '') {
                return this.returnCmd();
            }
            return `cd ${this.cdPath}\n${this.returnDCmd()}`;
        };
        this.exeInstall = (d) => {
            if (d) {
                ExeCommand_1.exeCommand(this.returnDCmdWithCd());
                return;
            }
            ExeCommand_1.exeCommand(this.returnCmdWithCd());
        };
        this.cdPath = cdPath;
    }
}
exports.CdAndInstall = CdAndInstall;
