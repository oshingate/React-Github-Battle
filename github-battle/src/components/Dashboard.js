import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Battle from './Battle';
import Header from './Header';
import Popular from './Popular';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <Route path='/popular'>
            <Popular />
          </Route>
          <Route path='/battle'>
            <Battle />
          </Route>
        </main>
      </>
    );
  }
}

export default Dashboard;
