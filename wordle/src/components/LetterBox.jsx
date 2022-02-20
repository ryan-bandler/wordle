import { useSelector } from "react-redux";
import "./LetterBox.css";

const getStatus = (word, letter, row, curRow, letterIndex) => {
  if (curRow <= row) return ""
  if(letter === "") return ""
  if(word[letterIndex] === letter)
    return "correct"
  else if(word.includes(letter))
    return "misplaced"
  else
    return "wrong"
}

const LetterBox = ({letter, idx, row, word}) => {
  const curRow = useSelector(state => state.row);
  return (
    <div 
      className="letterBox" 
      id={getStatus(word, letter, row, curRow, idx)}
    >
      <h1 className="letter">{letter}</h1>
    </div>
  )
}

export default LetterBox;