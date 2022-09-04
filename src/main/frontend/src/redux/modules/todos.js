import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const action = {
  getTodos: createAsyncThunk('GET/TODOS', async (month) => {
    return axios.get('/api/todos', { params: { date: month } }).then((res) => res.data);
  }),
};

const initialState = {
  todos: [],
};

export const reducer = {
  getTodos: (state, action) => {
    state.getTodos = action.payload;
  },
};

const todosReducer = createReducer(initialState, (builder) => {
  builder.addCase(action.getTodos.fulfilled, reducer.getTodos);
});

export default todosReducer;
