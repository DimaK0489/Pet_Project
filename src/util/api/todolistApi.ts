import {instance} from "./index";
import {endpoints} from "../../common/endpoints";

export type TodolistType = {
  id: string,
  addedDate: string,
  order: number,
  title: string
}

export const todolistApi = {
  getAllTodolists() {
    return instance.get<TodolistType[]>(endpoints.TODOLISTS)
  }
}
