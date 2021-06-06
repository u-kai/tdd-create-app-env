"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateTopDirectory_1 = require("../createEnvScripts/CreateTopDirectory");
const path = require("path");
const fs = require("fs");
const topDirectoryPath = path.resolve('top');
const createTopDirectory = new CreateTopDirectory_1.CreateTopDirectory(topDirectoryPath);
createTopDirectory.mkdir();
it('top is Exits', () => {
    expect(fs.existsSync(topDirectoryPath)).toEqual(true);
});
