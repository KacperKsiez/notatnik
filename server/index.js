const express = require('express');

const app = express();

app.use('/', (req, res) => {
	console.log('Ktoś się połączył');
	res.json({
		data: `data: ${new Date().getSeconds()}`,
	});
});

app.listen(80, () => {
	console.log('server is running');
});
