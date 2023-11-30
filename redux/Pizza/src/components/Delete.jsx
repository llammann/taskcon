import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTopping } from "../redux/slices/MakingPizzaSlice";

function Delete({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        dispatch(deleteTopping(id));
      }}
    >
      Delete
    </button>
  );
}

export default Delete;
