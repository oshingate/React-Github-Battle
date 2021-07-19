import React, { Component } from 'react';
import Loader from './Loader';
import SingleArticle from './SingleArticle';

class PopularDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfData: null,
    
    };
  }

  componentDidMount() {
    let lang = this.props.match.params.lang;
    console.log('conponent will mount');

    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({ arrayOfData: data.items, })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    // let lang = this.props.match.params.lang;
    console.log('conponent will update');
    // fetch(
    //   `https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`
    // )
    //   .then((res) => res.json())
    //   .then((data) =>
    //     this.setState({ arrayOfData: data.items, })
    //   );
  }

  componentWillUnmount() {
    console.log('conponent will unmount');
  }

  render() {
    console.log(this.state.arrayOfData);

    if (!this.state.arrayOfData) {
      return <Loader />;
    } else {
      return (
        <div className='flex fw'>
          {this.state.arrayOfData.map((article, i) => {
            return (
              <SingleArticle data={article} index={i} key={i}></SingleArticle>
            );
          })}
        </div>
      );
    }
  }
}

export default PopularDiv;
