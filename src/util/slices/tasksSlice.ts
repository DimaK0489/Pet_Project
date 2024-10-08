import {TaskType, todolistApi} from "../api/todolistApi";
import {RootState} from "../../store/store";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

const initialState: TasksStateType = {}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, {payload}) => {
        state[payload.todolistId] = payload.tasks
      })
  }
})

export const fetchTasks = createAsyncThunk<{ tasks: TaskType[], todolistId: string }, string>('tasks/fetchTasks', async (todolistId) => {
  try {
    const res = await todolistApi.getTasks(todolistId)
    const tasks = res.data.items
    return {tasks, todolistId}
  } catch (error: any) {
    return error
  }
})

export const getTasksSelector = (state: RootState) => state.tasks
