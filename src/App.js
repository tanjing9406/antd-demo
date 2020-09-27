import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import './App.css'

import { AuSider } from './components'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <Router>
      <Layout style={{height: '100%'}}>
        <Header style={{color: '#fff', fontSize: 24}}>奥利给五金ERP管理系统</Header>
        <Layout>
          <Sider className="site-layout-background fx1" collapsible collapsed={false}>
            <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub2']} mode="inline">
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
          <Content>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" render={({ match }) => <About />} />
              </Switch>
          </Content>
        </Layout>
        <Footer><div style={{display: 'flex', justifyContent: 'space-between'}}><span>登录用户：魏岁奥（普通用户）</span><span>登录时间：2020-09-25 09:10</span><span>记录数：0</span><span>连接状态：在线</span></div></Footer>
      </Layout>
    </Router>
  );
}

function Home() {
  return (<div>home page<AuSider /></div>)
}

function About() {
  return (<div>about page</div>)
}

export default App;
