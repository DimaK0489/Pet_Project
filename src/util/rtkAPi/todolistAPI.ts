import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TodolistType} from "../api/todolistApi";
import {endpoints} from "../../common/endpoints";
import {baseURL} from "../api";

export const todolistAPI = createApi({
  reducerPath: 'todolists',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: (builder) => ({
    getTodolists: builder.query<TodolistType[], void>({
      query: () => ({
        url: endpoints.TODOLISTS,
        method: 'GET',
        headers: {
          'API-KEY': '0f03df5e-8a23-4413-a2ef-8bf682a31c70'
        },
      })
    }),
  })
})

export const {useGetTodolistsQuery} = todolistAPI


