const express = require('express');
const app = express();
const alanController = require('./controller/alanController');
const pulpController = require('./controller/pulpController');

app.get('/alan-quote', alanController);
app.get('/pulp-quote', pulpController);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
