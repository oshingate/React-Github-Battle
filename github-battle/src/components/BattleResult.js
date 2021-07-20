import React, { Component } from 'react';

class BattleResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreOfFirst: 0,
      scoreOfSecond: 0,
      winner: undefined,
    };
  }

  componentDidMount() {
    console.log('BattleDidMount');
    let scoreOfFirst =
      this.props.firstUser.followers * 20 + this.props.firstUser.public_repos;
    let scoreOfSecond =
      this.props.secondUser.followers * 20 + this.props.secondUser.public_repos;

    if (scoreOfFirst > scoreOfSecond) {
      this.setState({
        scoreOfFirst: scoreOfFirst,
        scoreOfSecond: scoreOfSecond,
        winner: this.props.firstUser.name,
      });
    } else if (scoreOfFirst < scoreOfSecond) {
      this.setState({
        scoreOfFirst: scoreOfFirst,
        scoreOfSecond: scoreOfSecond,
        winner: this.props.secondUser.name,
      });
    } else {
      this.setState({
        scoreOfFirst: scoreOfFirst,
        scoreOfSecond: scoreOfSecond,
        winner: 'Tie',
      });
    }
  }

  //   let one={avatar_url: "https://avatars.githubusercontent.com/u/49781752?v=4"
  //   bio: "\r\nLearning MERN stack in Alt Campus."
  //   blog: ""
  //   company: null
  //   created_at: "2019-04-19T09:34:18Z"
  //   email: null
  //   events_url: "https://api.github.com/users/oshingate/events{/privacy}"
  //   followers: 5
  //   followers_url: "https://api.github.com/users/oshingate/followers"
  //   following: 7
  //   following_url: "https://api.github.com/users/oshingate/following{/other_user}"
  //   gists_url: "https://api.github.com/users/oshingate/gists{/gist_id}"
  //   gravatar_id: ""
  //   hireable: true
  //   html_url: "https://github.com/oshingate"
  //   id: 49781752
  //   location: "pune"
  //   login: "oshingate"
  //   name: "Onkar Shingate"
  //   node_id: "MDQ6VXNlcjQ5NzgxNzUy"
  //   organizations_url: "https://api.github.com/users/oshingate/orgs"
  //   public_gists: 0
  //   public_repos: 78
  //   received_events_url: "https://api.github.com/users/oshingate/received_events"
  //   repos_url: "https://api.github.com/users/oshingate/repos"
  //   site_admin: false
  //   starred_url: "https://api.github.com/users/oshingate/starred{/owner}{/repo}"
  //   subscriptions_url: "https://api.github.com/users/oshingate/subscriptions"
  //   twitter_username: "onkarshingate2"
  //   type: "User"
  //   updated_at: "2021-07-16T15:02:28Z"
  //   url: "https://api.github.com/users/oshingate"}
  render() {
    return (
      <section className='battle-result-sec container'>
        {this.state.winner !== 'Tie' ? (
          <h2>winner is {this.state.winner}</h2>
        ) : (
          <h2>Game is Tied</h2>
        )}

        <div className='result-div flex '>
          <div className='flex-40 result-card'>
            {this.state.scoreOfFirst > this.state.scoreOfSecond ? (
              <h3>Winner</h3>
            ) : this.state.scoreOfFirst < this.state.scoreOfSecond ? (
              <h3>Looser</h3>
            ) : (
              <h3>Tie</h3>
            )}
            <div className='img-div'>
              <img src={this.props.firstUser.avatar_url} alt='avatarUserOne' />
            </div>
            <h4>Score :- {this.state.scoreOfFirst}</h4>
            <h2>{this.props.firstUser.login}</h2>
            <ul>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-person-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                </svg>
                <span> {this.props.firstUser.name}</span>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-compass'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' />
                  <path d='m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z' />
                </svg>
                <span> {this.props.firstUser.location}</span>
              </li>
              <li>
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
                    fill-rule='evenodd'
                    d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
                  />
                  <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
                </svg>
                <span> {this.props.firstUser.followers} Followers</span>
              </li>
              <li>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-person-check-fill'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z'
                  />
                  <path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                </svg>
                <span> {this.props.firstUser.following} Following</span>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-code-slash'
                  viewBox='0 0 16 16'
                >
                  <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
                </svg>
                <span> {this.props.firstUser.public_repos} Repositories</span>
              </li>
            </ul>
          </div>

          <div className='flex-40 result-card'>
            {this.state.scoreOfFirst < this.state.scoreOfSecond ? (
              <h3>Winner</h3>
            ) : this.state.scoreOfFirst > this.state.scoreOfSecond ? (
              <h3>Looser</h3>
            ) : (
              <h3>Tie</h3>
            )}
            <div className='img-div'>
              <img src={this.props.secondUser.avatar_url} alt='avatarUserOne' />
            </div>
            <h4>Score :- {this.state.scoreOfSecond}</h4>

            <h2>{this.props.secondUser.login}</h2>

            <ul>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-person-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                </svg>
                <span> {this.props.secondUser.name}</span>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-compass'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' />
                  <path d='m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z' />
                </svg>
                <span> {this.props.secondUser.location}</span>
              </li>
              <li>
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
                    fill-rule='evenodd'
                    d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
                  />
                  <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
                </svg>
                <span> {this.props.secondUser.followers} Followers</span>
              </li>
              <li>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-person-check-fill'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z'
                  />
                  <path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                </svg>
                <span> {this.props.secondUser.following} Following</span>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-code-slash'
                  viewBox='0 0 16 16'
                >
                  <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
                </svg>
                <span> {this.props.secondUser.public_repos} Repositories</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default BattleResult;
