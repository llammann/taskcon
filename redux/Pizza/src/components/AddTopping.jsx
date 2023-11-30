import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid4 from "uuid4";
import { addTopping, addGluten } from "../redux/slices/MakingPizzaSlice";

function AddTopping() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          console.log(inputValue);
          dispatch(
            addTopping({
              id: uuid4(),
              title: inputValue,
            })
          );
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTopping;
