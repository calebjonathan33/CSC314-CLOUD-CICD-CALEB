const express = require('express');
const app = express();
const port = 8080;
app.use(express.static('public'));

//app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port);
console.log(`App runnning on http://localhost:${port}`);
