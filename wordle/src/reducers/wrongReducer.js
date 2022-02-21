const wrongReducer = (state = [], action) => {
  switch(action.type){
    case "UPDATE_WRONG":
      let newState = [...state];
      if(!newState.includes(action.letter))
        newState.push(action.letter);
      return newState;
    default:
      return state;
  }
}

export default wrongReducer;