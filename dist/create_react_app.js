"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UseCreateReactApp_1 = require("./createEnvScripts/UseCreateReactApp");
const main = () => {
    const dir = process.argv[2];
    const useCreateReactAPP = new UseCreateReactApp_1.UseCreateReactAPP(dir);
    useCreateReactAPP.run();
};
main();
