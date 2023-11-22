import React from "react";

function Input({ value, setValue, alltodos, setalltodos }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          setalltodos([...alltodos, value]);
          setValue("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default Input;
