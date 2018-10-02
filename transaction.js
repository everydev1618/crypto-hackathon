class Transaction {
    constructor(to, from, amount) {
        this.To = to;
        this.From = from;
        this.Amount = amount;
    }
}
module.exports = Transaction;


// const crypto = require('crypto');
// const sign = crypto.createSign('RSA-SHA256');

// sign.update('some data to sign');

// const privateKey = getPrivateKeySomehow();
// console.log(sign.sign(privateKey, 'hex'));
// // Prints: the calculated signature
