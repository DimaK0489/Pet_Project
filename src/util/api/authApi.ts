import {instance} from "./index";
import {endpoints} from "../../common/endpoints";

export interface LoginType {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha?: boolean
}
interface ResponseType<D = {}> {
  resultCode: number
  messages: Array<string>
  data: D
}

export const authApi = {
  login(data: LoginType) {
    return instance.post<ResponseType<{userId?: number, token: string}>>(endpoints.LOGIN, data)
  }
}
