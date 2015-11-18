import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import createLogger from 'redux-logger';
import routes from 'routes'
import reducer from 'reducers'

const store = compose(
  applyMiddleware(thunk, createLogger()),
  reduxReactRouter({ createHistory })
)(createStore)(reducer);

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('react-app'));

import * as actions from 'actions'
import api from 'api'
window.store = store;
window.actions = actions;
window.api = api
