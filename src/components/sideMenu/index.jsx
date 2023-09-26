import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import { menuTree } from '@/config/menuTree.jsx';
import { logoImg } from '@/config/index.js';
import '@/assets/styles/reset.css';
import menuStore from '@/store/menu/index.js';

const { Sider } = Layout;

function SideMenu() {
  const [openKeys, setOpenKeys] = useState(['/home']);
  const [userInfo, setUserInfo] = useState({});
  const [userMenu, setUserMenu] = useState([]);

  // const { resetMenus } = useContext(context);
  // 修改仓库数据
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { collapsed } = useSelector((state) => ( {collapsed: state.appRD.collapsed}))
  // 调用异步获取数据的方法
  // dispatch(menuStore.asyncActions.getMenu)

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo') || {};
    if(!Object.keys(userInfo)){
      // 通过筛选对比菜单数据   =====> 得到用户的权限菜单
      const localInfo = JSON.parse(userInfo);
      setUserInfo(localInfo)
      console.log('异步菜单',localInfo)

      // 异步菜单
      const asyncMenu = deepsMenu(menuTree, []);
      console.log('权限菜单', asyncMenu)
      setUserMenu(asyncMenu)
    } else {
      return setUserMenu([])
    }
  },[])

  useEffect(() => {
    console.log(pathname)
    setOpenKeys(pathname)
    console.log(openKeys)
  }, [pathname])

  // 筛选菜单
  function deepsMenu(data, newsArr = []) {
    const { menus } = userInfo.role;  // 必须是一个  list的一维数组
    for(const item of data){
      if(menus && menus.includes(item.key)){
        if(!item.children){
          newsArr.push(item)
        } else {
          let node = { ...item, children: [] };
          newsArr.push(node)
          deepsMenu(item.children, node.children)
        }
      }
    }
    return newsArr
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="layout-logo">
          <img src={ logoImg } alt="" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={ openKeys }
          // onClick={({key}) => { navigate(key) }}
          // items={ userMenu }
          items={ menuTree }
        >
        </Menu>
      </Sider>
  )
}

export default SideMenu
