import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router'

import MenuConfig from '../../config/menu.config'

import './style.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

const AuSider = (props) => {
    const pathname = props.location.pathname.slice(1).split('/')
    const [collapsed, setCollapsed] = useState(false)
    const [selectedKeys, setSelectedKeys] = useState([pathname.join('-')])
    const [openKeys, setOpenKeys] = useState([pathname[0]])

    const onOpenChange = (oKeys) => {
        if (oKeys.length === 0 || (openKeys && openKeys.length === 0)) {
            setOpenKeys(oKeys)
            return
        }
        const nextOpenKeys = oKeys.find(key => openKeys.indexOf(key) === -1)
        setOpenKeys([nextOpenKeys])
    }
    useEffect(() => {
        setSelectedKeys([pathname.join('-')])
        setOpenKeys([pathname[0]])
    }, [props.location.pathname])
    return (
        <Sider className="site-layout-background fx1" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu theme="dark" selectedKeys={selectedKeys} openKeys={openKeys} onOpenChange={onOpenChange} mode="inline">
                {MenuConfig.map((menuItem) => (
                    <SubMenu key={menuItem.id} icon={<UserOutlined />} title={menuItem.title}>
                        {menuItem.subMenu.map(sub => <Menu.Item key={sub.id}><Link to={sub.url}>{sub.title}</Link></Menu.Item>)}
                    </SubMenu>
                ))}
            </Menu>
        </Sider>
    )
}

export default withRouter(AuSider)