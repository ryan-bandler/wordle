import boardReducer from "./boardReducer";
import colReducer from "./colReducer";
import rowReducer from "./rowReducer";
import wordReducer from "./wordReducer";
import {combineReducers} from 'redux';
import correctReducer from "./correctReducer";
import wrongReducer from "./wrongReducer";
import misplacedReducer from "./misplacedReducer";

const allReducers = combineReducers({
  board: boardReducer,
  col: colReducer,
  row: rowReducer,
  word: wordReducer,
  correct: correctReducer,
  wrong: wrongReducer,
  misplaced: misplacedReducer
})

export default allReducers;