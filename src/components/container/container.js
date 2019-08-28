import React from 'react';

import { BrowserRouter as Routes,  Route } from 'react-router-dom';

import './container.css'

import Content from '../content/content';
import We_made from '../we_made/we_made';
import What_are_we_doing from '../what_are_we_doing/what_are_we_doing';
import Who_do_we_do from '../who_do_we_do/who_do_we_do';
import Blog from '../blog/blog';
import Contacts from '../contacts/contacts';
import Item from '../item/item';


class Container extends React.Component {
  render () {
    return (
      <Routes location='hash'>
        <div className="container">
          <Content />
          <We_made />
          <What_are_we_doing />
          <Who_do_we_do />
          {/*<Route path='/blog' exact component={Blog} />*/}
          <Contacts />
          <Route path='/:item' component={Item} />
        </div>
      </Routes>
    );
  }
}

export default Container;
