const colReducer = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_COL':
      return state + 1;
    case 'DECREMENT_COL':
      return state - 1;
    case 'RESET_COL':
      return 0;
    default:
      return state;
  }
}

export default colReducer;