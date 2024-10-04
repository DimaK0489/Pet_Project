import {TaskType, todolistApi} from "../api/todolistApi";
import {thunkWrapper} from "../ThunkWrapper";
import {RootState} from "../../store/store";
import {defaultReducer} from "../DefaultReducer";

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

export const getAllTasks = thunkWrapper('todolistApi', todolistApi.getTasks);
export const tasksSlice = defaultReducer(getAllTasks);
export const getTasksSelector = (state: RootState) => state.tasks
