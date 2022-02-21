import { useSelector } from "react-redux";
import { getStatus } from "../util/getStatus";
import "./LetterBox.css";

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