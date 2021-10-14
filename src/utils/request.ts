/**
 * @DECS:
 * @AUTH: myq
 * @DATE: 2021-10-13
 */
import {extend} from 'umi-request';
import {getToken} from "../services/authService";
import {ResStatus} from "../types/ResMsg";

const errorHandler = (error: { response: Response }): Response => {
    const {response} = error;
    // todo 错误处理
    return response
}

const request = extend({
    errorHandler, // 默认错误处理
    // credentials: 'include', // 默认请求是否带上cookie
    requestType: 'form',
    timeout: 3 * 60 * 1000,
})

const tokenHeader = "access-token"
const notNeedTokenRouteReg = /^(\/user\/(register|login)|\/pub)/
request.interceptors.request.use((url, options) => {
    const token = getToken();
    const notNeedToken = notNeedTokenRouteReg.test(url)
    let headers: any = {};
    if(!notNeedToken){
        headers[tokenHeader] = token
    }
    if(typeof FormData === 'undefined' || !(options.data instanceof FormData)){
        headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if(options.method?.toLowerCase() === 'post'){
        // 已自动完成
        // options.data = JSON.stringify(options.data)
    }
    return {
        url, options:{...options, headers:{...headers, ...options.headers}, interceptors: true}
    }
})

request.interceptors.response.use(async (response, options) => {
    let data: any = null;
    try {
        data = await response.clone().json();
    } catch (e) {
        // response无数据时，解析json报错，如果设置了错误穿透，则直接返回response
        if (options.errorTransfer) {
            return response;
        }
        // 未设置穿透，继续抛出错误，由errorHandler处理后续
        throw e;
    }
    if(data?.status === ResStatus.NO_TOKEN || data?.status === ResStatus.TOKEN_EXPIRE || data?.status === ResStatus.ILLEGAL_TOKEN){
        // todo 跳转至登录或弹出登录框后重新请求；
    }

    return response;
})

export default request