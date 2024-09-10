import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;

export const instance = axios.create({
  baseURL,
  headers: {
    'API-KEY': '0f03df5e-8a23-4413-a2ef-8bf682a31c70'
  },
  withCredentials: true
})

export const getToken = (): string | null => localStorage.getItem('token');

export const setTokens = (token: string): void => {
  localStorage.setItem("token", token);
};

export const clearToken = (): void => {
  localStorage.removeItem('token')
}

export const tokenInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
