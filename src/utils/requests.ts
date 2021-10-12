import appConfig from "../config";

const { BASE_URL_USER } = appConfig

interface RequestConfig {
  url: string
  method: 'GET' | 'POST'
  data?: object
  headers?: Headers
}

function request(config: RequestConfig) {
  const { url, method, headers, data } = config
  const URL = BASE_URL_USER + url
  const reqInit: RequestInit = {
    method,
    headers
  }

  if (method === 'POST') reqInit.body = JSON.stringify(data)

  return fetch(URL, reqInit) //todo
}
