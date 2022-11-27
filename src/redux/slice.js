import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
