import React from "react";
import Input from "../src/components/Input";
import Todos from "../src/components/Todos";
import { useState } from "react";
function Todo() {
  const [value, setValue] = useState("");
  const [alltodos, setalltodos] = useState([]);

  return (
    <>
      <Input
        value={value}
        setValue={setValue}
        alltodos={alltodos}
        setalltodos={setalltodos}
      />
      <Todos alltodos={alltodos} setalltodos={setalltodos} />
    </>
  );
}

export default Todo;
