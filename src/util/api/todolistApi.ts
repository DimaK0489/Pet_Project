import {instance} from "./index";
import {endpoints} from "../../common/endpoints";


export const todolistApi = {
  getAllTodolists() {
    return instance.get(endpoints.TODOLISTS)
  }
}
