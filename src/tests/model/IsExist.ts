import * as fs from "fs"

export const isExist = (path:string) => {
    return fs.existsSync(path)
}