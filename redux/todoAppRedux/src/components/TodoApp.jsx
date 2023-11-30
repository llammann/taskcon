import React from "react";
import Button from "./Delete";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
function TodoApp() {
  const todos = useSelector((state) => state.todo.todos);
  const [inputValue, setinputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <h1>Todo App</h1>
      <span>Add todo</span>
      <input
        type="text"
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log(todos);
          dispatch(addTodo(inputValue));
        }}
      >
        Add
      </button>
      <p>Your todos</p>
      <ul>
        {todos &&
          todos.map((todo) => {
            return <li key={todo.id}>
              {todo.title}
              <Button id={todo.id} />
            </li>;
          })}
      </ul>
    </>
  );
}

export default TodoApp;
