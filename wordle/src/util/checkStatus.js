export const checkStatus = (letter, correct, wrong, misplaced) => {
  if(correct.includes(letter))
    return "correct";
  else if (wrong.includes(letter))
    return "wrong";
  else if (misplaced.includes(letter))
    return "misplaced";
  else
    return "";
}