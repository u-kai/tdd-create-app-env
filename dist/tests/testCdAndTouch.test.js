"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const child_process_1 = require("child_process");
const dir = 'top/top-front';
const cmd = `
cd top
cd top-front
npm run ts-node ../../src/createEnvScripts/CreateDistSrcBuild.ts
`;
const src = 'src';
const modulePath = path.resolve(dir, src);
const stdout = child_process_1.execSync(cmd);
console.log(stdout.toString());
it('cd -> mkdris ', () => {
    expect(fs.existsSync(modulePath)).toEqual(true);
});
