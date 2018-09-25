const Block = require('./block.js');

class Blockchain {
    constructor(){
        this.chain=[this.createGenesisBlock()];//creates a new chain with a block set by out createGenesisBlock method
    }

    createGenesisBlock(){
        return new Block(0, Date.now(), "Genesis block", "0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newData) {
        const previous = this.getLatestBlock();
        let newBlock = new Block(previous.index + 1, Date.now(), newData, previous.hash)
        this.chain.push(newBlock);
        return this.chain;
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;                
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
            
        }

        return true;

    }

    displayChain() {
        return JSON.stringify(this.chain, null, 4);
    }
}

module.exports = Blockchain;