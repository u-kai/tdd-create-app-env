import {CreateTopTsConfig} from "createEnvScripts/CreateTopTsConfig"

export class CreateFrontTsConfig extends CreateTopTsConfig{
    constructor(filePath:string){
        super(filePath)
        this.fileData = {
            "compilerOptions": {
              "outDir": "./dist",
              "target": "ES2015",
              "moduleResolution": "node",
              "module": "esnext",
              "strict": true,
              "baseUrl":"src"
            },
            "include": [
              "./src/**/*"
            ],
            "exclude": ["./node_modules"]
          }
    }
}