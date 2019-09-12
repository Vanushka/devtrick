import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer, setConfig } from 'react-hot-loader';

import './index.css';
import RouterRoot from './router/router';
import reducer from './store/reducers/projects';

const store = createStore(reducer);

setConfig({
    showReactDomPatchNotification: false
})

const app = (
  <Provider store={store}>
    <AppContainer>
      <RouterRoot />
    </AppContainer>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
