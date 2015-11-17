import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

const store = applyMiddleware(thunk)(createStore)(reducer);

const rootElement = document.getElementById('react-app')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)