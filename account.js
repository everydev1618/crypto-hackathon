const crypto = require('crypto-js');

class Account {
    constructor(id) {
        this.privateKey = this.calculateHash(id);
        this.publicKey = this.calculateHash(this.privateKey);
        this.balance = 0;
    }

    calculateHash(data) {
        return crypto.SHA256(data).toString();
    }
}

module.exports = Account;