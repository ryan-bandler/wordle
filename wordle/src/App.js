import Header from "./components/Header"
import "./App.css"
import Grid from "./components/Grid"
import Keyboard from "./components/Keyboard";

function App() {
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
  