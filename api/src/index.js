require('dotenv').config();
const express = require('express');
const {getRandomWord, checkWordValidity} = require('./wordUtils')
const cors = require('cors');

const FILE_PATH = process.env.FILE_PATH;
const app = express();
const port = 8080;

app.use(cors())

app.get('/word', (req, res) => {
  res.json({
    word: getRandomWord(FILE_PATH)
  });
})

app.get('/checkWordValidity/:word', (req, res) => {
  res.json({
    isValid: checkWordValidity(FILE_PATH, req.params.word)
  })
})

app.listen(port, () => {
  console.log(`Wordle API listening on port ${port}`);
});
