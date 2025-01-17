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

export interface TaskType {
  description: string
  title: string
  completed: boolean
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}

export interface GetTasksResponse {
  error: string | null
  totalCount: number
  items: TaskType[]
}

export interface CommonResponseForTasks {
  resultCode: number
  messages: Array<string>
  data: { item: TaskType }
}

