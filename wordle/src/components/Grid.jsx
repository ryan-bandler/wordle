import { useState } from "react";
import {Container, Row} from "react-bootstrap";
import LetterBox from "./LetterBox";
import "./Grid.css"

const getStatus = (word, letter, letterIndex) => {
  if(word[letterIndex] === letter)
    return "correct"
  else if(word.includes(letter))
    return "misplaced"
  else
    return "wrong"
}

const Grid = () => {

  const [board, setBoard] = useState(Array(5).fill().map(() => Array(5).fill("H")));
  const WORD = "HELLO"
  return (
    <div className="grid">

      <Container className="container">
          {board.map((row, idx) => {
            return (
              <Row key={idx} className="row">
                {row.map((letter, sIdx) => {
                  const status = getStatus(WORD, row[sIdx], sIdx);
                  return <LetterBox key={sIdx} letter={letter} status={status}/>
                })}
              </Row>
            )
          })}
      </Container>
    </div>
  )
}

export default Grid;