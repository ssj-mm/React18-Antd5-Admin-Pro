import Login from '@/views/login/index';

import Layout from '@/views/layout/index';
import Home from '@/views/home/index';
import User from '@/views/system/user/index';
import Menus from '@/views/system/menu/index';
import Role from '@/views/system/role/index';

import Sales from '@/views/finance/sales/index';
import Report from '@/views/finance/report/index';

// 映射路由数据
const routes = [
  {
    path:'/login', element: <Login />
  },
  {
    path:'/', element: <Layout />,
    children: [
      {
        path:'/home', element: <Home />,
      },
      {
        path: 'system/user', element: <User />
      },
      {
        path: 'system/menu', element: <Menus />
      },
      {
        path: 'system/role', element: <Role />
      },
      {
        path: 'finance/sales', element: <Sales />
      },
      {
        path: 'finance/report', element: <Report />
      },
    ]
  }
]

export default routes