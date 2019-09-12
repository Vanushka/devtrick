import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import App from '../App';

const RouterRoot = () => {
  return (
    <Routes location='hash'>
      <div>
        <Route path='/' component={App} />
      </div>
    </Routes>
  );
};

export default RouterRoot;
