import { CreateTopDirectory } from '../createEnvScripts/CreateTopDirectory'
import { CreateTopTsConfig } from '../createEnvScripts/CreateTopTsConfig'
import { CreateBackEnv } from '../createEnvScripts/CreateBackEnv'
import { UseCreateReactAPP } from '../createEnvScripts/UseCreateReactAPP'
import * as path from 'path'
import { CreateTopSchema } from './CreateTopSchema'
import { CreateCodegenYml } from './CreateCodgenYml'
export class CreateBackAndReactEnv {
    topPath: string
    reactPath: string
    backPath: string
    constructor(topPath: string) {
        this.topPath = topPath
        this.reactPath = path.resolve(this.topPath, `${this.topPath}-react`)
        this.backPath = path.resolve(this.topPath, `${this.topPath}-back`)
    }
    run = () => {
        const createTopDir = new CreateTopDirectory(this.topPath)
        createTopDir.mkdir()
        const createTsConfig = new CreateTopTsConfig(this.topPath)
        createTsConfig.createFile()
        //
        //const createTopSchema = new CreateTopSchema(this.topPath)
        //createTopSchema.createFile()
        //const createTopCodegenYaml = new CreateCodegenYml(this.topPath)
        // createTopCodegenYaml.writeFile()
        const createReact = new UseCreateReactAPP(this.reactPath)
        const createBack = new CreateBackEnv(this.backPath)
        createReact.run()
        createBack.run()
    }
    console = () => {
        console.log(this.topPath)
        console.log(this.reactPath)
        console.log(this.backPath)
    }
}
