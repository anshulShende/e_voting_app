import web3 from './web3'
const compiledVoting = require('./build/Election.json')

const instance = new web3.eth.Contract(
    JSON.parse(compiledVoting.interface),
    '0x02C2dE66D561D00D9D67A64E4972A8B11cA73b32'
)

export default instance;
