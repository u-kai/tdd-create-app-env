import * as fs from "fs"
import {DirectoryMaker} from "../model/DirectoryMaker"


const topDirectory = process.argv[3]
const topMkdir = new DirectoryMaker(topDirectory)
topMkdir.mkdir()
it("is top directory exits",()=>{
    expect(fs.existsSync(topDirectory)).toBe(true)
})