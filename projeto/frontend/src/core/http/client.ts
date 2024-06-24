import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { parse, stringify } from 'qs';
import { getToken } from './helpers';

function handleAxiosRequest(config: InternalAxiosRequestConfig) {
  const token = getToken();

  config.headers.setAuthorization(`Bearer ${token}`);

  return config;
}

function handleAxiosRequestError(error: AxiosError) {
  throw error;
}

function handleAxiosResponse(response: AxiosResponse<unknown, unknown>) {
  return response;
}

async function handleAxiosResponseError(error: AxiosError) {
  if (error?.response?.status === 502 || error?.code === 'ERR_NETWORK') {
    throw new Error('Servidor indisponível!');
  }

  throw error;
}

export const Client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  withCredentials: false,
  timeout: 900000,
  timeoutErrorMessage: 'O servidor não está respondendo...',
  paramsSerializer: {
    encode: (params) => parse(params),
    serialize: (params) => stringify(params),
  },
});

Client.interceptors.request.use(handleAxiosRequest, handleAxiosRequestError);

Client.interceptors.response.use(handleAxiosResponse, handleAxiosResponseError);
