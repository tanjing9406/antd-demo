import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { Layout, Button } from 'antd';

import 'antd/dist/antd.css'
import './App.css'

import { AuSider, PrivateRoute } from './components'
import LoginPage from './pages/loginpage'

const { Header, Footer, Content } = Layout;

function App() {
  const loginOut = () => {
    sessionStorage.removeItem('isAuthenticated')
    window.location.reload(false)
  }
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/">
          <Layout style={{ height: '100%' }}>
            <Header style={{ color: '#fff', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              奥利给五金ERP管理系统
              <Button type="primary" ghost onClick={loginOut}>模拟退出</Button>
            </Header>
            <Layout>
              <AuSider />
              <Content>
                <Switch>
                  <Route path='/' exact>
                    <Redirect to='/home' />
                  </Route>
                  <Route path="/home" component={Home} />
                  <Route path="/about" render={({ match }) => <About />} />
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

function Home() {
  return (<div>home page</div>)
}

function About() {
  return (<div>about page</div>)
}

export default App;
