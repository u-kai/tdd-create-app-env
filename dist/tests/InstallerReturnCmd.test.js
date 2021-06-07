"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Installer_1 = require("model/Installer");
const packages = ["react", "react-dom"];
const DPackages = ["typescript", "ts-loader"];
const installer = new Installer_1.Installer(packages);
const DInstaller = new Installer_1.Installer(DPackages);
const cmd = installer.returnCmd();
const DCmd = DInstaller.returnDCmd();
it("Do installer output cmd?", () => {
    expect(cmd).toEqual(`yarn add react
yarn add react-dom`);
    expect(DCmd).toEqual(`yarn add -D typescript
yarn add -D ts-loader`);
});