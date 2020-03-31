import web3 from './web3'
const compiledVoting = require('./build/Election.json')

const instance = new web3.eth.Contract(
    JSON.parse(compiledVoting.interface),
    '0x4398be0CD0F000Fe8BCB7DD2FE185314988Df830'
)

export default instance;
