import {TodolistType} from "../api/todolistApi";

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistDomainType = TodolistType & {
  filter: FilterValuesType
}

// export const getAllTodolists = thunkWrapper("todolistApi", todolistApi.getAllTodolists);
// export const todolistSlice = defaultReducer(getAllTodolists);
// export const getTodolistsSelector = (state: RootState): [TodolistDomainType] & ShowAppSelectorType => state.todolists.getAll.data
//
// export const deleteTodolist = thunkWrapper("todolistApi", todolistApi.removeTodolist);
// export const deleteTodolistSlice = defaultReducer(deleteTodolist);
// export const deleteTodolistSelector = (state: RootState) => state.todolists.deleteTodolist
//
// export const addTodolist = thunkWrapper("todolistApi", todolistApi.addTodolist);
// export const addTodolistSlice = defaultReducer(addTodolist);
// export const { updateStateData } = addTodolistSlice.actions;
// export const addTodolistSelector = (state: RootState) => state.todolists.addTodolist;
