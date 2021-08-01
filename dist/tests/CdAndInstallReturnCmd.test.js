"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CdAndInstall_1 = require("../model/CdAndInstall");
const cdPath = 'top/top-back';
const packages = ['react', 'react-dom'];
const DPackages = ['typescript', 'ts-loader'];
const installer = new CdAndInstall_1.CdAndInstall(cdPath, packages);
const DInstaller = new CdAndInstall_1.CdAndInstall(cdPath, DPackages);
const cmd = installer.returnCmdWithCd();
const DCmd = DInstaller.returnDCmdWithCd();
it('Do installer output cmd?', () => {
    expect(cmd).toEqual(`cd top/top-back
npm install react
npm install react-dom`);
    expect(DCmd).toEqual(`cd top/top-back
npm install -D typescript
npm install -D ts-loader`);
});
