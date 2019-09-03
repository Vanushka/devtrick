import React from 'react';

import { BrowserRouter as Routes,  Route, Switch } from 'react-router-dom';

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
        <Switch>
          <div className="container">
            <Route exact path={`/`} exact component={Content} />
            <Route exact path={`/`} component={We_made} />
            <Route exact path={`/`} component={What_are_we_doing} />
            <Route exact path={`/`} component={Who_do_we_do} />
            <Route exact path={`/`} component={Contacts} />
            <Route path={`/project/:id`} exact render={({ match }) => (<Item match={match} />)} />
          </div>
        </Switch>
      </Routes>
    );
  }
}

export default Container;
