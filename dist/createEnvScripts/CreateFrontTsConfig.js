"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFrontTsConfig = void 0;
const CreateTopTsConfig_1 = require("../createEnvScripts/CreateTopTsConfig");
class CreateFrontTsConfig extends CreateTopTsConfig_1.CreateTopTsConfig {
    constructor(filePath) {
        super(filePath);
        this.fileData = {
            "compilerOptions": {
                "outDir": "./dist",
                "target": "ES2015",
                "moduleResolution": "node",
                "module": "esnext",
                "strict": true,
                "baseUrl": "src"
            },
            "include": [
                "./src/**/*"
            ],
            "exclude": ["./node_modules"]
        };
    }
}
exports.CreateFrontTsConfig = CreateFrontTsConfig;
