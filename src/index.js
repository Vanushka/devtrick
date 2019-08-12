import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.css';

import RouterRoot from './router/router';
ReactDOM.render(
  <AppContainer>
    <RouterRoot />
  </AppContainer>,
  document.getElementById('root')
);
