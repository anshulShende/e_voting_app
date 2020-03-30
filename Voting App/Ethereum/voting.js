import web3 from './web3'
const compiledVoting = require('./build/Election.json')

const instance = new web3.eth.Contract(
    JSON.parse(compiledVoting.interface),
    '0x4BB008ae4f61200aD737443eD52d3294c43607b9'
)

export default instance;
