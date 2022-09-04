import reducer from './modules/today';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './modules/todos';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    date: reducer,
  },
});

export default store;
