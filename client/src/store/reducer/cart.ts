import {createSlice} from "@reduxjs/toolkit";
import {CountMapProduct, Product} from "../../api/types/product";
import {RootState} from "../store";

const initialState: Product[] = [];

const getFromMap = <K,V>(map: Map<K, V>, key: K): V => {
    const value = map.get(key);
    if (value) {
      return value;
    }
    throw new Error('Wrong id');
}

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
export const selectCart = (state: RootState) => {
  return state.cart;
}

export const selectGroupCart = (state: RootState) => {
  const groupCart = state.cart;
  var price = Number(0);
  const countMap = new Map<number, CountMapProduct>();
  const length = state.cart.length;

  groupCart.forEach(product => {
    if (countMap.has(product.id)) {

      const count = getFromMap(countMap, product.id).count + 1;
      const price = product.attributes.price;
      countMap.set(product.id, {product, count, price });
    } else {
      countMap.set(product.id, {product, count: 1, price});
    }
  });

  groupCart
      .map((product) => {
        price
            += product.attributes.price
      })

  return {countMap,price,length};
}

export default cart.reducer;