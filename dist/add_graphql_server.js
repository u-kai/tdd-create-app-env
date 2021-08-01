"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCodgenYml_1 = require("./createEnvScripts/CreateCodgenYml");
const CreateTopSchema_1 = require("./createEnvScripts/CreateTopSchema");
const InstallGraphQLServers_1 = require("./install-packages/InstallGraphQLServers");
const CdAndInstall_1 = require("./model/CdAndInstall");
const main = () => {
    new CreateCodgenYml_1.CreateCodegenYml('').writeFile();
    new CreateTopSchema_1.CreateTopSchema('').createFile();
    new CdAndInstall_1.CdAndInstall('', InstallGraphQLServers_1.InstallGraphQl).exeInstall();
    new CdAndInstall_1.CdAndInstall('', InstallGraphQLServers_1.DInstallGraphQL).exeInstall('D');
};
main();
