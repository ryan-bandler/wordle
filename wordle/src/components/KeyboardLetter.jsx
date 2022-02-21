import {Button} from 'react-bootstrap';
import { update, incrementCol } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import "./KeyboardLetter.css"

const KeyboardLetter = ({letter}) => {
  const col = useSelector(state => state.col);
  const row = useSelector(state => state.row);
  const dispatch = useDispatch();

  return (

      <Button 
        type="button"
        className="keyboardButton"
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

