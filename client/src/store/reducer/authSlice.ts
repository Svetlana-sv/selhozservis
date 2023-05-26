import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type AuthState = {
    loading: boolean;
    userId: number;
    // userInfo: any,
    userToken: string | null;
    error: any;
    success: boolean;
};

const initialState: AuthState = {
    loading: false,
    userId: -1,
    // userId: {},
    userToken: null,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: () => initialState,
        setUserToken: (state, { payload }: { payload: string }) => {
            state.userToken = payload;
        },

        setUserId: (state, { payload }: { payload: number }) => {
            state.userId = payload;
        },
    },
});

export const { setUserToken, setUserId, reset } = authSlice.actions;
export const selectUserToken = (state: RootState) => state.auth.userToken;
export const selectUserId = (state: RootState) => state.auth.userId;
export default authSlice.reducer;
