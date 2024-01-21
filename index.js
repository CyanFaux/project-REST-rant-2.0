const express = require('express');
// Initialize the app object.
const app = express();

app.get('/', function (req,res) {
	res.send('Hello world')
})

app.listen(3000)