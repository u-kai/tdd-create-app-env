"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageJsonOperater = void 0;
const ExeCommand_1 = require("../functions/ExeCommand");
const EditReactPackageJson_1 = require("createEnvScripts/EditReactPackageJson");
const path = require("path");
class PackageJsonOperater {
    constructor(topPath) {
        this.init = () => {
            const cmd = `cd ${this.topPath}
        yarn init -y`;
            ExeCommand_1.exeCommand(cmd);
        };
        this.editToReact = () => {
            EditReactPackageJson_1.editReactPackageJson(path.resolve(this.topPath, "package.json"));
        };
        this.topPath = topPath;
    }
}
exports.PackageJsonOperater = PackageJsonOperater;
