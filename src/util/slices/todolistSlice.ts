import {TaskType, todolistApi, TodolistType} from "../api/todolistApi";
import {thunkWrapper} from "../ThunkWrapper";
import {RootState} from "../../store/store";
import {defaultReducer} from "../DefaultReducer";

export type FilterValuesType = 'all' | 'active' | 'completed';
export type ShowAppSelectorType = {
  isLoading: boolean;
};
export type TodolistDomainType = TodolistType & {
  filter: FilterValuesType
}
export type TasksStateType = {
  [key: string]: Array<TaskType>
}

export const getAllTodolists = thunkWrapper("todolistApi", todolistApi.getAllTodolists);
export const todolistSlice = defaultReducer(getAllTodolists);
export const getTodolistsSelector = (state: RootState): [TodolistDomainType] & ShowAppSelectorType => state.todolists.data

export const getAllTasks = thunkWrapper('todolistApi', todolistApi.getTasks);
export const tasksSlice = defaultReducer(getAllTasks);
export const getTasksSelector = (state: RootState) => state.tasks.data
