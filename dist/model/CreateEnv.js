"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEnv = void 0;
const DirectoryMaker_1 = require("../model/DirectoryMaker");
const ExeCommand_1 = require("../functions/ExeCommand");
const CreateDistSrcBuild_1 = require("../createEnvScripts/CreateDistSrcBuild");
const CdAndInstall_1 = require("../model/CdAndInstall");
const InstallTypescriptPackages_1 = require("../install-packages/InstallTypescriptPackages");
const Giter_1 = require("../model/Giter");
const InstallEslintPrettierHuskyPackages_1 = require("../install-packages/InstallEslintPrettierHuskyPackages");
const CreateJestConfig_1 = require("../createEnvScripts/CreateJestConfig");
const InstallJestPackages_1 = require("../install-packages/InstallJestPackages");
const CreateVscodeSettings_1 = require("../createEnvScripts/CreateVscodeSettings");
class CreateEnv {
    constructor(topPath) {
        this.createTopDir = () => {
            const mkdir = new DirectoryMaker_1.DirectoryMaker(this.topPath);
            mkdir.mkdir();
        };
        this.createVscodeSettings = () => {
            const createVscodeSettings = new CreateVscodeSettings_1.CreateVscodeSettings(this.topPath);
            createVscodeSettings.createDirAndFile();
        };
        this.createChilderns = () => {
            const createDistSrcBuild = new CreateDistSrcBuild_1.CreateDistSrcBuild(this.topPath);
            createDistSrcBuild.mkdirs();
        };
        this.yarnInit = () => {
            const cmd = `cd ${this.topPath}
        yarn init -y`;
            ExeCommand_1.exeCommand(cmd);
        };
        this.git = () => {
            const giter = new Giter_1.Giter(this.topPath);
            giter.init();
            giter.createIgnore();
        };
        this.installTypescriptPackages = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallTypescriptPackages_1.DInstallTypescriptReactPackages);
            cdAndDInastall.exeInstall('D');
        };
        this.createTsConfig = () => {
            return;
        };
        this.installEslintETC = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallEslintPrettierHuskyPackages_1.DInstallEsLintPrettierHuskyPackagesReact);
            cdAndDInastall.exeInstall('D');
        };
        this.createEslintrc = () => {
            return;
        };
        this.installJest = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallJestPackages_1.DInstallJestPackages);
            cdAndDInastall.exeInstall('D');
        };
        this.createJestConfing = () => {
            const createJestConfing = new CreateJestConfig_1.CreateJestConfig(this.topPath);
            createJestConfing.writeFile();
        };
        this.editPacageJson = () => {
            return;
        };
        this.installPackages = () => {
            return;
        };
        this.run = () => {
            this.createTopDir();
            this.yarnInit();
            this.createVscodeSettings();
            this.createChilderns();
            this.createTsConfig();
            this.installPackages();
            this.installTypescriptPackages();
            this.git();
            this.installEslintETC();
            this.createEslintrc();
            this.installJest();
            this.createJestConfing();
            this.editPacageJson();
        };
        this.topPath = topPath;
    }
}
exports.CreateEnv = CreateEnv;
