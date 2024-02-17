import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    createPost(state, action) {},
  },
});

export const { createPost } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
