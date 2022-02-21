const correctReducer = (state = [], action) => {
  switch(action.type){
    case "UPDATE_CORRECT":
      let newState = [...state];
      newState.push(action.letter);
      return newState;
    default:
      return state;
  }
}

export default correctReducer;