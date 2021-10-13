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

export function login(data: GenerateTokenOrRegisterParams) {
    return request<ResMsg>('/user/register', {
        method: 'POST',
        data
    });
}

export function register(data: GenerateTokenOrRegisterParams) {
    return request<ResMsg>('/user/register', {
        method: 'POST',
        data
    });
}