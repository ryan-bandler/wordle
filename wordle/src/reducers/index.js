import boardReducer from "./boardReducer";
import colReducer from "./colReducer";
import rowReducer from "./rowReducer";
import {combineReducers} from 'redux';


const allReducers = combineReducers({
  board: boardReducer,
  col: colReducer,
  row: rowReducer
})

export default allReducers;