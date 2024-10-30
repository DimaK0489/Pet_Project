import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {deleteTodolistSlice, todolistSlice, addTodolistSlice} from "../util/slices/todolistSlice";
import {authSlice} from "../util/slices/authSlice";
import {tasksSlice} from "../util/slices/tasksSlice";

export const store = configureStore({
  reducer: {
    todolists: combineReducers({
      getAll: todolistSlice.reducer,
      deleteTodolist: deleteTodolistSlice.reducer,
      addTodolist: addTodolistSlice.reducer,
    }),
    tasks: tasksSlice.reducer,
    auth: authSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

