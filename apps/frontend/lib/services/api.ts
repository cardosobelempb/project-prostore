import Axios, { AxiosRequestConfig } from 'axios'

const BASE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:4000/api/v1/'

const http = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
      }
    : { ...config.headers }

  return Axios({ ...config, baseURL: BASE_URL, headers })
}

export { http }
