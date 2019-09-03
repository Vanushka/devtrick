import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import './index.css';
import RouterRoot from './router/router';
import reducer from './store/reducers/projects';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
  <Provider store={store}>
    <AppContainer>
      <RouterRoot />
    </AppContainer>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
