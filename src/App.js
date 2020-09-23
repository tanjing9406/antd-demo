import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from 'antd';
import 'antd/dist/antd.css'
import './App.css'

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{height: '100%'}}>
      <Header style={{color: '#fff'}}>Header</Header>
      <Layout>
        <Sider className="site-layout-background fx1">Sider</Sider>
        <Content>
          <Router>
            <Switch>
              {/* Using the `component` prop */}
              <Route path="/home" component={Home} />

              {/* Using the `render` prop */}
              <Route
                path="/about"
                render={({ match }) => <About />}
              />
            </Switch>
          </Router>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    
  );
}

function Home() {
  return (<div>home page</div>)
}

function About() {
  return (<div>about page</div>)
}

export default App;
