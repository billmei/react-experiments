import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from 'react-redux'
import './index.css';
import { createStore } from 'redux';
import rootReducer from './reducers';
let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
