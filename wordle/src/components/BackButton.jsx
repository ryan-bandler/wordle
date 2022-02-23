import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { decrementCol, update  } from "../actions";
import { Icon } from '@iconify/react';
import "./BackButton.css"

const BackButton = () => {
  const row = useSelector(state => state.row);
  const col = useSelector(state => state.col);
  const dispatch = useDispatch();

  return (
    <Button 
      className="backButton"
      onClick={() => {
        if(col === 0) return;
        dispatch(decrementCol());
        dispatch(update(row, col-1, ""));
      }}
    >
      <Icon icon="bi:backspace" style={{background: "none"}} />
    </Button> 
  )
}

export default BackButton;