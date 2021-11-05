import {GenerateTokenOrRegisterParams} from "../types/User";
import {ResMsg} from "../types/ResMsg";
import request from "../utils/request";

/**
 * @DECS:
 * @AUTH: myq
 * @DATE: 2021-10-12
 */


export function getToken() {
    return localStorage.getItem("wx-access-token");
}

export function removeAuthToken() {
    localStorage.removeItem("wx-access-token")
}

export function setAuthToken(token: string) {
    localStorage.setItem("wx-access-token", token);
}

export function setUserInfo(info: string) {
    localStorage.setItem('wx-userInfo', info)
}


export function getUserInfo() {
    let info: string | Record<string, any> = localStorage.getItem('wx-userInfo') || '';
    try {
        const temp = JSON.parse(info);
        if (temp) {
            info = temp
        }
    } catch (e) {
    }
    return info
}

export function loginRequest(data: GenerateTokenOrRegisterParams) {
    return request<ResMsg>('/user/login', {
        method: 'POST',
        data
    });
}

export function login(data: GenerateTokenOrRegisterParams) {
    return loginRequest(data).then((res) => {
        if (res.token) {
            setAuthToken(res.token);
            setUserInfo(data.userName);
        }
        return res
    }, (e) => {
        return e
    })
}


export function register(data: GenerateTokenOrRegisterParams) {
    return request<ResMsg>('/user/register', {
        method: 'POST',
        data
    });
}
