import {createSlice} from "@reduxjs/toolkit";
import { Product } from "../../api/types/product";
import {RootState} from "../store";

// type Product = {
//   title: string
// }

const initialState: Product[] = [];

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,
    addProduct: (state: Product[], {payload}: { payload: Product }) => {
      state.push(payload);
    },
  }
});

export const {addProduct, reset} = cart.actions;
export const selectCart = (state: RootState) => state.cart;
export default cart.reducer;