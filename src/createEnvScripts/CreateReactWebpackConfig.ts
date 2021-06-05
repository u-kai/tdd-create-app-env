import {FileMaker} from "../model/FileMaker"
import {reactWebpackConfigData} from "../file-data/reactWebpackConfigData"
export class CreateReactWebpackConfig extends FileMaker{
    constructor(filePath:string){
        super(filePath,"")
        this.fileContents = reactWebpackConfigData
    }

}