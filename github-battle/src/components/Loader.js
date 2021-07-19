import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class='divLoader'>
        <svg
          class='svgLoader'
          viewBox='0 0 1024 1024'
          width='10em'
          height='10em'
        >
          <path fill='lightblue' d='PATH FOR THE LOADER ICON' />
        </svg>
      </div>
    );
  }
}

export default Loader;
