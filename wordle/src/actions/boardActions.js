
export const update = (row, col, letter) => {

  return {
    type: "UPDATE",
    row: row,
    col: col,
    letter: letter
  }
}