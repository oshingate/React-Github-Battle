import React, { Component } from 'react';
import BattleHome from './BattleHome';
import BattleResult from './BattleResult';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstUser: undefined,
      secondUser: undefined,
      showBattle: false,
    };
  }

  handleAddUser = (event, name) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${event.target[name].value}`)
      .then((res) => res.json())
      .then((first) => {
        this.setState({ [name]: first });
      });
  };

  handleBattle = (first, second) => {
    console.log(first, second);

    this.setState((prevState) => {
      return {
        showBattle: !prevState.showBattle,
      };
    });
  };

  render() {
    return (
      <>
        {!this.state.showBattle ? (
          <BattleHome
            firstUser={this.state.firstUser}
            secondUser={this.state.secondUser}
            handleAddUser={this.handleAddUser}
            handleBattle={this.handleBattle}
          />
        ) : (
          <BattleResult
            firstUser={this.state.firstUser}
            secondUser={this.state.secondUser}
          />
        )}
      </>
    );
  }
}

export default Battle;
