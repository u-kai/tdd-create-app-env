import { FileMaker } from '../model/FileMaker'
import { join } from 'path'
export class CreateCodegenYml {
    private filePath: string
    private fileContents: string
    constructor(dirname: string) {
        this.filePath = join(dirname, 'codegen.yml')
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
              - typescript-resolvers`
    }
    writeFile = (): void => {
        return new FileMaker(this.filePath, this.fileContents).writeFile()
    }
}
