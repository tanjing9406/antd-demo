import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { Layout, Button } from 'antd';

import 'antd/dist/antd.css'
import './App.css'

import { AuSider, PrivateRoute } from './components'
import LoginPage from './pages/loginpage'

import MenuConfig from './config/menu.config'
import DragPage from './pages/demo/drag'

const genMenuRoute = () => {
  return MenuConfig.reduce((rst, curItem, curIndex) => {
    return [
      ...rst,
      ...curItem.subMenu.map(i => <Route key={i.url} path={i.url} component={i.component} />)
    ]
  }, [])
}

const { Header, Footer, Content } = Layout;

function App() {
  const loginOut = () => {
    sessionStorage.removeItem('isAuthenticated')
    window.location.reload()
  }
  return (
    <Router>
      <Switch>
        <DragPage />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/">
          <Layout style={{ height: '100%' }}>
            <Header style={{ color: '#fff', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              奥利给五金ERP管理系统
              <Button type="primary" onClick={loginOut}>模拟退出</Button>
            </Header>
            <Layout>
              <AuSider />
              <Content>
                <Switch>
                  <Route path='/' exact>
                    <Redirect to='/prod/planingNumbers' />
                    {/* <Redirect to='/demo/1' /> */}
                  </Route>
                  {genMenuRoute()}
                </Switch>
              </Content>
            </Layout>
            <Footer><div style={{ display: 'flex', justifyContent: 'space-between' }}><span>登录用户：魏岁奥（普通用户）</span><span>登录时间：2020-09-25 09:10</span><span>记录数：0</span><span>连接状态：在线</span></div></Footer>
          </Layout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
