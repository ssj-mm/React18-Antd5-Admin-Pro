import React, { useState, useEffect } from 'react';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { tokenKey, getToken } from '@/config/index.js';
import routes from './index.jsx';

console.log(routes)
function AsyncRoute() {
  const token = localStorage.getItem(tokenKey) || '';
  const { pathname } = useLocation();
  const elements = useRoutes(routes);
  const $router = useNavigate();
  
  // 是否有用户信息拦截
  // useEffect(() => {
  //   // 有token 地址输入：/login
  //   if(pathname === '/login' && getToken()){
  //     message.success('您已经登录过了!');
  //     $router('/home');
  //   }
  //   // 没有token 直接去登录页
  //   if(pathname !== '/login' && !getToken()){
  //     message.warning('您还没有登录,请先去登录后再访问!');
  //     $router('/login');
  //   }
  // }, [])

  return elements
}

export default AsyncRoute
