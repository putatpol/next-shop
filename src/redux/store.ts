import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productCartSlice";
import loginReducer from "./slices/loginSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const loginPersistConfig = {
  key: "loginState", // ชื่อ state
  storage, // เก็บใน local storage
  whitelist: ["isLogin", "userFirstname"], // จะเก็บ isLogin, userFirstname
};

const productCartPersistConfig = {
  key: "productCart",
  storage,
  whitelist: ["items"],
};

// Combine Reducers รวม Reducers ไว้ที่เดียว
// ใช้ persistReducer เพื่อเก็บ state นี้ใน storage ตามที่กำหนด
const rootReducer = combineReducers({
  loginState: persistReducer(loginPersistConfig, loginReducer),
  productCart: persistReducer(productCartPersistConfig, productReducer),
});

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,

  // middleware: ใช้ค่าเริ่มต้นของ middleware แต่กำหนดให้ serializableCheck ไม่ต้องตรวจสอบ action บางประเภทที่เกี่ยวกับ redux-persist (เช่น FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, และ REGISTER) เพราะ action เหล่านี้ไม่จำเป็นต้องเป็น serializable และเป็นการทำงานภายในของ redux-persist
  // ทำไมต้อง ignoredActions
  // redux-persist ใช้ action ที่ไม่ serializable เพื่อจัดการการทำงานของ persistence เช่นการเก็บและโหลดข้อมูลจาก storage หากไม่กำหนด ignoredActions อาจทำให้เกิด warning หรือ error ได้
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
