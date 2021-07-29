"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBackTsConfig = void 0;
const CreateTopTsConfig_1 = require("../createEnvScripts/CreateTopTsConfig");
class CreateBackTsConfig extends CreateTopTsConfig_1.CreateTopTsConfig {
    constructor(filePath) {
        super(filePath);
        this.fileData = {
            compilerOptions: {
                outDir: './dist',
                target: 'ES2015',
                moduleResolution: 'node',
                module: 'commonjs',
                strict: true,
            },
            include: ['./src/**/*'],
            exclude: ['./node_modules'],
        };
    }
}
exports.CreateBackTsConfig = CreateBackTsConfig;
