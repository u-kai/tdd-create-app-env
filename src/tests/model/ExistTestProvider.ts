import * as path from "path"
import {isExist} from "./IsExist"
export class ExistTestProvider{
    private topPath:string
    private childrens:string[]
    constructor(topPath:string,childrens:string[]){
        this.topPath = topPath
        this.childrens = childrens
    }
    test = () => {
        it(`test exits ${this.topPath} and Unders`,()=>{
            expect(isExist(this.topPath)).toEqual(true)
            this.childrens.map((childeren)=>{
                expect(isExist(path.resolve(this.topPath,childeren))).toEqual(true)
            })
        })
    }
}