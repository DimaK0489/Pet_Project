import {API_KEY, BASE_URL} from "./index";
import {endpoints} from "../../common/endpoints";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {GetTasksResponse} from "../rtkAPi/typesForTasks";

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
  })
})

export const {useGetTasksQuery} = tasksAPI

