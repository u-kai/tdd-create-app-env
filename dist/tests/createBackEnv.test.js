"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateBackEnv_1 = require("createEnvScripts/CreateBackEnv");
const ExistTestProvider_1 = require("./model/ExistTestProvider");
const topPath = "top-back";
const paths = [
    "dist",
    "src",
    // "build",
    "package.json",
    "tsconfig.json",
    "node_modules",
    "node_modules/mysql2",
    "node_modules/typescript",
    ".eslintrc.js",
    ".git",
    ".gitignore",
    "jest.config.ts"
];
const createReactEnv = new CreateBackEnv_1.CreateBackEnv(topPath);
createReactEnv.run();
const existTestProvider = new ExistTestProvider_1.ExistTestProvider(topPath, paths);
existTestProvider.test();
