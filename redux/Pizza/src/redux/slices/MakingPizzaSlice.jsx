import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: [],
  gluten: false,
};

export const MakingPizzaSlice = createSlice({
  name: "making",
  initialState,
  reducers: {
    addTopping: (state, action) => {
      if (
        state.toppings.find((topping) => topping.title === action.payload.title)
      ) {
        alert("Pizza have this topping");
      } else {
        state.toppings.push(action.payload);
        // console.log(action.payload);
      }
    },
    addGluten: (state) => {
      return { ...state, gluten: !state.gluten };
    },
    deleteTopping: (state, action) => {
      let idx = state.toppings.findIndex((x) => x.id == action.payload);
      state.toppings.splice(idx, 1);
    },
  },
});

export const { addTopping, addGluten, deleteTopping } =
  MakingPizzaSlice.actions;

export default MakingPizzaSlice.reducer;
