import React, { useEffect, useState } from 'react';
import { Button, Form, Space, Input } from 'antd';
import initLoginBg from './canvas.js';
import styles from './style.module.scss';
import './style.less';

function Login() {
  useEffect(() => {
    initLoginBg();
    window.onresize = function(){initLoginBg();}
  },[])
  // const [count, setCount] = useState(0)

  return (
    <div className={styles.loginPage}>
      <canvas id='canvas' style={{ width: '100%', height: '100vh'}}></canvas>
      <div className={styles.pageBox}>
        <div className={styles.boxTitle+ ' boxTitle'}>
          <h2>通用企业后台管理系统</h2>
          <p>General enterprise back office management system</p>
        </div>
        <div className={styles.boxForm + ' boxForm'}>
          <Space direction='vertical' size='middle' style={{ display: 'flex'}}>
            <Input size="large" placeholder="请输入用户名" />
            <Input.Password size="large" placeholder="请输入密码" />
            <Button size="large" type="primary" ghost block>登录</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Login
