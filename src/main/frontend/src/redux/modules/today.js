import moment from 'moment';
const LOAD_TODAY = 'todos/LOAD_TODAY';
const LOAD_MONTH = 'todos/LOAD_MONTH';
export function loadToday(date) {
  return {
    type: LOAD_TODAY,
    date,
  };
}

export function loadMonth(month) {
  return {
    type: LOAD_MONTH,
    month,
  };
}
const date = new Date();
const today = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
  '0' + date.getDate()
).slice(-2)}`;
const month = moment(date).format('YYYY-MM');
const initialState = { today, month };
export default function reducer(previousState = initialState, action) {
  if (action.type === LOAD_TODAY) {
    return { today: action.date, month: previousState.month };
  } else if (action.type === LOAD_MONTH) {
    return { today: previousState.today, month: action.month };
  }
  return previousState;
}
