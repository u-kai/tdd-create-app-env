"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnderSrc = void 0;
const CreateDistSrcBuild_1 = require("../createEnvScripts/CreateDistSrcBuild");
class CreateUnderSrc extends CreateDistSrcBuild_1.CreateDistSrcBuild {
    constructor(topPath) {
        super(topPath);
        this.makeDirectorys = ["components",
            "hocks",
            "types",
            "router",
            "store",
            "model",
            "functions",
            "components/atoms",
            "components/templates",
            "components/organisms",
            "components/pages",
            "components/molecules",
        ];
        this.topPath = `${topPath}/src`;
    }
}
exports.CreateUnderSrc = CreateUnderSrc;
