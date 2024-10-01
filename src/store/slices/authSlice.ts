import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
}
interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LoginSuccess(state, action: PayloadAction<{token: string; user: User}>) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const {LoginSuccess, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;
