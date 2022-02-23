import KeyboardLetter from "./KeyboardLetter";

import {Row, Container, Button} from 'react-bootstrap';

import "./Keyboard.css";
import EnterButton from "./EnterButton";
import BackButton from "./BackButton";

const Keyboard = () => {
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
        </Row>   
        <Row className="justify-content-md-center" id="middleRow">
          <BackButton/>
          <KeyboardLetter letter="Z"/>
          <KeyboardLetter letter="X"/>
          <KeyboardLetter letter="C"/>
          <KeyboardLetter letter="V"/>
          <KeyboardLetter letter="B"/>
          <KeyboardLetter letter="N"/>
          <KeyboardLetter letter="M"/>
          <EnterButton/>
        </Row>   
      </Container>
    </div>
  )
}

export default Keyboard;