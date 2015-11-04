// import React from "react"
// import ReactDOM from "react-dom"
// import Navigation from "components/navigation"
// import api from "api"

// document.api = api

// ReactDOM.render(
//   <Navigation />,
//   document.getElementById('react-app')
// );

// import { createStore } from 'redux'
// import todoApp from 'reducers'
// import { addTodo } from "actions"


// let store = createStore(todoApp)

// store.dispatch(addTodo("dodod"))

// console.log(store.getState().todos)

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from 'containers/App'
import todoApp from 'reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('react-app')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)