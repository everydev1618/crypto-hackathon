const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const Blockchain = require('./blockchain.js');
const Block = require('./block.js');
const newBlockchain = new Blockchain();
var path = require('path');
const Users = require('./users');

app.get('/', (req, res) => {
    res.send(newBlockchain.displayChain());
})

app.get('/adduser', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    // {user1: 636363, user2: 12726, transfer: 500}
})

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

app.get('/addblock',(req, res) => {
    newBlockchain.addBlock(req.query.data)
})

app.get('/transactions',(req, res) => {
    // verification
    let successfulBlock = false;
    let userId = req.query.userId;
    if(!userId){
        userId = Math.floor( Math.random()*100);
    }
    let user = new Users(userId);
    // check for validation

    let data = {
        name: user.username,
        balance: user.balance,
        time: user.time,
        hash: user.hash
    }

    res.send(JSON.stringify(data));
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})