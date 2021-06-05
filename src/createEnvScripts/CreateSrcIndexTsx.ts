import {FileMaker} from "model/FileMaker"
export const createSrcIndexTsx = () => {
    const fileContents = `import * as React from "react"
import * as ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        Hello DICT
    </div>,
    document.getElementById("root")
)`
    const fileMaker = new FileMaker("src/index.tsx",fileContents)
    fileMaker.writeFile()
}
