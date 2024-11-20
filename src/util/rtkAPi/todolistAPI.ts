import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResponseType, TodolistType} from "../api/todolistApi";
import {endpoints} from "../../common/endpoints";
import {apiKey, defaultUrl} from "../api";

export const todolistAPI = createApi({
  reducerPath: 'todolists',
  tagTypes: ['todolists'],
  baseQuery: fetchBaseQuery({baseUrl: defaultUrl}),
  endpoints: (build) => ({
    getTodolists: build.query<TodolistType[], void>({
      query: () => ({
        url: endpoints.TODOLISTS,
        method: 'GET',
        headers: apiKey,
        credentials: 'include',
        providesTags: ['todolists']
      })
    }),
    addTodolist: build.mutation<{ item: TodolistType }, { title: string }>({
      query: (title) => ({
        url: endpoints.TODOLISTS,
        method: 'POST',
        body: title,
        credentials: 'include',
        invalidatesTags: ['todolists']
      }),
    }),
    deleteTodolist: build.mutation<ResponseType, string>({
      query: (todolistID) => ({
        url: endpoints.DELETE_UPDATE_TODOLIST(todolistID),
        method: 'DELETE',
        credentials: 'include',
      }),
    }),
  })
})

export const {useGetTodolistsQuery, useAddTodolistMutation, useDeleteTodolistMutation} = todolistAPI


