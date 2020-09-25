import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Layout } from 'antd';
import 'antd/dist/antd.css'
import './App.css'

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{height: '100%'}}>
        <Header style={{color: '#fff', fontSize: 24}}>五金 ERP 管理系统</Header>
        <Layout>
          <Sider className="site-layout-background fx1">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/home">Users</Link>
                </li>
              </ul>
            </nav>
          </Sider>
          <Content>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" render={({ match }) => <About />} />
              </Switch>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
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
