//simport { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
const crypto = require('crypto');

const blockchain = [{data: 'The beginnnnning of the end!!'}]

export default ({ config, db }) => {
	let api = Router();
	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
    //res.json({ "hi" : "hi"});
	});

	api.get('/blockchain', (req, res) => {
    res.json(blockchain);
	});

  api.get('/createBlock', (req, res) => {

		const stringBlock = JSON.stringify(blockchain.slice(-1)[0])
		const secret = "Jam and Toast"
		const hash = crypto.createHmac('sha256', secret)
     .update(stringBlock)
     .digest('hex');

    blockchain.push({
			data: Date.now(),
			previousBlockHash: hash,
			blockNumber: blockchain.length
		});

  	res.json(blockchain.slice(-1)[0]);

  });

	return api;
}
