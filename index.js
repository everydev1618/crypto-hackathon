const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const Blockchain = require('./blockchain.js');
const Block = require('./block.js');
const newBlockchain = new Blockchain();
var path = require('path');

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

app.get('/addBlock',(req, res) => {
    // verification
    let successfulBlock = false;
    // check for validation
    successfulBlock = newBlockchain.addBlock(req.query.data)

    res.send(successfulBlock);
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})