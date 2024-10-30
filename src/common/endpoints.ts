export const endpoints = {
  TODOLISTS: '/todo-lists',
  TASKS: (todolistId: string): string => `/todo-lists/${todolistId}/tasks`,
  DELETE_UPDATE_TODOLIST: (todolistId: string): string => `todo-lists/${todolistId}`,
  LOGIN: '/auth/login',
}
