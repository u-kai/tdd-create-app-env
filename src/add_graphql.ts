import { CreateCodegenYml } from './createEnvScripts/CreateCodgenYml'
import { CreateTopSchema } from './createEnvScripts/CreateTopSchema'
import { DInstallGraphQL, InstallGraphQl } from './install-packages/InstallGraphQLServers'
import { CdAndInstall } from './model/CdAndInstall'

const main = () => {
    new CreateCodegenYml('').writeFile()
    new CreateTopSchema('').createFile()
    new CdAndInstall('', InstallGraphQl).exeInstall()
    new CdAndInstall('', DInstallGraphQL).exeInstall('D')
}

main()
