import { createSlice } from "@reduxjs/toolkit";
import uuid4 from "uuid4";
import axios from "axios";
export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios("https://northwind.vercel.app/api/products");
  return response.data;
});

const initialState = {
  products: [],
  error: "",
  loading:"",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
