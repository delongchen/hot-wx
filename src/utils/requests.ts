import appConfig from "../config";
import {getToken} from "../services/authService";

const {BASE_URL_USER} = appConfig

interface RequestConfig {
    method?: 'GET' | 'POST'
    data?: object
    headers?: Headers
}

type Interceptor = (url: string, req: RequestInit) => RequestInit
const registerOrLoginReg = /^\/user\/(register|login)/

// 请求拦截
const interceptors_req: Array<Interceptor> = [
    (url, req) => {
        const token = getToken();
        if (token && !registerOrLoginReg.test(url)) {
            req.headers = req.headers ?? {
                'Content-Type': 'application/x-www-form-urlencoded',
                'access-token': token
            }
        }
        return req
    }
];

request.interceptors = {
    requestUse: (interceptor: Interceptor) => {
        interceptors_req.push(interceptor)
    }
}

export function request<T>(url: string, config: RequestConfig = {
    method: 'GET',
}) {
    const {method, headers, data} = config
    let reqInit: RequestInit = {
        method,
        headers,
    }
    if (method === 'POST') reqInit.body = JSON.stringify(data)
    interceptors_req.forEach((interceptor) => {
        reqInit = interceptor(url, reqInit)
    })
    return new Promise<T>((resolve, reject) => {
        fetch(url, reqInit).then((res) => {
            resolve(res.json())
        }).catch(err => {
            reject(err)
        })
    })
}






