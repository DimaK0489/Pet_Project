import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResponseType} from "./typesForTodolist";
import {endpoints} from "../../common/endpoints";
import {API_KEY, BASE_URL} from "../api";
import {TodolistType} from "./typesForTodolist";

export const todolistAPI = createApi({
  reducerPath: 'todolists',
  tagTypes: ['Todolists'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('API-KEY', API_KEY)
      return headers
    }
  }),
  endpoints: (build) => ({
    getTodolists: build.query<TodolistType[], void>({
      query: () => ({
        url: endpoints.TODOLISTS,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({id}) => ({type: 'Todolists' as const, id})), 'Todolists']
          : ['Todolists'],
    }),
    addTodolist: build.mutation<{ item: TodolistType }, { title: string }>({
      query: (title) => ({
        url: endpoints.TODOLISTS,
        method: 'POST',
        body: title,
        credentials: 'include',
      }),
      invalidatesTags: ['Todolists']
    }),
    deleteTodolist: build.mutation<ResponseType, string>({
      query: (todolistId) => ({
        url: endpoints.DELETE_TODOLIST(todolistId),
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Todolists']
    }),
    updateTitleForTodolist: build.mutation<ResponseType, Partial<ResponseType> & Pick<ResponseType, 'id'>>({
      query: (body) => ({
        url: `/todo-lists/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Todolists'],
    }),
  })
})

export const {
  useGetTodolistsQuery,
  useAddTodolistMutation,
  useDeleteTodolistMutation,
  useUpdateTitleForTodolistMutation
} = todolistAPI


