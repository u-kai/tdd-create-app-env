"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSrcIndexHtml = void 0;
const FileMaker_1 = require("../model/FileMaker");
const createSrcIndexHtml = () => {
    const fileContents = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
    `;
    const fileMaker = new FileMaker_1.FileMaker("src/index.html", fileContents);
    fileMaker.writeFile();
};
exports.createSrcIndexHtml = createSrcIndexHtml;
