import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { mainColor } from '@/config/index.js';
import AsyncRoute from '@/router/asyncRoute.jsx';
import zhCN from 'antd/locale/zh_CN';

function App() {
  return (
    <ConfigProvider theme={{
      token:{
        colorPrimary: mainColor,
      }
    }} locale={zhCN}>
      <React.Suspense fallback={<div>加载中....</div>}>
        <BrowserRouter>
          <AsyncRoute />
        </BrowserRouter>
      </React.Suspense>
    </ConfigProvider>
  )
}

export default App
