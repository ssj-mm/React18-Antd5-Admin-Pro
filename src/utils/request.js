import axios from 'axios';
import { baseUrl, setToken,  getToken } from '@/config/index.js';

const service = axios.create({
    baseUrl: baseUrl,
    timeout: 5 ^ 1000,
    withCredentials: true
})

// 请求拦截
service.interceptors.request.use((config) => {
    // config.headers['Authorization'] = 'Bearer' + authJwt
    // config.headers['refreshAuthorization'] = 'Bearer' + refreshJwt
    config.headers?.token = `Bearer ${getToken()}`
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

// 请求方法
export const get = (url, params) => service.get(url, { params });
// export const get = (url, params) => service.get(url, { params }).then(res => res.data);

export const post = (url, data) => service.post(url, data);

export const put = (url, data) => service.put(url, data);

export const patch = (url, data) => service.patch(url, data);

export const del = (url) => service.delete(url);