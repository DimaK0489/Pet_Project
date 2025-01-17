import {API_KEY, BASE_URL} from "./index";
import {endpoints} from "../../common/endpoints";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CommonResponseForTasks, GetTasksResponse} from "../rtkAPi/typesForTasks";

export const tasksAPI = createApi({
  reducerPath: 'tasks',
  tagTypes: ['Tasks'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('API-KEY', API_KEY)
      return headers
    }
  }),
  endpoints: (build) => ({
    getTasks: build.query<GetTasksResponse, string>({
      query: (todolistId) => ({
        url: endpoints.TASKS(todolistId),
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: (result, error, id) => [{type: 'Tasks', id}],
    }),
    addTask: build.mutation<CommonResponseForTasks, { title: string, todolistId: string }>({
      query: (payload) => ({
        url: endpoints.TASKS(payload.todolistId),
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: build.mutation<CommonResponseForTasks, { todolistId: string, taskId: string }>({
      query: (payload) => ({
        url: endpoints.DELETE_UPDATE_TASK(payload.todolistId, payload.taskId),
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: build.mutation<CommonResponseForTasks, { todolistId: string, taskId: string, title: string }>({
      query: (payload) => ({
        url: endpoints.DELETE_UPDATE_TASK(payload.todolistId, payload.taskId),
        method: 'PUT',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['Tasks'],
    }),
  })
})

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation} = tasksAPI

