import React from "react";
import { useReducer } from "react";
import reducer from "./hook/Todoreducer";
function Todoapp() {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    alltodos: [],
  });
  return (
    <>
      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          dispatch({
            type: "getvalue",
            value: e.target.value,
          });
        }}
      />
      <button
        onClick={(e) => {
          dispatch({
            type: "addtodo",
            value: state.value,
          });
        }}
      >
        Add todo
      </button>
      <h1>Todo App</h1>
      <ul>
        {state.alltodos &&
          state.alltodos.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
      </ul>
    </>
  );
}

export default Todoapp;
