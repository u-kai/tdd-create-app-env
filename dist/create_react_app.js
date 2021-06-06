"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UseCreateReactApp_1 = require("./createEnvScripts/UseCreateReactApp");
const path = require("path");
const main = () => {
    const dir = path.resolve(process.argv[2]);
    const useCreateReactAPP = new UseCreateReactApp_1.UseCreateReactAPP(dir);
    useCreateReactAPP.run();
};
main();
