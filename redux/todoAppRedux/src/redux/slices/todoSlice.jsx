import { createSlice } from "@reduxjs/toolkit";
import uuid4 from "uuid4";
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let obj = {
        id: uuid4(),
        title: action.payload,
      };
      state.todos.push(obj);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
