const fs = require('fs');

const getAllWords = (filePath) => {
  const text = fs.readFileSync(filePath).toString();
  return text.split('\n').map(word => word.toUpperCase());
}

const checkWordValidity = (filePath, word) => {
  const words = getAllWords(filePath);
  return words.includes(word);
}

const getRandomWord = (filePath) => {
  const words = getAllWords(filePath);
  const word = words[Math.floor(Math.random() * words.length)]

  return word.toUpperCase();
}

module.exports = {
  getRandomWord,
  checkWordValidity
};