import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productCartSlice";
import loginReducer from "./slices/loginSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const loginPersistConfig = {
  key: "loginState",
  storage,
  // whitelist: ["isLogin"],
};

const productCartPersistConfig = {
  key: "productCart",
  storage,
  // whitelist: ["items"],
};

// Combine Reducers
const rootReducer = combineReducers({
  loginState: persistReducer(loginPersistConfig, loginReducer),
  productCart: persistReducer(productCartPersistConfig, productReducer),
});

// Store Configuration
export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
