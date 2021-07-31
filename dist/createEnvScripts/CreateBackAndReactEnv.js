"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBackAndReactEnv = void 0;
const CreateTopDirectory_1 = require("../createEnvScripts/CreateTopDirectory");
const CreateTopTsConfig_1 = require("../createEnvScripts/CreateTopTsConfig");
const CreateBackEnv_1 = require("../createEnvScripts/CreateBackEnv");
const UseCreateReactAPP_1 = require("../createEnvScripts/UseCreateReactAPP");
const path = require("path");
class CreateBackAndReactEnv {
    constructor(topPath) {
        this.run = () => {
            const createTopDir = new CreateTopDirectory_1.CreateTopDirectory(this.topPath);
            createTopDir.mkdir();
            const createTsConfig = new CreateTopTsConfig_1.CreateTopTsConfig(this.topPath);
            createTsConfig.createFile();
            //
            //const createTopSchema = new CreateTopSchema(this.topPath)
            //createTopSchema.createFile()
            //const createTopCodegenYaml = new CreateCodegenYml(this.topPath)
            // createTopCodegenYaml.writeFile()
            const createReact = new UseCreateReactAPP_1.UseCreateReactAPP(this.reactPath);
            const createBack = new CreateBackEnv_1.CreateBackEnv(this.backPath);
            createReact.run();
            createBack.run();
        };
        this.console = () => {
            console.log(this.topPath);
            console.log(this.reactPath);
            console.log(this.backPath);
        };
        this.topPath = topPath;
        this.reactPath = path.resolve(this.topPath, `${this.topPath}-react`);
        this.backPath = path.resolve(this.topPath, `${this.topPath}-back`);
    }
}
exports.CreateBackAndReactEnv = CreateBackAndReactEnv;
