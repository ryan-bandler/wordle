export const getStatus = (word, letter, row, curRow, letterIndex) => {
  if (curRow <= row) return ""
  if(letter === "") return ""
  if(word[letterIndex] === letter)
    return "correct"
  else if(word.includes(letter))
    return "misplaced"
  else
    return "wrong"
}