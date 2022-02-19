import "./LetterBox.css";

const LetterBox = ({letter}) => {
  return (
    <div className="divStyle">
      <h3 className="letterBox">{letter}</h3>
    </div>
  )
}

export default LetterBox;