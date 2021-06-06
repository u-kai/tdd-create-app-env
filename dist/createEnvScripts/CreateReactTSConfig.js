"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactTsConfig = void 0;
const createTopTsConfig_1 = require("../createEnvScripts/createTopTsConfig");
class CreateReactTsConfig extends createTopTsConfig_1.CreateTopTsConfig {
    constructor(filePath) {
        super(filePath);
        this.fileData = {
            outDir: './dist',
            target: 'ES2015',
            moduleResolution: 'commonjs',
            module: 'esnext',
            strict: true,
            baseUrl: 'src',
            jsx: 'react',
        };
    }
}
exports.CreateReactTsConfig = CreateReactTsConfig;
