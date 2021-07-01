import { DirectoryMaker } from '../model/DirectoryMaker'
import { exeCommand } from '../functions/ExeCommand'
import { CreateDistSrcBuild } from '../createEnvScripts/CreateDistSrcBuild'
import { CdAndInstall } from '../model/CdAndInstall'
import { DInstallTypescriptReactPackages } from '../install-packages/InstallTypescriptPackages'
import { Giter } from '../model/Giter'
import { DInstallEsLintPrettierHuskyPackagesReact } from '../install-packages/InstallEslintPrettierHuskyPackages'
import { CreateJestConfig } from '../createEnvScripts/CreateJestConfig'
import { DInstallJestPackages } from '../install-packages/InstallJestPackages'
import { CreateVscodeSettings } from 'createEnvScripts/CreateVscodeSettings'

export class CreateEnv {
    topPath: string
    constructor(topPath: string) {
        this.topPath = topPath
    }
    createTopDir = (): void => {
        const mkdir = new DirectoryMaker(this.topPath)
        mkdir.mkdir()
    }
    createVscodeSettings = (): void => {
        const createVscodeSettings = new CreateVscodeSettings(this.topPath)
        createVscodeSettings.createDirAndFile()
    }
    createChilderns = (): void => {
        const createDistSrcBuild = new CreateDistSrcBuild(this.topPath)
        createDistSrcBuild.mkdirs()
    }
    yarnInit = (): void => {
        const cmd = `cd ${this.topPath}
        yarn init -y`
        exeCommand(cmd)
    }
    git = (): void => {
        const giter = new Giter(this.topPath)
        giter.init()
        giter.createIgnore()
    }
    installTypescriptPackages = (): void => {
        const cdAndDInastall = new CdAndInstall(this.topPath, DInstallTypescriptReactPackages)
        cdAndDInastall.exeInstall('D')
    }
    createTsConfig = (): void => {
        return
    }
    installEslintETC = (): void => {
        const cdAndDInastall = new CdAndInstall(this.topPath, DInstallEsLintPrettierHuskyPackagesReact)
        cdAndDInastall.exeInstall('D')
    }
    createEslintrc = (): void => {
        return
    }
    installJest = (): void => {
        const cdAndDInastall = new CdAndInstall(this.topPath, DInstallJestPackages)
        cdAndDInastall.exeInstall()
    }
    createJestConfing = (): void => {
        const createJestConfing = new CreateJestConfig(this.topPath)
        createJestConfing.writeFile()
    }
    editPacageJson = (): void => {
        return
    }
    installPackages = (): void => {
        return
    }
    run = (): void => {
        this.createTopDir()
        this.yarnInit()
        this.createVscodeSettings()
        this.createChilderns()
        this.createTsConfig()
        this.installPackages()
        this.installTypescriptPackages()
        this.git()
        this.installEslintETC()
        this.createEslintrc()
        this.installJest()
        this.createJestConfing()
        this.editPacageJson()
    }
}
