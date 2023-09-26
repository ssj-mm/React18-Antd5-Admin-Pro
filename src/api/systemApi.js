import { post } from '../utils/request.js';

// 获取用户
export const GetUserPage = (data) => {
    return post('', data)
}