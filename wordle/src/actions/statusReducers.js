export const addWrong = (letter) => {
  return {
    type: "UPDATE_WRONG",
    letter: letter
  }
}

export const addCorrect = (letter) => {
  return {
    type: "UPDATE_CORRECT",
    letter: letter
  }
}

export const addMisplaced = (letter) => {
  return {
    type: "UPDATE_MISPLACED",
    letter: letter
  }
}

