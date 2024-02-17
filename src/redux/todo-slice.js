import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addToDO(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addToDO, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
