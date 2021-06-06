"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCreateReactAPP = void 0;
const CreateReactEslintrc_1 = require("../createEnvScripts/CreateReactEslintrc");
const InstallEslintPrettierHuskyPackages_1 = require("../install-packages/InstallEslintPrettierHuskyPackages");
const Giter_1 = require("../model/Giter");
const ExeCommand_1 = require("../functions/ExeCommand");
const CdAndInstall_1 = require("../model/CdAndInstall");
const ExeHusky_1 = require("../createEnvScripts/ExeHusky");
const UseCreateReactAppPackageJson_1 = require("../createEnvScripts/UseCreateReactAppPackageJson");
const CreateENVFile_1 = require("../createEnvScripts/CreateENVFile");
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
            const createExlintrc = new CreateReactEslintrc_1.CreateReactEslintrc(this.topPath);
            createExlintrc.writeFile();
        };
        this.installEslintETC = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallEslintPrettierHuskyPackages_1.DInstallEsLintPrettierHuskyPackagesReact);
            cdAndDInastall.exeInstall();
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
        this.run = () => {
            this.createReactApp();
            this.git();
            this.createEslintrc();
            this.installEslintETC();
            this.editPackage();
            this.exeHusky();
            this.createEnvFile();
        };
        this.topPath = topPath;
    }
}
exports.UseCreateReactAPP = UseCreateReactAPP;
