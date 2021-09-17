import React, { Component } from 'react';

class BattleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='battle-sec container sec-padding'>
        <h2>Instruction</h2>

        <div className='instruction-div flex fw'>
          <div className='flex-30'>
            <h3>Enter 2 Github Users</h3>
            <div className='flex center'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-people-fill'
                viewBox='0 0 16 16'
              >
                <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                <path
                  fillRule='evenodd'
                  d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
                />
                <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
              </svg>
            </div>
          </div>

          <div className='flex-30'>
            <h3>Battle</h3>
            <div className='flex center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-x-octagon-fill'
                viewBox='0 0 16 16'
              >
                <path d='M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z' />
              </svg>
            </div>
          </div>

          <div className='flex-30'>
            <h3>See the winner</h3>
            <div className='flex center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-award'
                viewBox='0 0 16 16'
              >
                <path d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z' />
                <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
              </svg>
            </div>
          </div>
        </div>

        <h2>Players</h2>

        <div className='battle-div flex jsb'>
          <div className='flex-50'>
            <h3>Player One</h3>
            <form
              action=''
              onSubmit={(event) => {
                this.props.handleAddUser(event, 'firstUser');
              }}
            >
              <input
                type='text'
                name='firstUser'
                id='firstUser'
                placeholder='firstUser'
              />
              <button
                className={this.props.firstUser ? 'active' : ''}
                type='submit'
              >
                Submit
              </button>
            </form>

            {this.props.firstUser ? (
              <div className='flex jsb battle-Home-card'>
                <div className='battle-Home-img-div'>
                  <img
                    src={this.props.firstUser.avatar_url}
                    alt='avatarUserOne'
                  />
                </div>
                <h4>{this.props.firstUser.name}</h4>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='flex-50'>
            <h3>Player Two</h3>
            <form
              action=''
              onSubmit={(event) => {
                this.props.handleAddUser(event, 'secondUser');
              }}
            >
              <input
                type='text'
                name='secondUser'
                id='secondUser'
                placeholder='second User'
              />
              <button
                className={this.props.secondUser ? 'active' : ''}
                type='submit'
              >
                Submit
              </button>
            </form>
            {this.props.secondUser ? (
              <div className='flex jsb battle-Home-card'>
                <div className='battle-Home-img-div'>
                  <img
                    src={this.props.secondUser.avatar_url}
                    alt='avatarUserOne'
                  />
                </div>
                <h4>{this.props.secondUser.name}</h4>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='battle-btn-div flex center'>
          {this.props.firstUser && this.props.secondUser ? (
            <button
              onClick={(event) => {
                this.props.handleBattle(
                  this.props.firstUser,
                  this.props.secondUser
                );
              }}
            >
              Battle
            </button>
          ) : (
            ''
          )}
        </div>
      </section>
    );
  }
}

export default BattleHome;
