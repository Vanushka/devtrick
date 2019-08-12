import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import App from '../App';

const RouterRoot = () => {
  return (
    <Routes location='hash'>
      <div>
        <Route exact strict path='/' component={App} />
        <Route exact strict path='/we_made' component={App} />
        <Route exact strict path='/made' component={App} />
        <Route exact strict path='/what_are_we_doing' component={App} />
        <Route exact strict path='/who_do_we_do' component={App} />
        <Route exact strict path='/blog' component={App} />
        <Route exact strict path='/contacts' component={App} />
      </div>
    </Routes>
  );
};

export default RouterRoot;
