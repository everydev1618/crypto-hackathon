const crypto = require('crypto-js');

class Wallet {
  constructor (address, amount){
    this.address = address;
    this.amount = amount;
  }
}

module.exports = Wallet;