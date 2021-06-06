"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateFrontDirectory_1 = require("../createEnvScripts/CreateFrontDirectory");
const path = require("path");
const fs = require("fs");
const topPath = path.resolve('top');
const frontPath = path.resolve('top', `top-front`);
const createFrontDirectory = new CreateFrontDirectory_1.CreateFrontDirectory(topPath);
createFrontDirectory.mkdir();
it('front is exist?', () => {
    expect(fs.existsSync(frontPath)).toEqual(true);
});
