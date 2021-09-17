import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PopularDiv from './PopularDiv';

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className='popular-sec container sec-padding'>
          <ul className='heading-ul'>
            <li>
              <NavLink to='/popular/all' activeClassName='active-header-nav'>
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/popular/JavaScript'
                activeClassName='active-header-nav'
              >
                JavaScript
              </NavLink>
            </li>
            <li>
              <NavLink to='/popular/Ruby' activeClassName='active-header-nav'>
                Ruby
              </NavLink>
            </li>
            <li>
              <NavLink to='/popular/Java' activeClassName='active-header-nav'>
                Java
              </NavLink>
            </li>
            <li>
              <NavLink to='/popular/CSS' activeClassName='active-header-nav'>
                CSS
              </NavLink>
            </li>
            <li>
              <NavLink to='/popular/Python' activeClassName='active-header-nav'>
                Python
              </NavLink>
            </li>
          </ul>

          <Route path='/popular/:lang' component={PopularDiv} />
        </section>
      </>
    );
  }
}

export default Popular;
