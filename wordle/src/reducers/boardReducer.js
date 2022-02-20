
const init = Array(6).fill().map(() => Array(5).fill(""));

const boardReducer = (state = init, action) => {
  
  switch(action.type){
    case 'UPDATE':
      let newState = [...state];
      newState[action.row][action.col] = action.letter;
      return newState;
    default:
      return state;
  }
}

export default boardReducer;