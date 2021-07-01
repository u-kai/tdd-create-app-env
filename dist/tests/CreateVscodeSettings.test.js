"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateVscodeSettings_1 = require("createEnvScripts/CreateVscodeSettings");
const fs = require("fs");
const setting = new CreateVscodeSettings_1.CreateVscodeSettings('src');
setting.createDirAndFile();
it('is create .vscode/settings.json', () => {
    expect(fs.existsSync('src/.vscode/settings.json')).toBe(true);
});
