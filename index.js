const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Blockchain = require('./blockchain.js');
const Block = require('./block.js');
const newBlockchain = new Blockchain();

const uuid = require('uuid')  //unique id
const Account = require('./account.js');
const Transaction = require('./transaction.js');

const accounts = [];

//generate genesis account
let account0 = new Account(uuid());
account0.balance = 1000
accounts.push(account0)


app.get('/hello', (req, res) => {
    res.send('Hi');
})

app.get('/block', (req, res) => {
    const newBlock = new Block(0, Date.now(), { amount: 5 });
    res.send(JSON.stringify(newBlock));
})

app.get('/blockchain',(req, res) => {
    res.send(newBlockchain.displayChain())
})

app.get('/addBlock',(req, res) => {
    res.send(newBlockchain.addBlock(req.query.data))
})


app.get('/createAccount',(req, res) => {
    let account = new Account(uuid());
    accounts.push(account)
    res.send({
        private: account.privateKey,
        public: account.publicKey, 
        message: "Write down your keys or they'll be lost forever!!"
    })
})

app.get('/showAccounts',(req, res) => {
    res.send(accounts)
    //print balance of all accounts
})

app.get('/transaction',(req, res) => {
    //make new Transaction
    const transaction = new Transaction(req.query.to, req.query.from, req.query.amount);

    //add new block(transaction)
    newBlockchain.addBlock(transaction)

    //change account balances
    //accounts.find(req.query.to)
    //console.log(accounts.find(req.query.to))

    res.send('stuff happened')
})


app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})

