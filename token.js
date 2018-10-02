const Wallet = require('./wallet')
const uuid = require('uuid/v4');

class Token {
  constructor(name, sym, totalSupply) {
    this.name = name;
    this.sym = sym;
    this.totalSupply = totalSupply;    
    this.ledger = this.addToLedger()
  }
  
  addToLedger() {
    let arr = [];    
    for (let i = 0; i < 5; i++) {
      arr.push(new Wallet(uuid(), (this.totalSupply / 5)));
    }
    return arr;
  }
}

module.exports = Token;

