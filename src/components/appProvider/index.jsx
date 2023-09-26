import { createContext, useState } from 'react';
// import { constantRoutes } from '../../router/router';

export const context = createContext()

// 获取角色菜单
function rolesMenu(role){
    const arr = []
    findInfo(constantRoutes)
    function findInfo(data, parent){
        data.forEach((item) => {
            const { children, ...info } = item;
            if(item.children){
                info.children = [];
                findInfo(children, info.children);
                info.children.length === 0 ? delete info.children : null
            }
            if(role){
                if(info.roles?.includes(role)){
                    parent ? parent.push(info) : arr.push(info)
                }
            } else {
                parent ? parent.push(info) : arr.push(info)
            }
        })
    }
    return arr
}

// 根据侧边栏 =====> 生成一维路由数组
function flatRoutes(menus){
    const arr = []
    // 扁平化处理
    function findInfo(data){
        data.forEach((item) => {
            const { children, ...info } = item;
            if(item.children){
                findInfo(children, info.children);
            }
        })
    }
    findInfo(menus)
    return arr
}

function AppProvider({ children }){
    // 持久化处理
    let defaultMenus = [];
    let defaultRoutes = [];
    let oldRole = sessionStorage.getItem('role');
    if(oldRole){
        defaultMenus = rolesMenu(oldRole);
        defaultRoutes = flatRoutes(defaultMenus);
    }

    const [menus, setMenus] = useState([]);
    const [routes, setRoutes] = useState([]);

    // 重置菜单：根据当前角色生成菜单和路由
    const resetMenus = (role) => {
        sessionStorage.setItem('role', role)
        // 初始值
        const tmpMenu = rolesMenu(role);
        // setMenus(tmpMenu); // 权限菜单控制
        setMenus(constantRoutes); // 非权限菜单
        setRoutes(flatRoutes(tmpMenu));
    }
    return <context.Provider value={{menus, routes, resetMenus}}>{ children }</context.Provider>
}

export default AppProvider