
const rowReducer = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_ROW':
      return state + 1;
    case 'DECREMENT_ROW':
      return state - 1;
    default:
      return state;
  }
}

export default rowReducer;