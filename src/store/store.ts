import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {authSlice} from "../util/slices/authSlice";
import {todolistAPI} from "../util/rtkAPi/todolistAPI";
import {setupListeners} from '@reduxjs/toolkit/query'
import {tasksAPI} from "../util/api/tasksAPI";
import {baseApi} from "../util/api/authApi";

const combinedReducer = combineReducers({
  [todolistAPI.reducerPath]: todolistAPI.reducer,
  [tasksAPI.reducerPath]: tasksAPI.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      todolistAPI.middleware,
      tasksAPI.middleware,
      baseApi.middleware
    ),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

