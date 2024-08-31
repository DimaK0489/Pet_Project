import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;

export const instance = axios.create({
  baseURL,
  headers: {
    'API-KEY': '0f03df5e-8a23-4413-a2ef-8bf682a31c70'
  },
  withCredentials: true
})
