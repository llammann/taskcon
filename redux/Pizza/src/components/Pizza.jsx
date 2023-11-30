import React from "react";
import AddTopping from "./AddTopping";
import { useDispatch, useSelector } from "react-redux";
import { addGluten } from "../redux/slices/MakingPizzaSlice";
import uuid4 from "uuid4";
import Delete from "./Delete";
function Pizza() {
  const dispatch = useDispatch();
  const toppings = useSelector((state) => state.making.toppings);
  const gluten = useSelector((state) => state.making.gluten);
  return (
    <>
      <h1>Pizza</h1>
      <ul>
        {toppings &&
          toppings.map((topping) => {
            console.log(topping.title);
            return (
              <li key={uuid4()}>
                {topping.title} <Delete id={topping.id}/>
              </li>
            );
          })}
      </ul>
      <button
        style={{ backgroundColor: gluten ? "blue" : "red" }}
        onClick={(e) => {
          dispatch(addGluten());
        }}
      >
        Gluten
      </button>
      <br />
      <AddTopping />
    </>
  );
}

export default Pizza;
