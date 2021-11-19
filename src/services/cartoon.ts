import { EhItem } from './../types/EhItems';
import request from "../utils/request";

export const getCartoonList = () => {
    return request<EhItem[]>('/eh/list')
}