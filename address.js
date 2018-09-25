const SHA256 = require('crypto-js/SHA256');

class Address {

    constructor (pubKey, balance) {
        this.pubKey = pubKey;
         this.balance = balance;
    }

    static init() {
        let johnnyPubKey = SHA256('Johnny').toString();
        let andrewPubKey = SHA256('Andrew').toString();
        let leeannPubKey = SHA256('Leeann').toString();
        let jairoPubKey = SHA256('Jairo').toString();
        let barryPubKey = SHA256('Barry').toString();

        return {
            johnnyPubKey: new Address(johnnyPubKey, 1000), 
            barryPubKey: new Address(barryPubKey, 1000), 
            andrewPubKey: new Address(andrewPubKey, 1000),
            leeannPubKey: new Address(leeannPubKey, 1000), 
            jairoPubKey: new Address(jairoPubKey, 1000)
        };
    }
}

module.exports = Address;