import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class Places extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   news: []
    // };
  }

  

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, news } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoading) {
      return <React.Fragment>Loading ... </React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>News</h1>
          <ul>
            {news.map((content, index) =>
            <li key={index}>
              <h3>{content.title}</h3>
              <p>{content.abstract}</p>
              <p>{content.url}</p>
            </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Places);