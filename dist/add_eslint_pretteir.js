"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CdAndInstall_1 = require("./model/CdAndInstall");
const InstallEslintPrettierHuskyPackages_1 = require("./install-packages/InstallEslintPrettierHuskyPackages");
const InstallEslintPrettierHuskyPackages_2 = require("./install-packages/InstallEslintPrettierHuskyPackages");
const CreateEslintrc_1 = require("./createEnvScripts/CreateEslintrc");
const CreateVscodeSettings_1 = require("./createEnvScripts/CreateVscodeSettings");
const EditJsonFile_1 = require("./createEnvScripts/EditJsonFile");
const main = () => {
    const topPath = '';
    const isReact = process.argv[2];
    if (isReact === 'react') {
        console.log('react');
        const cdAndDInastall = new CdAndInstall_1.CdAndInstall(topPath, InstallEslintPrettierHuskyPackages_2.DInstallEsLintPrettierHuskyPackagesReact);
        cdAndDInastall.exeInstall('D');
        new CreateEslintrc_1.CreateEslintrc(topPath, 'react').writeFile();
    }
    if (isReact === undefined) {
        const cdAndDInastall = new CdAndInstall_1.CdAndInstall(topPath, InstallEslintPrettierHuskyPackages_1.DInstallEsLintPrettierHuskyPackagesBack);
        cdAndDInastall.exeInstall('D');
        new CreateEslintrc_1.CreateEslintrc(topPath, 'back').writeFile();
    }
    new CreateVscodeSettings_1.CreateVscodeSettings(topPath).createDirAndFile();
    const scripts = {
        prepare: 'husky install',
        'lint-staged': 'lint-staged',
        'lint-fix': "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'",
    };
    const lintStaged = {
        'src/**/*.{js,ts,tsx}': ['npm run lint-fix'],
    };
    const prettier = {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 4,
    };
    new EditJsonFile_1.EditJsonFile('package.json', 'scripts', scripts).add();
    new EditJsonFile_1.EditJsonFile('package.json', 'lint-staged', lintStaged).edit();
    new EditJsonFile_1.EditJsonFile('package.json', 'prettier', prettier).edit();
};
main();
