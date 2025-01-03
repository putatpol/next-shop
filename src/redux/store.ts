import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./slices/productCartSlice";

export const store = configureStore({
  reducer: {
    productCart: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;