
import { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import LetterBox from "./LetterBox";

import "./Grid.css"
const Grid = () => {

 

  return (
    <div className="grid">

      <Container>
        <Row className="justify-content-md-center">
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
          <Col className="column"><LetterBox letter="A"/></Col>
        </Row>
        
        
       
        
        
      </Container>
    </div>
  )
}

export default Grid;