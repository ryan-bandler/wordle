import {Container, Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import LetterBox from "./LetterBox";
import "./Grid.css"

const Grid = () => {

  const board = useSelector(state => state.board);
  
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
                    />
                  )
                })}
              </Row>
            )
          })}
      </Container>
    </div>
  )
}

export default Grid;