"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateBackEnv_1 = require("./createEnvScripts/CreateBackEnv");
const main = () => {
    const dir = process.argv[2];
    const createBackEnv = new CreateBackEnv_1.CreateBackEnv(dir);
    createBackEnv.run();
};
main();
