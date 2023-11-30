import { configureStore } from "@reduxjs/toolkit";
import MakingPizzaReducer from "./slices/MakingPizzaSlice";
export const store = configureStore({
  reducer: {
    making: MakingPizzaReducer,
  },
});
