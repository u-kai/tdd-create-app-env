"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const CreateTopTsConfig_1 = require("../createEnvScripts/CreateTopTsConfig");
const path = require("path");
const purposeFilePath = path.resolve('src/tests/purposeFiles');
const topTsConfigPath = path.resolve('src/tests/testFiles');
const createTopTsConfig = new CreateTopTsConfig_1.CreateTopTsConfig(topTsConfigPath);
createTopTsConfig.createFile();
const purposeJson = JSON.parse(fs.readFileSync(purposeFilePath, 'utf-8'));
const data = JSON.parse(fs.readFileSync(topTsConfigPath, 'utf-8'));
it('data to json? and equal?', () => {
    expect(purposeJson).toStrictEqual(data);
});
