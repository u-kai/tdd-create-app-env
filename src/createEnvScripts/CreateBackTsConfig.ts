import { CreateTopTsConfig } from '../createEnvScripts/CreateTopTsConfig'

export class CreateBackTsConfig extends CreateTopTsConfig {
    constructor(filePath: string) {
        super(filePath)
        this.fileData = {
            compilerOptions: {
                outDir: './dist',
                target: 'ES2015',
                moduleResolution: 'node',
                module: 'commonjs',
                strict: true,
            },
            include: ['./src/**/*'],
            exclude: ['./node_modules'],
        }
    }
}
