import { MockMethod } from 'vite-plugin-mock';
import st from './st.json'
export default [
    {
        url: '/eh/list',
        method: 'get',
        response: () => {
            return st
        }
    }
]