import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import App from '../App';

const RouterRoot = () => {
  return (
    <Routes location='hash'>
      <div>
        <Route exact strict path='/' component={App} />
      </div>
    </Routes>
  );
};

export default RouterRoot;
