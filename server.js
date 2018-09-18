const express = require('express');
const PORT = process.env.PORT || 3001;
const redis = require('redis');
const client = redis.createClient();

const app = express();


client.on('error', (error) => {
    console.log(error)
});


app.get('/hello', (req, res) => {
    client.set('team', 'devs');
    res.send("HI");
});

app.get('/blockchain', (req, res) => {
    let value;
    client.get('team', (error, reply) => {
        value = reply
        res.send(value);
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});