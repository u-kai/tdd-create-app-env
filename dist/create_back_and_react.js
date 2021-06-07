"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateBackAndReactEnv_1 = require("./createEnvScripts/CreateBackAndReactEnv");
const path = require("path");
const main = () => {
    const dir = path.resolve(process.argv[2]);
    const createBackAndReactEnv = new CreateBackAndReactEnv_1.CreateBackAndReactEnv(dir);
    createBackAndReactEnv.run();
};
main();
