const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
//const cors = require('cors')

//app.use(cors())
app.use(express.static('static'));

app.get('/s', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/', (req, res) => {
  res.json({ message: 'tata' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
