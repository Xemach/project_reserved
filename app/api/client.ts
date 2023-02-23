import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from './axios';

export type ApiResponseData<T> = { data: T };

export type ApiResponse<T> = Promise<
  | { ok: true; response: AxiosResponse<T> }
  | { ok: false; statusCode?: number; statusText: string }
>;

function processError(error: AxiosError) {
  return {
    ok: false as const,
    statusText: error.message || 'An Unknown error occurred with the Request',
    statusCode: error.response?.status,
  };
}
const client = {
  async get<T>(
    path: string,
    options: AxiosRequestConfig = {},
    instance = null,
  ): ApiResponse<T> {
    const axiosInstance = instance || axios;

    try {
      const response = await axiosInstance.get<T>(path, options);
      return {
        ok: true,
        response,
      };
    } catch (error) {
      return processError(error as any);
    }
  },

  async post<T, R>(
    path: string,
    data: T,
    options: AxiosRequestConfig = {},
    instance = null,
  ): ApiResponse<R> {
    const axiosInstance = instance || axios;
    try {
      const response = await axiosInstance.post<R>(path, data, options);
      return {
        ok: true,
        response,
      };
    } catch (error) {
      return processError(error as any);
    }
  },

  async put<T>(
    path: string,
    data: T,
    options: AxiosRequestConfig = {},
    instance = null,
  ) {
    const axiosInstance = instance || axios;

    try {
      const response = await axiosInstance.put(path, data, options);
      return {
        ok: true,
        ...response,
      };
    } catch (error) {
      return processError(error as any);
    }
  },

  async patch<T>(
    path: string,
    data: T,
    options: AxiosRequestConfig = {},
    instance = null,
  ) {
    const axiosInstance = instance || axios;

    try {
      const response = await axiosInstance.patch(path, data, options);
      return {
        ok: true,
        ...response,
      };
    } catch (error) {
      return processError(error as any);
    }
  },
};

export default client;
