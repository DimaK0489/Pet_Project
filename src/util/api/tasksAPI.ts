import {API_KEY, BASE_URL, instance} from "./index";
import {endpoints} from "../../common/endpoints";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

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
  id?: string
  resultCode: number
  messages: Array<string>
  data: D
}

// export const tasksAPI = createApi({
//   reducerPath: 'tasks',
//   tagTypes: ['Tasks'],
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//     prepareHeaders: (headers) => {
//       headers.set('Content-Type', 'application/json')
//       headers.set('API-KEY', API_KEY)
//       return headers
//     }
//   }),
//   endpoints: (build) => ({
//     getTasks: build.query<GetTasksResponse, string>({
//       query: (todolistId) => ({
//         url: endpoints.TASKS(todolistId),
//         method: 'GET',
//         credentials: 'include',
//       }),
//       providesTags: (result, error, id) => [{type: 'Tasks', id}],
//     }),
//   })
// })

//export const {useGetTasksQuery} = tasksAPI


export const taskAPI = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(endpoints.TASKS(todolistId))
  }
}
