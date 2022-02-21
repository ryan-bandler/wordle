const misplacedReducer = (state = [], action) => {
  switch(action.type){
    case "UPDATE_MISPLACED":
      let newState = [...state];
      newState.push(action.letter);
      return newState;
    default:
      return state;
  }
}

export default misplacedReducer;