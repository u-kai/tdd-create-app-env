"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactEnv = void 0;
const DirectoryMaker_1 = require("../model/DirectoryMaker");
const ExeCommand_1 = require("../functions/ExeCommand");
const CreateDistSrcBuild_1 = require("../createEnvScripts/CreateDistSrcBuild");
const CreateReactTSConfig_1 = require("../createEnvScripts/CreateReactTSConfig");
const CdAndInstall_1 = require("../model/CdAndInstall");
const InstallReactPackages_1 = require("../install-packages/InstallReactPackages");
const InstallTypescriptPackages_1 = require("../install-packages/InstallTypescriptPackages");
const CreateReactWebpackConfig_1 = require("../createEnvScripts/CreateReactWebpackConfig");
const InstallWebpackPackages_1 = require("../install-packages/InstallWebpackPackages");
const CreateSrcIndex_1 = require("../createEnvScripts/CreateSrcIndex");
const Giter_1 = require("../model/Giter");
const CreateReactEslintrc_1 = require("../createEnvScripts/CreateEslintrc");
const InstallEslintPrettierHuskyPackages_1 = require("../install-packages/InstallEslintPrettierHuskyPackages");
const CreateJestConfig_1 = require("../createEnvScripts/CreateJestConfig");
const InstallJestPackages_1 = require("../install-packages/InstallJestPackages");
const PackageJsonOperater_1 = require("../createEnvScripts/PackageJsonOperater");
const CreateUnderSrc_1 = require("../createEnvScripts/CreateUnderSrc");
const CreateENVFile_1 = require("../createEnvScripts/CreateENVFile");
class CreateReactEnv {
    constructor(topPath) {
        this.createTopDir = () => {
            const mkdir = new DirectoryMaker_1.DirectoryMaker(this.topPath);
            mkdir.mkdir();
        };
        this.yarnInit = () => {
            const cmd = `cd ${this.topPath}
        yarn init -y`;
            ExeCommand_1.exeCommand(cmd);
        };
        this.createChilderns = () => {
            const createDistSrcBuild = new CreateDistSrcBuild_1.CreateDistSrcBuild(this.topPath);
            createDistSrcBuild.mkdirs();
        };
        this.createTsConfig = () => {
            const createReactTsConfig = new CreateReactTSConfig_1.CreateReactTsConfig(this.topPath);
            createReactTsConfig.createFile();
        };
        this.installReactPackages = () => {
            const cdAndInstall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallReactPackages_1.installReactPakcages);
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallReactPackages_1.DInstallReactPackages);
            cdAndInstall.exeInstall();
            cdAndDInastall.exeInstall("D");
        };
        this.installTypescriptPackages = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallTypescriptPackages_1.DInstallTypescriptReactPackages);
            cdAndDInastall.exeInstall("D");
        };
        this.createWeppackConfig = () => {
            const createReactWebpackConfig = new CreateReactWebpackConfig_1.CreateReactWebpackConfig(this.topPath);
            createReactWebpackConfig.writeFile();
        };
        this.installWebpackPackages = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallWebpackPackages_1.DInstallWebpackPackages);
            cdAndDInastall.exeInstall();
        };
        this.createSrcIndex = () => {
            const createSrcIndex = new CreateSrcIndex_1.CreateSrcIndex(this.topPath);
            createSrcIndex.createHtml();
            createSrcIndex.createTsx();
        };
        this.git = () => {
            const giter = new Giter_1.Giter(this.topPath);
            giter.init();
            giter.createIgnore();
        };
        this.installEslintETC = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallEslintPrettierHuskyPackages_1.DInstallEsLintPrettierHuskyPackagesReact);
            cdAndDInastall.exeInstall();
        };
        this.createEslintrc = () => {
            const createExlintrc = new CreateReactEslintrc_1.CreateEslintrc(this.topPath);
            createExlintrc.writeFile();
        };
        this.installJest = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallJestPackages_1.DInstallJestPackages);
            cdAndDInastall.exeInstall();
        };
        this.installReactJest = () => {
            const cdAndDInastall = new CdAndInstall_1.CdAndInstall(this.topPath, InstallJestPackages_1.DInstallJestPackagesReact);
            cdAndDInastall.exeInstall();
        };
        this.createJestConfing = () => {
            const createJestConfing = new CreateJestConfig_1.CreateJestConfig(this.topPath);
            createJestConfing.writeFile();
        };
        this.editPacageJson = () => {
            const editPackage = new PackageJsonOperater_1.PackageJsonOperater(this.topPath);
            editPackage.editToReact();
        };
        this.createEnvFile = () => {
            CreateENVFile_1.createEnvFile(this.topPath);
        };
        this.createUnderSrc = () => {
            const createUnderSrc = new CreateUnderSrc_1.CreateUnderSrc(this.topPath);
            createUnderSrc.mkdirs();
        };
        this.run = () => {
            this.createTopDir();
            this.yarnInit();
            this.createChilderns();
            this.createTsConfig();
            this.installReactPackages();
            this.installTypescriptPackages();
            this.installWebpackPackages();
            this.createWeppackConfig();
            this.createSrcIndex();
            this.git();
            this.installEslintETC();
            this.createEslintrc();
            this.installJest();
            this.createJestConfing();
            this.installReactJest();
            this.editPacageJson();
            this.createEnvFile();
            this.createUnderSrc();
        };
        this.topPath = topPath;
    }
}
exports.CreateReactEnv = CreateReactEnv;
