const express = require('express');
const app = express();
const PORT = 3000;
const chain = [];
const Block = require('./block');

app.get('/', (req, res) => {
    res.send('howdy!');
});

app.get('/chain', (req, res) => {
    res.send(chain);
});

app.get('/block', (req, res) => {
    addBlock(req.query.description);
    res.send(chain);
});

app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
    addBlock('Genesis')
});

const addBlock = (description) => {
    let previous = chain.length === 0 ? '0' : chain[chain.length - 1].currentHash;
    let block = new Block(previous, description); //fix later
    chain.push(block);
}