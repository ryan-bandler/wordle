import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../util/getStatus";
import {
  incrementRow, 
  resetCol, 
  addCorrect,
  addMisplaced,
  addWrong
} from '../actions';
import "./EnterButton.css";


const EnterButton = () => {
  const row = useSelector(state => state.row);
  const col = useSelector(state => state.col);
  const board = useSelector(state => state.board);
  const word = useSelector(state => state.word);
  const dispatch = useDispatch();

  return (
    <Button 
      className='enter'
      onClick={() => {
        if(col >= 4){
          dispatch(resetCol());
          dispatch(incrementRow());
        }
        board[row].forEach((char, idx) => {
          switch(getStatus(word, char, board[row], row, idx)){
            case "correct":
              dispatch(addCorrect(char));
              console.log(char)
              break;
            case "wrong":
              dispatch(addWrong(char));
              break;
            case "misplaced":
              dispatch(addMisplaced(char));
              break;
            default:
              break;
          }
        })
      }}
    >
      Enter
    </Button>
  )
}

export default EnterButton;