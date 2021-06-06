"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSrcIndex = void 0;
const FileMaker_1 = require("../model/FileMaker");
const path = require("path");
class CreateSrcIndex {
    constructor(topPath) {
        this.createHtml = () => {
            const fileContents = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>`;
            const htmlPath = path.resolve(this.topPath, "src/index.html");
            const fileMaker = new FileMaker_1.FileMaker(htmlPath, fileContents);
            fileMaker.writeFile();
        };
        this.createTsx = () => {
            const fileContents = `import * as React from "react"
import * as ReactDOM from "react-dom"

ReactDOM.render(
    <div>
        Hello DICT
    </div>,
    document.getElementById("root")
)`;
            const tsxPath = path.resolve(this.topPath, "src/index.tsx");
            const fileMaker = new FileMaker_1.FileMaker(tsxPath, fileContents);
            fileMaker.writeFile();
        };
        this.topPath = topPath;
    }
}
exports.CreateSrcIndex = CreateSrcIndex;
