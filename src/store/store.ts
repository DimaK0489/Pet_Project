import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {todolistSlice} from "../util/slices/todolistSlice";

export const rootReducer = combineReducers({
  todolists: todolistSlice,
})

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

