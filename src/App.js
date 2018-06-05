import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Scheduler from './containers/Scheduler/Scheduler';

class App extends Component {
  render() {
    return (
            <Layout>
             <Scheduler />
            </Layout>
           );
  }
}

export default App;
