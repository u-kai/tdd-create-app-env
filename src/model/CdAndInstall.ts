import { Installer } from '../model/Installer'
import { exeCommand } from '../functions/ExeCommand'
export class CdAndInstall extends Installer {
    private cdPath: string
    constructor(cdPath: string, packages: string[]) {
        super(packages)
        this.cdPath = cdPath
    }
    returnCmdWithCd = (): string => {
        if (this.cdPath === '') {
            return this.returnCmd()
        }
        return `cd ${this.cdPath}\n${this.returnCmd()}`
    }

    returnDCmdWithCd = (): string => {
        if (this.cdPath === '') {
            return this.returnCmd()
        }
        return `cd ${this.cdPath}\n${this.returnDCmd()}`
    }
    exeInstall = (d?: 'D'): void => {
        if (d) {
            exeCommand(this.returnDCmdWithCd())
            return
        }
        exeCommand(this.returnCmdWithCd())
    }
}
