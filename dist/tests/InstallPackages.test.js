"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CdAndInstall_1 = require("model/CdAndInstall");
const IsExist_1 = require("./model/IsExist");
const cdPath = "top/top-front";
const packages = ["react", "react-dom"];
const cdAndInstall = new CdAndInstall_1.CdAndInstall(cdPath, packages);
const purposePath = "top/top-front/node_modules/react";
cdAndInstall.exeInstall();
it("is installed", () => {
    expect(IsExist_1.isExist(purposePath)).toBe(true);
});
