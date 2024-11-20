import {instance} from "./index";
import {endpoints} from "../../common/endpoints";
import {AxiosResponse} from "axios";

export type TodolistType = {
  id: string,
  title: string
  addedDate: string,
  order: number,
}

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4
}

export type TaskType = {
  description: string
  title: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}

type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: TaskType[]
}

export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  data: D
}

export const todolistApi = {
  // getAllTodolists() {
  //   return instance.get<TodolistType[]>(endpoints.TODOLISTS)
  // },
  // removeTodolist(todolistId: string) {
  //   return instance.delete<ResponseType>(endpoints.DELETE_UPDATE_TODOLIST(todolistId))
  // },
  // addTodolist(title: string) {
  //   return instance.post<ResponseType<{ item: TodolistType }>>(endpoints.TODOLISTS, {title: title})
  // },
  // updateTitleForTodolist(todolistId: string) {
  //   return instance.put(endpoints.DELETE_UPDATE_TODOLIST(todolistId))
  // },
  getTasks(todolistId: string): Promise<AxiosResponse<GetTasksResponse>> {
    return instance.get<GetTasksResponse>(endpoints.TASKS(todolistId))
  }
}
