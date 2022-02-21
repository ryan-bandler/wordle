const fs = require('fs');

const getRandomWord = (filePath) => {
  const text = fs.readFileSync(filePath).toString();
  const words = text.split('\n');

  const word = words[Math.floor(Math.random() * words.length)]

  return word.toUpperCase();
}

module.exports = {getRandomWord};