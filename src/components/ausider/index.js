import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import MenuConfig from '../../config/menu.config'

import './style.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

const AuSider = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [openKeys, setOpenKeys] = useState(['prod-management'])

    const onOpenChange = (oKeys) => {
        if (oKeys.length === 0 || (openKeys && openKeys.length === 0)) {
            setOpenKeys(oKeys)
            return
        }
        const nextOpenKeys = oKeys.find(key => openKeys.indexOf(key) === -1)
        setOpenKeys([nextOpenKeys])
    }

    return (
        <Sider className="site-layout-background fx1" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu theme="dark" defaultSelectedKeys={['prod-planning-numbers']} openKeys={openKeys} onOpenChange={onOpenChange} mode="inline">
                {MenuConfig.map((menuItem) => (
                    <SubMenu key={menuItem.id} icon={<UserOutlined />} title={menuItem.title}>
                        {menuItem.subMenu.map(sub => <Menu.Item key={sub.id}><Link to={sub.url}>{sub.title}</Link></Menu.Item>)}
                    </SubMenu>
                ))}
            </Menu>
        </Sider>
    )
}

export default AuSider