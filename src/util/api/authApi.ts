import {instance} from "./index";
import {endpoints} from "../../common/endpoints";

export interface LoginType {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha?: boolean
}
interface LoginUserData {
  resultCode: number
  messages: Array<string>
  data: {
    userId: number,
    token: string
  }
}

export const authApi = {
  login(data: LoginType) {
    return instance.post<LoginUserData>(endpoints.LOGIN, data)
  }
}
