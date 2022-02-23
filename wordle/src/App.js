import Header from "./components/Header"
import "./App.css"
import Grid from "./components/Grid"
import Keyboard from "./components/Keyboard";
import { useDispatch } from "react-redux";
import { updateWord } from "./actions";
import axios from 'axios';
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function getWord() {
      await axios.get('http://localhost:8080/word')
        .then(res => {
            dispatch(updateWord(res.data.word))
        })
    }
    getWord();
  })
  
  return (
    <div className="global">
      <Header/>
      <Grid/>
      <div className="centered">
        <Keyboard/>
      </div>
    </div>
  );
}

export default App;
  