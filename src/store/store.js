import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {todolistSlice} from "../util/slices/todolistsSlice";


export const store = configureStore({
  reducer: {
    todolists: combineReducers({
      allTodolists: todolistSlice.reducer
    })
  }
})
