import {createSlice} from "@reduxjs/toolkit";
import { Product } from "../../api/types/product";
import {RootState} from "../store";
import {IUser} from "../../api/types/user";


const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: () => initialState,
    }
});

// export const {addProduct,deleteProduct, reset} = cart.actions;
// export const selectUser = (state: RootState) => state.user;
export default authSlice.reducer;