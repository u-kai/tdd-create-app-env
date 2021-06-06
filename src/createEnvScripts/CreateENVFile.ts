import {FileMaker} from "../model/FileMaker"
import * as path from "path"
export const createEnvFile = (topPath:string) => {
    const filePath = path.resolve(topPath,"src",".env")
    const fileContents = `SKIP_PREFLIGHT_CHECK=true`
    const fileMaker = new FileMaker(filePath,fileContents)
    fileMaker.writeFile()

}