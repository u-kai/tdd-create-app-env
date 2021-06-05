import {CreateTopTsConfig} from "createEnvScripts/createTopTsConfig"

export class CreateReactTSConfig extends CreateTopTsConfig{
    constructor(filePath:string){
        super(filePath)
        this.fileData = {
                "outDir": "./dist",
                "target": "ES2015",
                "moduleResolution": "commonjs",
                "module": "esnext",
                "strict": true,
                "baseUrl": "src",
                "jsx":"react"
            }
    }   
}