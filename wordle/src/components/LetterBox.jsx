import "./LetterBox.css";

const LetterBox = ({letter, status}) => {
  return (
    <div 
      className="letterBox" 
      id={status}
    >
      <h1 className="letter">{letter}</h1>
    </div>
  )
}

export default LetterBox;