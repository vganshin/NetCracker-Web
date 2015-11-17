import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Header from '../components/Header'

@connect((state) => ({}))
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(pushState(null, '/parent/child/custom'));
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default App