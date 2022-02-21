const express = require('express');
const {getRandomWord} = require('./getRandomWord')
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors())

app.get('/word', (req, res) => {
  res.json({word: getRandomWord('resources/words.txt')});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})