import KeyboardLetter from "./KeyboardLetter";
import { Icon } from '@iconify/react';
import {Row, Container, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {
  incrementRow, 
  resetCol, 
  decrementCol, 
  decrementRow,
  update
} from '../actions';

import "./Keyboard.css";



const Keyboard = () => {
  const row = useSelector(state => state.row);
  const col = useSelector(state => state.col);
  const board = useSelector(state => state.board);
  const dispatch = useDispatch();

  const enter = () => {
    dispatch(incrementRow());
    dispatch(resetCol())
  }
  
  return (
    <div className="div">
      <Container className="keyboard">
        <Row className="justify-content-md-center" id="keyRow">
          <KeyboardLetter letter="Q"/>
          <KeyboardLetter letter="W"/>
          <KeyboardLetter letter="E"/>
          <KeyboardLetter letter="R"/>
          <KeyboardLetter letter="T"/>
          <KeyboardLetter letter="Y"/>
          <KeyboardLetter letter="U"/>
          <KeyboardLetter letter="I"/>
          <KeyboardLetter letter="O"/>
          <KeyboardLetter letter="P"/>
        </Row>
        <Row className="justify-content-md-center" id="middleRow">
          <KeyboardLetter letter="A"/>
          <KeyboardLetter letter="S"/>
          <KeyboardLetter letter="D"/>
          <KeyboardLetter letter="F"/>
          <KeyboardLetter letter="G"/>
          <KeyboardLetter letter="H"/>
          <KeyboardLetter letter="J"/>
          <KeyboardLetter letter="K"/>
          <KeyboardLetter letter="L"/>
          <Button 
            className="backButton"
            onClick={() => {
              if(col === 0) return;
              dispatch(decrementCol());
              dispatch(update(row, col-1, ""));
            }}
          >
            <Icon icon="bi:backspace" style={{backgroundColor: "grey"}} />
          </Button>

        </Row>   
        <Row className="justify-content-md-center" id="keyRow">
          <KeyboardLetter letter="Z"/>
          <KeyboardLetter letter="X"/>
          <KeyboardLetter letter="C"/>
          <KeyboardLetter letter="V"/>
          <KeyboardLetter letter="B"/>
          <KeyboardLetter letter="N"/>
          <KeyboardLetter letter="M"/>
          <Button 
            className="enter"
            onClick={() => {
              dispatch(resetCol());
              dispatch(incrementRow());
            }}
          >
            Enter
          </Button>
        </Row>   
      </Container>
    </div>
  )
}

export default Keyboard;