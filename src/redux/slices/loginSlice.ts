import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  isLogin: boolean;
  token: string | null;
}

const initialState: LoginState = {
  isLogin: false,
  token: null,
};

const loginSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
        state.isLogin = true;
        state.token = action.payload;
    },
    logout(state) {
        state.isLogin = false;
        state.token = null;
    }
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
