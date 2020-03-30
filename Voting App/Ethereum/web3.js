import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined'){
    //We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/138f01e0d4af4a63a27059a502f2bea8'
    );
    web3 = new Web3(provider);
}

export default web3;



