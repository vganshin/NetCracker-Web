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

const logger = createLogger();

const store = compose(
  applyMiddleware(thunk, logger),
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
