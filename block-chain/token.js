const Wallet = require('./wallet')
const crypto = require('crypto-js');
const uuid = require('uuid/v4');

class Token {
  constructor(name, sym, totalSupply, accounts) {
    this.name = name;
    this.sym = sym;
    this.totalSupply = totalSupply;
    this.accounts = accounts;    
    this.ledger = this.addToLedger(this.accounts)
  }
  
  addToLedger(number) {    
    let accounts = Number(number)
    let arr = [];    
    for (let i = 0; i < accounts; i++) {
      arr.push(new Wallet(uuid(), (this.totalSupply / accounts)));
    }
    return arr;
  }
}

module.exports = Token;

