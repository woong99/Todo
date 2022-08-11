const LOAD_TODAY = 'sampleapp/todos/LOAD_TODAY';

export function loadToday(date) {
  return {
    type: LOAD_TODAY,
    date,
  };
}
const date = new Date();
const today = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
  '0' + date.getDate()
).slice(-2)}`;
const initialState = today;
export default function reducer(previousState = initialState, action) {
  if (action.type === LOAD_TODAY) {
    console.log(action.date);

    return action.date;
  }
  return previousState;
}
