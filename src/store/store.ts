import {configureStore} from '@reduxjs/toolkit'
import {tasksSlice, todolistSlice} from "../util/slices/todolistSlice";
import {authSlice} from "../util/slices/authSlice";

export const store = configureStore({
  reducer: {
    todolists: todolistSlice.reducer,
    tasks: tasksSlice.reducer,
    auth: authSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

