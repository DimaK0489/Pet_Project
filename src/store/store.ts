import {configureStore} from '@reduxjs/toolkit'
import {todolistSlice} from "../util/slices/todolistSlice";
import {authSlice} from "../util/slices/authSlice";
import {tasksSlice} from "../util/slices/tasksSlice";

export const store = configureStore({
  reducer: {
    todolists: todolistSlice.reducer,
    tasks: tasksSlice.reducer,
    auth: authSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

