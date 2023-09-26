import logo from '@/assets/images/logo.png'
export const theme = 'dark';
export const mainColor = '#6dc5a9';
export const logoImg = logo;
export const baseUrl = '';

// 设置Token
export const tokenKey = 'ACCESSTOKEN';
export const setToken = (token) => sessionStorage.setItem('ACCESSTOKEN', token);
export const getToken = () => sessionStorage.getItem('ACCESSTOKEN');

