import { Link } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import Home from '@/views/home/index';
import User from '@/views/system/user/index';
import Menus from '@/views/system/menu/index';
import Role from '@/views/system/role/index';

import Sales from '@/views/finance/sales/index';
import Report from '@/views/finance/report/index';

// 菜单数据
export const menuTree = [
  {
    label: <Link to='/home'>首页</Link>,
    key:'/home',
    icon: <UserOutlined />,
    element: <Home />
  },

  {
    label: '系统管理',
    key:'system',
    icon: <VideoCameraOutlined />,
    children: [
      {
        label: <Link to='system/user'>用户管理</Link>,
        key: 'system/user',
        element: <User />
      },
      {
        label: <Link to='system/menu'>菜单管理</Link>,
        key: 'system/menu',
        element: <Menus />
      },
      {
        label: <Link to='system/role'>角色管理</Link>,
        key: 'system/role',
        element: <Role />
      },
    ]
  },

  {
    label: '财务管理',
    key:'finance',
    icon: <UploadOutlined />,
    children: [
      {
        label: <Link to='finance/sales'>销售统计</Link>,
        key: 'finance/sales',
        element: <Sales />
      },
      {
        label: <Link to='finance/report'>报表统计</Link>,
        key: 'finance/report',
        element: <Report />
      },
    ]
  }
]