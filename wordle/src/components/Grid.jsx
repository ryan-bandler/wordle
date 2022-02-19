
import { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import LetterBox from "./LetterBox";

import "./Grid.css"
const Grid = () => {

 

  return (
    <div className="grid">

      <Container className="container">
          <Row className="row">
            <LetterBox letter="H"></LetterBox>      
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>        
          </Row>
          <Row className="row">
            <LetterBox letter="H"></LetterBox>      
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>        
          </Row>
          <Row className="row">
            <LetterBox letter="H"></LetterBox>      
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>        
          </Row>
          <Row className="row">
            <LetterBox letter="H"></LetterBox>      
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>        
          </Row>
          <Row className="row">
            <LetterBox letter="H"></LetterBox>      
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>    
            <LetterBox letter="H"></LetterBox>        
          </Row>
  
       
       

    
       
        
        
      </Container>
    </div>
  )
}

export default Grid;