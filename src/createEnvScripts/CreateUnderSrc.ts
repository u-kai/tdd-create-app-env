import {CreateDistSrcBuild} from "../createEnvScripts/CreateDistSrcBuild"
export class CreateUnderSrc extends CreateDistSrcBuild{
    topPath:string
    makeDirectorys = ["components",
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
    ]
    constructor(topPath:string){
        super(topPath)
        this.topPath = `${topPath}/src`
    }
}