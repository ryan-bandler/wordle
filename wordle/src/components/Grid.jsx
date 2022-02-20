import { useState } from "react";
import {Container, Row} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { update, incrementCol, resetCol, incrementRow } from "../actions";
import LetterBox from "./LetterBox";
import "./Grid.css"

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

const Grid = () => {

  const board = useSelector(state => state.board);
  const row = useSelector(state => state.row);  
  const col = useSelector(state => state.col); 
  const WORD = useSelector(state => state.word)
  const dispatch = useDispatch();
  
  
  return (
    <div className="grid">

      <Container className="container">
          {board.map((curRow, idx) => {
            return (
              <Row key={idx} className="row">
                {curRow.map((letter, sIdx) => {
                  return (
                    <LetterBox 
                      key={sIdx} 
                      idx={sIdx}
                      row={idx}
                      letter={letter}
                      word={WORD}                
                    />
                  )
                })}
              </Row>
            )
          })}
      </Container>

      <button onClick={() => {
        dispatch(update(row, col, "O"));
        dispatch(incrementCol());
      }}>
        update
      </button>

      <button onClick={() => {

        dispatch(incrementRow());
        dispatch(resetCol());
      }}>
        row
      </button>
    </div>
  )
}

export default Grid;