const wrongReducer = (state = [], action) => {
  switch(action.type){
    case "UPDATE_WRONG":
      let newState = [...state];
      newState.push(action.letter);
      return newState;
    default:
      return state;
  }
}

export default wrongReducer;