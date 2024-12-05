import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ROUTES} from "../../common/routes";
import {RootState} from "../../store/store";
import {clearToken} from "../api";

const internalInitialState = {
  resultCode: null,
  messages: null,
  token: ''
};

export const authSlice = createSlice({
  name: 'users',
  initialState: internalInitialState,
  reducers: {
    setUser(
      state, action: PayloadAction<{ token: string }>
    ) {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = ''
      clearToken();
      window.location.href = ROUTES.login;
      return state;
    }
  },
  extraReducers: () => {
  }
})

export const {logout, setUser} = authSlice.actions;
export const authSelector = (state: RootState) => state.auth.token;
