import React, { Component } from 'react';
import Layout from './components/layout';
import Portfolio from './components/portfolio/portfolio';

class App extends Component {
  render() {
    return (
      <Layout>
        <Portfolio />
      </Layout>
    );
  }
}

export default App;
