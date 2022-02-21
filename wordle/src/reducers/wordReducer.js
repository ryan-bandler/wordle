const wordReducer = (state="", action) => {
  switch(action.type){
    case "UPDATE_WORD":
      return action.word;
    default:
      return state;
  }
}

export default wordReducer;