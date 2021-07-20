import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Battle from './Battle';
import Header from './Header';
import Popular from './Popular';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'white',
    };
  }

  handleBackground = () => {
    this.setState({
      background: this.state.background === 'white' ? '#1C2022' : 'white',
    });
  };
  render() {
    return (
      <>
        <Header
          handleBackground={this.handleBackground}
          background={this.state.background}
        />
        <main style={{ backgroundColor: this.state.background }}>
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
