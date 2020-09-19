import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
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
  );
}

function Home() {
  return (<div>home page</div>)
}

function About() {
  return (<div>about page</div>)
}

export default App;
