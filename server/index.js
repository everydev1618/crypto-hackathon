const express = require('express');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000;
const Blockchain = require('../block-chain/blockchain.js');
const Block = require('../block-chain/block.js');
const Token = require('../block-chain/token.js');

const app = express();
const newBlockchain = new Blockchain();


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));

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

app.get('/api/token',(req, res) => {
    res.send(new Token(req.query.name, req.query.sym, req.query.totalSupply))
})

app.get('*', (req,res) => {
    res.sendFile(path.resolve('public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})