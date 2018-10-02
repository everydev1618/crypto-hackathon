const crypto = require('crypto'); // DiffieHellman
const assert = require('assert');
// const cryptoTwo = require('crypto-js');
// const alice = crypto.createDiffieHellman(64);
// const aliceKey = alice.generateKeys('base64');
// console.log(alice)
// console.log('pubkey: ', alice.getPublicKey('base64'))
// console.log('private key: ', alice.getPrivateKey('base64'))
    
    


class Account {
    constructor(publicKey, privateKey) {
        this.privateKey = privateKey
        this.publicKey = publicKey
        this.balance = 0;
    }
    


    
    // calculateHash(data) {
    //     return cryptoTwo.SHA256(data).toString();
    // }
}

module.exports = Account;