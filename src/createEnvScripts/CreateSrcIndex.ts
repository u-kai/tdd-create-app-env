import {FileMaker} from "model/FileMaker"
export const createSrcIndex = () => {
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
    `
    const fileMaker = new FileMaker("src/index.html",fileContents)
    fileMaker.writeFile()
}