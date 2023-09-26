import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined, FullscreenOutlined, 
    FullscreenExitOutlined, UndoOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Dropdown, Space, Avatar } from 'antd';
import '@/assets/styles/common.scss';

const { Header } = Layout;

function headBar() {
    const { token: { colorBgContainer } } = theme.useToken();
    const { collapsed, name } = useSelector((state) => (
        {
            collapsed: state.appRD.collapsed,
            name: state.userRD.name,
        }
    ))
    const [isOpen, setIsOpen] = useState(collapsed);
    const [fullScreen, setFullScreen] = useState(false);
    const dispatch = useDispatch();
    const $router = useNavigate()

    useEffect(() => {
        setIsOpen(isOpen)
        dispatch({type: 'setOpen', payload: isOpen})
    },[isOpen])

    function changeOpen(){
        setIsOpen(!isOpen)
    }

    // 退出登录
    function outLogin(){
        localStorage.clear();
        sessionStorage.clear();
        $router('/login')
    }

    return (
        <Header
            style={{
            padding: 0,
            background: colorBgContainer,
            }}
        >
            <div className='header-info'>
                <Button
                type="text"
                icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={ changeOpen }
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}/>

                <div className='info-right'>
                    <div style={{ paddingRight: '30px' }}>
                        <Space>
                        <UndoOutlined />
                        { fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined /> }
                        </Space>
                    </div>
                    
                    <Space>
                        <Dropdown
                        menu={{
                            items:[
                            {
                                label: <span onClick={ () => $router('/home') }>用户信息</span>,
                                key: '0',
                            },
                            {
                                label: <span onClick={ outLogin }>退出登录</span>,
                                key: '1',
                            }
                            ]
                        }}
                        trigger={['click']}
                        >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                            { name }<DownOutlined />
                            </Space>
                        </a>
                        </Dropdown>
                        <Avatar
                        style={{
                            backgroundColor: '#fde3cf',
                            color: '#f56a00',
                            marginRight: '10px'
                        }}>U</Avatar>
                    </Space>
                </div>
            </div>
        </Header>
    )
}

export default headBar
