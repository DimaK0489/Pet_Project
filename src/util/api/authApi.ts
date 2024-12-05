import {API_KEY, BASE_URL} from "./index";
import {endpoints} from "../../common/endpoints";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../../store/store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ['Todolists'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json')
      headers.set('API-KEY', API_KEY)
      return headers
    }
  }),
  endpoints: () => ({}),
});

const authAPI = baseApi.injectEndpoints<any>({
  endpoints: (builder) => ({
    login: builder.mutation<LoginUserData, LoginType>({
      query: (userInfo) => ({
        url: endpoints.LOGIN,
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {useLoginMutation} = authAPI;

export interface LoginType {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha?: boolean
}

export interface LoginUserData {
  resultCode: number
  messages: Array<string>
  data: {
    userId: number,
    token: string
  }
}
