import {execSync} from "child_process"

const cmd = `cd top/top-back
yarn init -y
yarn add -D typescript
`
export const installPackages = () => {
    const stdout  = execSync(cmd)
    console.log(stdout)
} 