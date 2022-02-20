
const init = Array(6).fill().map(() => Array(5).fill("H"));

const boardReducer = (state = init, action) => {
  
  switch(action.type){
    case 'UPDATE':
      let newState = state;
      newState[action.row][action.col] = "K";
      return newState;
    default:
      return state;
  }
}

export default boardReducer;