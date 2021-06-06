"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUnderDirectory_1 = require("../createEnvScripts/CreateUnderDirectory");
const CreateTopDirectory_1 = require("../createEnvScripts/CreateTopDirectory");
const path = require("path");
const fs = require("fs");
const topPath = path.resolve('top');
const createTopDirectory = new CreateTopDirectory_1.CreateTopDirectory(topPath);
createTopDirectory.mkdir();
const createFrontDirectory = new CreateUnderDirectory_1.CreateUnderDirectory(topPath, 'top-front');
const createBackDirectory = new CreateUnderDirectory_1.CreateUnderDirectory(topPath, 'top-back');
createFrontDirectory.mkdir();
createBackDirectory.mkdir();
it('front is exist?', () => {
    const frontPath = path.resolve('top', `top-front`);
    const backPath = path.resolve('top', `top-back`);
    expect(fs.existsSync(frontPath)).toEqual(true);
    expect(fs.existsSync(backPath)).toEqual(true);
});
