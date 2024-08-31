import {createSlice} from "@reduxjs/toolkit";
import {todolistApi, TodolistType} from "../api/todolistApi";
import {thunkWrapper} from "../api/ThunkWrapper";

export const getAllTodolists = thunkWrapper("todolistApi", todolistApi.getAllTodolists);

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllTodolists.fulfilled, (state, action) => {
        return action.payload.todolists.map((tl: TodolistType[]) => ({...tl, filter: 'all', entityStatus: 'idle'}))
      })
  }
})
