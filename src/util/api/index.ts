import axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_URL;
export const apiKey = {
  'API-KEY': '0f03df5e-8a23-4413-a2ef-8bf682a31c70'
}
export const API_KEY = '0f03df5e-8a23-4413-a2ef-8bf682a31c70'

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: apiKey,
  withCredentials: true
})

export const getToken = (): string | null => localStorage.getItem('token');

export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const clearToken = (): void => {
  localStorage.removeItem('token')
}
