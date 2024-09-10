export const endpoints = {
  TODOLISTS: '/todo-lists',
  TASKS: (todolistId: string): string => `/todo-lists/${todolistId}/tasks`,
  LOGIN: '/auth/login',
  ME: '/auth/me'
}
