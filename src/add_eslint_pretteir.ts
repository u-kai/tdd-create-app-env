import { CdAndInstall } from './model/CdAndInstall'
import { DInstallEsLintPrettierHuskyPackagesBack } from './install-packages/InstallEslintPrettierHuskyPackages'
import { DInstallEsLintPrettierHuskyPackagesReact } from './install-packages/InstallEslintPrettierHuskyPackages'
import { CreateEslintrc } from './createEnvScripts/CreateEslintrc'
import { PackageJsonOperater } from './createEnvScripts/PackageJsonOperater'
import { CreateVscodeSettings } from './createEnvScripts/CreateVscodeSettings'
import { EditJsonFile } from './createEnvScripts/EditJsonFile'

const main = () => {
    const topPath = ''
    const isReact = process.argv[2]
    if (isReact === 'react') {
        console.log('react')
        const cdAndDInastall = new CdAndInstall(topPath, DInstallEsLintPrettierHuskyPackagesReact)
        cdAndDInastall.exeInstall('D')
        new CreateEslintrc(topPath, 'react').writeFile()
        new PackageJsonOperater(topPath).editToReact()
    }
    if (isReact === undefined) {
        const cdAndDInastall = new CdAndInstall(topPath, DInstallEsLintPrettierHuskyPackagesBack)
        cdAndDInastall.exeInstall('D')
        new CreateEslintrc(topPath, 'back').writeFile()
        new PackageJsonOperater(topPath).editToBack()
    }
    new CreateVscodeSettings(topPath).createDirAndFile()
    const scripts = {
        prepare: 'husky install',
        'lint-staged': 'lint-staged',
        'lint-fix': "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'",
    }
    const lintStaged = {
        'src/**/*.{js,ts,tsx}': ['npm run lint-fix'],
    }
    const prettier = {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 4,
    }
    new EditJsonFile('package.json', 'scripts', scripts).add()
    new EditJsonFile('package.json', 'lint-staged', lintStaged).edit()
    new EditJsonFile('package.json', 'prettier', prettier).edit()
}
main()
