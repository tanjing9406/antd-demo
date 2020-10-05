import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
    DesktopOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import './style.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

const AuSider = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [openKeys, setOpenKeys] = useState(['sub2'])

    const onOpenChange = (oKeys) => {
        if(oKeys.length === 0 || (openKeys && openKeys.length === 0)) {
            setOpenKeys(oKeys)
            return
        }
        const nextOpenKeys = oKeys.find(key => openKeys.indexOf(key) === -1)
        setOpenKeys([nextOpenKeys])
    }

    return (
        <Sider className="site-layout-background fx1" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu theme="dark" defaultSelectedKeys={['1']} openKeys={openKeys} onOpenChange={onOpenChange} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="材料管理">
                    <Menu.Item key="3"><Link to="/home">材料1</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/about">材料2</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/home">材料3</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="生产管理">
                    <Menu.Item key="1"><Link to="/home">生产计划量</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/about">压铸情况登记</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<DesktopOutlined />} title="仓库管理">
                    <Menu.Item key="6"><Link to="/home">冲压情况登记</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/home">装配工序管理</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<FileOutlined />} title="档案管理">
                    <Menu.Item key="8"><Link to="/home">外发抛光工序管理</Link></Menu.Item>
                    <Menu.Item key="9"><Link to="/home">冲压完工情况</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default AuSider