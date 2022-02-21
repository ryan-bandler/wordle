import {Button} from 'react-bootstrap';
import { update, incrementCol } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../util/checkStatus';
import "./KeyboardLetter.css"

const KeyboardLetter = ({letter}) => {
  const col = useSelector(state => state.col);
  const row = useSelector(state => state.row);
  const correct = useSelector(state => state.correct);
  const wrong = useSelector(state => state.wrong);
  const misplaced = useSelector(state => state.misplaced);
  const dispatch = useDispatch();

  return (

      <Button 
        type="button"
        className="keyboardButton"
        id={checkStatus(letter, correct, wrong, misplaced)}
        onClick={() => {
          if(col < 5){
            dispatch(update(row, col, letter));
            dispatch(incrementCol());
          }
        }}
      >
        {letter}
       
      </Button>

  )
}

export default KeyboardLetter;

