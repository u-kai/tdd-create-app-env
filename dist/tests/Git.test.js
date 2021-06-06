"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Giter_1 = require("model/Giter");
const IsExist_1 = require("./model/IsExist");
const gitPath = "top";
const gitIgnore = "top/.gitignore";
const giter = new Giter_1.Giter(gitPath);
giter.init();
giter.createIgnore();
it("is Exits .git and ignore", () => {
    expect(IsExist_1.isExist(`${gitPath}/.git`)).toEqual(true);
    expect(IsExist_1.isExist(gitIgnore)).toEqual(true);
});
