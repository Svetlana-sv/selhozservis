import {createSlice} from "@reduxjs/toolkit";
import { Product } from "../../api/types/product";
import {RootState} from "../store";

const initialState: Product[] = [];

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,
    addProduct: (state: Product[], {payload}: { payload: Product }) => {
      state.push(payload);
    },
    deleteProduct: (state: Product[], {payload}: { payload: Product }) => {
      return void(state.splice(state.findIndex(p => p.id === payload.id),1));
    },
    // changeSum: (state, payload) => {
    //
    // }
  }
});

export const {addProduct,deleteProduct, reset} = cart.actions;
export const selectCart = (state: RootState) => state.cart;
export default cart.reducer;