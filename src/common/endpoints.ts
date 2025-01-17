export const endpoints = {
  LOGIN: '/auth/login',
  TODOLISTS: '/todo-lists',
  UPDATE_TITLE_TODOLIST: (todolistId: string): string => `todo-lists/${todolistId}`,
  DELETE_TODOLIST: (todolistId: string): string => `todo-lists/${todolistId}`,
  TASKS: (todolistId: string): string => `/todo-lists/${todolistId}/tasks`,
  DELETE_UPDATE_TASK: (todolistId: string, taskId: string): string => `/todo-lists/${todolistId}/tasks/${taskId}`
}
