import web3 from './web3'
const compiledVoting = require('./build/Election.json')

const instance = new web3.eth.Contract(
    JSON.parse(compiledVoting.interface),
    '0x8DDBDF3D333D71DA177eB54116F648b5C3c2109f'
)

export default instance;
