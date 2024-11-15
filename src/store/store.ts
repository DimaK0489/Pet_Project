import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {authSlice} from "../util/slices/authSlice";
import {tasksSlice} from "../util/slices/tasksSlice";
import {todolistAPI} from "../util/rtkAPi/todolistAPI";
import { setupListeners } from '@reduxjs/toolkit/query'

const combinedReducer = combineReducers({
  [todolistAPI.reducerPath]: todolistAPI.reducer,
  auth: authSlice.reducer,
  tasks: tasksSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todolistAPI.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

