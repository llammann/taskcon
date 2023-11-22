import React from "react";

function Todos({ alltodos, setalltodos }) {
  return (
    <ul>
      {alltodos.map((element, i) => {
        return <li key={i}>{element}</li>;
      })}
    </ul>
  );
}

export default Todos;
