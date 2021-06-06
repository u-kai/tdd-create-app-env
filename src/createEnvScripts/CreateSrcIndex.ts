import {FileMaker} from "model/FileMaker"
import * as path from "path"
export class CreateSrcIndex{
    private topPath:string
    constructor(topPath:string){
        this.topPath = topPath
    }
    createHtml = () => {
        const fileContents = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>`
        const htmlPath = path.resolve(this.topPath,"src/index.html")
        const fileMaker = new FileMaker(htmlPath,fileContents)
        fileMaker.writeFile()
    }

    createTsx = ():void => {
        const fileContents = `import * as React from "react"
import * as ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        Hello DICT
    </div>,
    document.getElementById("root")
)`
    const tsxPath = path.resolve(this.topPath,"src/index.tsx")
    const fileMaker = new FileMaker(tsxPath,fileContents)
    fileMaker.writeFile()
    }
}


