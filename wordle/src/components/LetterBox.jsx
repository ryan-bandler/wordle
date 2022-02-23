import { useSelector } from "react-redux";
import { getStatus } from "../util/getStatus";
import "./LetterBox.css";

const LetterBox = ({letter, idx, row}) => {

  const curRow = useSelector(state => state.row);
  const word = useSelector(state => state.word);
  
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