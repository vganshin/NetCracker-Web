import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';
import routes from 'routes';
import store from 'store';

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
