"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCodgenYml_1 = require("./createEnvScripts/CreateCodgenYml");
const InstallGraphQLClient_1 = require("./install-packages/InstallGraphQLClient");
const CdAndInstall_1 = require("./model/CdAndInstall");
const main = () => {
    new CreateCodgenYml_1.CreateCodegenYml('').writeFile();
    new CdAndInstall_1.CdAndInstall('', InstallGraphQLClient_1.installGraphqlClient).exeInstall();
    new CdAndInstall_1.CdAndInstall('', InstallGraphQLClient_1.DInstallGraphQLClinet).exeInstall('D');
};
main();
