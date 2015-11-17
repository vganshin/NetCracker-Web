import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {
  ReduxRouter,
  reduxReactRouter
} from 'redux-router';

import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { createHistory } from 'history';

import App from 'containers'

import { NotFound, Login } from 'components'

import reducer from 'reducers'

const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory })
)(createStore)(reducer);

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route path="/" component={App}>
              <Route path="auth/login" component={Login}>
              </Route>
              <Route path="*" component={NotFound}/>
            </Route>
          </ReduxRouter>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('react-app'));
