"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBackEnv = void 0;
const CreateEnv_1 = require("../model/CreateEnv");
const InstallBackPackages_1 = require("../install-packages/InstallBackPackages");
const CdAndInstall_1 = require("../model/CdAndInstall");
const InstallTypescriptPackages_1 = require("../install-packages/InstallTypescriptPackages");
const InstallEslintPrettierHuskyPackages_1 = require("../install-packages/InstallEslintPrettierHuskyPackages");
const CreateEslintrc_1 = require("./CreateEslintrc");
const PackageJsonOperater_1 = require("../createEnvScripts/PackageJsonOperater");
const CreateBackTsConfig_1 = require("./CreateBackTsConfig");
class CreateBackEnv extends CreateEnv_1.CreateEnv {
    constructor(topPath) {
        super(topPath);
        this.installPackages = () => {
            const cdAndInstall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallBackPackages_1.installBackPackages);
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallBackPackages_1.DInstallBackPackages);
            cdAndInstall.exeInstall();
            cdAndDInastall.exeInstall("D");
        };
        this.installTypescriptPackages = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallTypescriptPackages_1.DInstallTypescriptBackPackages);
            cdAndDInastall.exeInstall("D");
        };
        this.installEslintETC = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallEslintPrettierHuskyPackages_1.DInstallEsLintPrettierHuskyPackagesBack);
            cdAndDInastall.exeInstall("D");
        };
        this.createEslintrc = () => {
            const createExlintrc = new CreateEslintrc_1.CreateEslintrc(this.topPath, "back");
            createExlintrc.writeFile();
        };
        this.editPacageJson = () => {
            const editPackage = new PackageJsonOperater_1.PackageJsonOperater(this.topPath);
            editPackage.editToBack();
        };
        this.createTsConfig = () => {
            const createBackTsConfig = new CreateBackTsConfig_1.CreateBackTsConfig(this.topPath);
            createBackTsConfig.createFile();
        };
    }
}
exports.CreateBackEnv = CreateBackEnv;
