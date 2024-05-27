const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/', (req, res) => {
	console.log('Ktoś się połączył');
	res.json({
		data: `data: ${new Date().getSeconds()}`,
	});
});

app.listen(80, () => {
	console.log('server is running');
});
