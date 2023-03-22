import {configureStore} from '@reduxjs/toolkit';

import cart from './reducer/cart';
import {api} from "../api/rtkConfig";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        cart,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}).concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
