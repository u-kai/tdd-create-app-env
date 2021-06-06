"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const CreateTSConfig_1 = require("../createEnvScripts/CreateTSConfig");
const dir = 'top-front';
const tsConfigPath = path.resolve('top', dir);
const createFrontTsConfig = new CreateTSConfig_1.CreateTSConfig(tsConfigPath);
createFrontTsConfig.createFile();
it('createTSConfig test', () => {
    expect(fs.existsSync(tsConfigPath)).toEqual(true);
});
