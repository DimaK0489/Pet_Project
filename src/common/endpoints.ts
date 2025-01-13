export const endpoints = {
  TODOLISTS: '/todo-lists',
  TASKS: (todolistId: string): string => `/todo-lists/${todolistId}/tasks`,
  DELETE_TODOLIST: (todolistId: string): string => `todo-lists/${todolistId}`,
  UPDATE_TITLE_TODOLIST: (todolistId: string): string => `todo-lists/${todolistId}`,
  LOGIN: '/auth/login',
}
