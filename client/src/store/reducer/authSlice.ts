import {createSlice} from "@reduxjs/toolkit";
import { Product } from "../../api/types/product";
import {RootState} from "../store";
import {IUser} from "../../api/types/user";

type AuthState = {
    loading: boolean,
    userInfo: any,
    userToken: string | null,
    error: any,
    success: boolean,
}

const initialState: AuthState = {
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
        setUserToken: (state, {payload}: { payload: string }) => {
            state.userToken=payload
          },
    }
});

export const {setUserToken, reset} = authSlice.actions;
export const selectUserToken = (state: RootState) => state.auth.userToken;
export default authSlice.reducer;