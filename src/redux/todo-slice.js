import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addToDO(state, action) {
    state.todos = [...state.todos, action.payload]
    },
  },
});

export const { addToDO} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
