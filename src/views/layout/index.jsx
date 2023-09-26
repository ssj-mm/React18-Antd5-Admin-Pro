import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import SideMenu from '@/components/sideMenu/index';
import '@/assets/styles/common.scss';
import { Outlet } from 'react-router-dom';
import HeadBar from './header.jsx';

const { Content } = Layout;

function LayoutMain() {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout>
      <SideMenu />
      <Layout>
        <HeadBar />
        <Content
          style={{
            margin: '10px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutMain
