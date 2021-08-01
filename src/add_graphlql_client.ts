import { CreateCodegenYml } from './createEnvScripts/CreateCodgenYml'
import { DInstallGraphQLClinet, installGraphqlClient } from './install-packages/InstallGraphQLClient'
import { CdAndInstall } from './model/CdAndInstall'

const main = () => {
    new CreateCodegenYml('').writeFile()
    new CdAndInstall('', installGraphqlClient).exeInstall()
    new CdAndInstall('', DInstallGraphQLClinet).exeInstall('D')
}

main()
