"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCreateReactAPP = void 0;
const CreateEslintrc_1 = require("./CreateEslintrc");
const InstallEslintPrettierHuskyPackages_1 = require("../install-packages/InstallEslintPrettierHuskyPackages");
const Giter_1 = require("../model/Giter");
const ExeCommand_1 = require("../functions/ExeCommand");
const CdAndInstall_1 = require("../model/CdAndInstall");
const ExeHusky_1 = require("../createEnvScripts/ExeHusky");
const UseCreateReactAppPackageJson_1 = require("../createEnvScripts/UseCreateReactAppPackageJson");
const CreateENVFile_1 = require("../createEnvScripts/CreateENVFile");
const InstallCreateReactAppPackages_1 = require("../install-packages/InstallCreateReactAppPackages");
const CreateUnderSrc_1 = require("../createEnvScripts/CreateUnderSrc");
class UseCreateReactAPP {
    constructor(topPath) {
        this.createReactApp = () => {
            const cmd = `npx create-react-app ${this.topPath} --template typescript`;
            ExeCommand_1.exeCommand(cmd);
        };
        this.git = () => {
            const giter = new Giter_1.Giter(this.topPath);
            giter.init();
            giter.createIgnore();
        };
        this.createEslintrc = () => {
            const createExlintrc = new CreateEslintrc_1.CreateEslintrc(this.topPath, 'react');
            createExlintrc.writeFile();
        };
        this.installEslintETC = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallEslintPrettierHuskyPackages_1.DInstallEsLintPrettierHuskyPackagesReact);
            cdAndDInastall.exeInstall('D');
        };
        this.editPackage = () => {
            UseCreateReactAppPackageJson_1.editReactPackageJson(this.topPath);
        };
        this.exeHusky = () => {
            const exeHusky = new ExeHusky_1.ExeHusky(this.topPath);
            exeHusky.exeHusky();
        };
        this.createEnvFile = () => {
            CreateENVFile_1.createEnvFile(this.topPath);
        };
        this.installPackages = () => {
            const cdAndInstall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallCreateReactAppPackages_1.installCreateReactAppPackages);
            cdAndInstall.exeInstall();
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallCreateReactAppPackages_1.DInstallCreateReactAppPackages);
            cdAndDInastall.exeInstall('D');
        };
        this.createUnderSrc = () => {
            const createUnderSrc = new CreateUnderSrc_1.CreateUnderSrc(this.topPath);
            createUnderSrc.mkdirs();
        };
        this.run = () => {
            this.createReactApp();
            this.createEnvFile();
            this.git();
            this.createEslintrc();
            this.installEslintETC();
            this.editPackage();
            // this.exeHusky()
            this.installPackages();
            this.createUnderSrc();
        };
        this.topPath = topPath;
    }
}
exports.UseCreateReactAPP = UseCreateReactAPP;
