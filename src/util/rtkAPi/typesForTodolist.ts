export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistDomainType = TodolistType & {
  filter: FilterValuesType
}
export type TodolistType = {
  id: string,
  title: string
  addedDate: string,
  order: number,
}

export interface ResponseType<D = {}> {
  id?: string
  resultCode: number
  messages: Array<string>
  data: D
}
