const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Blockchain = require('./blockchain.js');
const Block = require('./block.js');

const newBlockchain = new Blockchain();

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

app.get('/sendSingle',(req, res) => {
    newBlockchain.send(req.query.to, req.query.from, req.query.amount)
    res.send(newBlockchain.displayChain());
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})