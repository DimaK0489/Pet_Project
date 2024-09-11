import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi, LoginType} from "../api/authApi";
import {ROUTES} from "../../common/routes";
import {RootState} from "../../store/store";
import { clearToken, setTokens } from "../api";

export interface AuthSelectorType {
  info: {userId: string, token: string} | null;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export const loginUser = createAsyncThunk('login', async ({
                                                            email,
                                                            password,
                                                            rememberMe,
                                                            captcha
                                                          }: LoginType, thunkAPI) => {
  try {
    const response = await authApi.login({email, password, rememberMe, captcha});

    const data = response.data
    let resp = {}

    if (response.status === 200) {
      setTokens(data.data.token);
      resp = data;
    } else {
      resp = thunkAPI.rejectWithValue(data);
    }

    return resp;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
})

export const authSlice = createSlice({
  name: 'users',
  initialState: {
    info: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
    },
    logout: (state) => {
      state.info = null
      clearToken();
      window.location.href = ROUTES.login;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, payload: any) => {
      state.info = {...payload.data};
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    })
    builder.addCase(loginUser.rejected, (state, payload: any) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.message;
    })
    builder.addCase(loginUser.pending, (state) => {
      state.isFetching = true;
    })
  }
})

export const {logout, clearState} = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
