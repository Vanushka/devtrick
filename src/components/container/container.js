import React from 'react';

import { BrowserRouter as Routes, browserHistory,  Route } from 'react-router-dom';

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
      <Routes location='hashHystory'>
        <div className="container">
          <Route path='/' exact component={Content} />
          <Route path='/we_made' exact component={We_made} />
          <Route path='/what_are_we_doing' exact component={What_are_we_doing} />
          <Route path='/who_do_we_do' exact component={Who_do_we_do} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/contacts' exact component={Contacts} />
          <Route path='/we_made/:item' component={Item} />
        </div>
      </Routes>
    );
  }
}

export default Container;
