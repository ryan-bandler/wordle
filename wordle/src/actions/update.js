import { useSelector } from "react-redux";

export const update = () => {
  const row = useSelector(state => state.row);
  const col = useSelector(state => state.col);

  return {
    type: "UPDATE",
    row: row,
    col: col
  }
}