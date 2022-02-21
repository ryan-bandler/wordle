import boardReducer from "./boardReducer";
import colReducer from "./colReducer";
import rowReducer from "./rowReducer";
import wordReducer from "./wordReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  board: boardReducer,
  col: colReducer,
  row: rowReducer,
  word: wordReducer
})

export default allReducers;