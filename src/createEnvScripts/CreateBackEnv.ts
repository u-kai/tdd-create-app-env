import { CreateEnv } from '../model/CreateEnv'
import { DInstallBackPackages, installBackPackages } from '../install-packages/InstallBackPackages'
import { CdAndInstall } from '../model/CdAndInstall'
import { DInstallTypescriptBackPackages } from '../install-packages/InstallTypescriptPackages'
import { DInstallEsLintPrettierHuskyPackagesBack } from '../install-packages/InstallEslintPrettierHuskyPackages'
import { CreateEslintrc } from './CreateEslintrc'
import { PackageJsonOperater } from '../createEnvScripts/PackageJsonOperater'
import { CreateBackTsConfig } from './CreateBackTsConfig'
export class CreateBackEnv extends CreateEnv {
    constructor(topPath: string) {
        super(topPath)
    }
    installPackages = (): void => {
        const cdAndInstall = new CdAndInstall(this.topPath, installBackPackages)
        const cdAndDInastall = new CdAndInstall(this.topPath, DInstallBackPackages)
        cdAndInstall.exeInstall()
        cdAndDInastall.exeInstall('D')
    }
    installTypescriptPackages = (): void => {
        const cdAndDInastall = new CdAndInstall(this.topPath, DInstallTypescriptBackPackages)
        cdAndDInastall.exeInstall('D')
    }
    installEslintETC = (): void => {
        const cdAndDInastall = new CdAndInstall(this.topPath, DInstallEsLintPrettierHuskyPackagesBack)
        cdAndDInastall.exeInstall('D')
    }
    createEslintrc = (): void => {
        const createExlintrc = new CreateEslintrc(this.topPath, 'back')
        createExlintrc.writeFile()
    }
    editPacageJson = (): void => {
        const editPackage = new PackageJsonOperater(this.topPath)
        editPackage.editToBack()
    }
    createTsConfig = (): void => {
        const createBackTsConfig = new CreateBackTsConfig(this.topPath)
        createBackTsConfig.createFile()
    }
}
