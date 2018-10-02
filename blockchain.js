const Block = require('./block.js');
const Data = require('./data.js');
const Transaction = require('./transaction.js');
const constants = require('constants');

// Crypto 
const crypto = require('crypto');
var fs = require('fs');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]; //creates a new chain with a block set by out createGenesisBlock method
    }

    createGenesisBlock() {
        let address = this.createKeys();

        let initialLedger = {};

        initialLedger[address] = 100;

        let genesisData = new Data([], initialLedger);

        return new Block(0, Date.now(), genesisData, "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newData) {
        const previous = this.getLatestBlock();
        let newBlock = new Block(previous.index + 1, Date.now(), newData, previous.hash);
        this.chain.push(newBlock);
        return this.chain;
    }

    send(to, from, amount) {
        let transaction = new Transaction(to, from, amount);

        let newLedger = this.updateLedger(transaction);
        let data = new Data([transaction], newLedger);

        this.addBlock(data);
    }

    updateLedger(transaction) {
        let currentLedger = this.getLatestBlock().data.ledger;

        let newLedger = Object.assign({}, currentLedger)

        if (newLedger[transaction.to]) {
            newLedger[transaction.to] += parseInt(transaction.amount);
        }
        else {
            newLedger[transaction.to] = parseInt(transaction.amount);
        }

        newLedger[transaction.from] -= parseInt(transaction.amount);

        return newLedger;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;

    }

    displayChain() {
        return JSON.stringify(this.chain, null, 4);
    }

    createKeys() {

        var prime_length = 60;


        var diffHell = crypto.createDiffieHellman(prime_length);

        diffHell.generateKeys('base64');

        console.log("Public Key : ", diffHell.getPublicKey('base64'));
        console.log("Private Key : ", diffHell.getPrivateKey('base64'));

        fs.writeFile('./privateKey.pem', diffHell.getPrivateKey('base64'), 'base64', () => {});

        return diffHell;
    }

    encryptStringWithRsaPrivateKey(data, privateKey) {
        const buffer = Buffer.from(data);
        
        const encrypted = crypto.privateEncrypt({ key: privateKey, padding: constants.RSA_NO_PADDING }, buffer);
    
        return encrypted.toString('base64');
    }

    decryptStringWithRsaPublicKey(data, publicKey) {
        const buffer = new Buffer(data, 'base64');

        const decrypted = crypto.publicDecrypt(publicKey, buffer);

        return decrypted;
    }
}



module.exports = Blockchain;
