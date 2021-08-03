"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCodegenYml = void 0;
const FileMaker_1 = require("../model/FileMaker");
const path_1 = require("path");
class CreateCodegenYml {
    constructor(dirname) {
        this.writeFile = () => {
            return new FileMaker_1.FileMaker(this.filePath, this.fileContents).writeFile();
        };
        this.filePath = path_1.join(dirname, 'codegen.yml');
        this.fileContents = `overwrite: true
generates:
          ./src/types/generated/graphql.ts:
            schema: schema.graphql
            config:
              useIndexSignature: true
              # リゾルバーのためのContextの型をsrc/types/context.d.tsから読み込む
              contextType: ../context#Context
            plugins:
              - typescript
              - typescript-resolvers`;
    }
}
exports.CreateCodegenYml = CreateCodegenYml;
