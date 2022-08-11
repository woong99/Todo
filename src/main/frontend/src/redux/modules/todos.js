const LOAD_TODO = 'sampleapp/todos/LOAD_TDOO';

export function loadTodo(text) {
  return {
    type: LOAD_TODO,
    text,
  };
}

const initialState = [
  {
    date: '2022-08-10',
    data: 'aaa ',
  },
  {
    date: '2022-08-10',
    data: 'vvv ',
  },
  {
    date: '2022-08-10',
    data: 'ccc ',
  },
  {
    date: '2022-08-10',
    data: 'dd ',
  },
  {
    date: '2022-08-10',
    data: 'jkk ',
  },
  {
    date: '2022-08-10',
    data: 'jjkl ',
  },
  {
    date: '2022-08-10',
    data: 'klj ',
  },
  {
    date: '2022-08-10',
    data: 'jkl ',
  },
  {
    date: '2022-08-10',
    data: 'klj ',
  },
  {
    date: '2022-08-10',
    data: 'jkljl ',
  },
  {
    date: '2022-08-11',
    data: 'klj ',
  },
  {
    date: '2022-08-11',
    data: 'jkl ',
  },
  {
    date: '2022-08-12',
    data: 'jkl ',
  },
  {
    date: '2022-08-12',
    data: 'jkl ',
  },
  {
    date: '2022-08-12',
    data: 'jkl ',
  },
];

export default function reducer(previousState = initialState, action) {
  if (action.type === LOAD_TODO) {
    return previousState;
  }
  return previousState;
}
