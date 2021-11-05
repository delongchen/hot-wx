import request from "../utils/request";

export const getGoodAVs = () => {
    return request('/avdb/gavs')
}

export const getDirtyAVs = () => {
    return request('/avdb/davs')
}