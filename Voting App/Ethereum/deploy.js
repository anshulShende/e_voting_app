const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');
const compiledVoting = require('./build/Election.json')

const provider = new HDWalletProvider(
    'shed diamond calm nut coil affair jungle topic hunt wink canyon eight',
    "https://rinkeby.infura.io/v3/138f01e0d4af4a63a27059a502f2bea8"
)
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from : ", accounts[0])

    const voting = await new web3.eth.Contract(JSON.parse(compiledVoting.interface))
    .deploy({data : '0x' + compiledVoting.bytecode})
    .send({from : accounts[0]})

    console.log("Contract is deployed to : ", voting.options.address);
};

deploy();