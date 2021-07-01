import { createEnvFile } from 'createEnvScripts/CreateENVFile'
import { isExist } from './model/IsExist'
const top = 'src/tests/testFiles'
createEnvFile(top)

it('test env', () => {
    expect(isExist(`${top}/src/.env`)).toEqual(true)
})
