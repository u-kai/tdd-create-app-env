"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateBackAndReactEnv_1 = require("../createEnvScripts/CreateBackAndReactEnv");
const ExistTestProvider_1 = require("./model/ExistTestProvider");
const topPath = "top-env";
const subPaths = [
    "top-env-react",
    "top-env-back",
    // "tsconfig.json"
];
const childrens = [
    // "dist",
    "src",
    "package.json",
    "tsconfig.json",
    "node_modules",
    "node_modules/typescript",
    ".eslintrc.js",
    ".git",
    ".gitignore",
    // "jest.config.ts"
];
const makeSubPaths = subPaths.map((sub) => {
    const subpath = childrens.map((children) => {
        return `${sub}/${children}`;
    });
    return subpath;
}).join().split(",");
const createBackAndReactEnv = new CreateBackAndReactEnv_1.CreateBackAndReactEnv(topPath);
createBackAndReactEnv.run();
makeSubPaths.map((m) => console.log(m));
const existTestProvider = new ExistTestProvider_1.ExistTestProvider(topPath, makeSubPaths);
existTestProvider.test();
