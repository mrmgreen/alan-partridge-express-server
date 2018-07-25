const express = require('express');
const app = express();
const rootController = require('./controller');

app.get('/', rootController);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
