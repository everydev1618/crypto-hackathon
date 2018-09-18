const CryptoJS = require("crypto-js");

module.exports = class Block {
    
    constructor(previousHash, description) {
        this.previousHash = previousHash;        
        this.description = description;
        this.timestamp = Date.now();
        this.currentHash = this.hash();
    }

    hash() {
        return CryptoJS.SHA256(this.previousHash + this.description + this.timestamp).toString();
    }
}