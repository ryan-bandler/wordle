import "./LetterBox.css";
import {Badge} from "react-bootstrap"
const LetterBox = ({letter}) => {
  return (
    <div className="letterBox">
      <h1 className="letter">{letter}</h1>
    </div>
    
  )
}

export default LetterBox;