import {todolistApi, TodolistType} from "../api/todolistApi";
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

export const getAllTodolists = thunkWrapper("todolistApi", todolistApi.getAllTodolists);
export const todolistSlice = defaultReducer(getAllTodolists);
export const getTodolistsSelector = (state: RootState): [TodolistDomainType] & ShowAppSelectorType => state.todolists.data

