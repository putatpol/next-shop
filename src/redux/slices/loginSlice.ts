import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  isLogin: boolean;
  userFirstname: string | null;
}

const initialState: LoginState = {
  isLogin: false,
  userFirstname: null,
};

const loginSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
        state.isLogin = true;
        state.userFirstname = action.payload;
    },
    logout(state) {
        state.isLogin = false;
        state.userFirstname = null;
    }
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
