import React from 'react';

import { Switch,  Route } from 'react-router-dom';

import './container.css'

import Content from '../content/content';
import Portfolio from '../portfolio/portfolio';
import Competence from '../competence/competence';
import Clients from '../clients/clients';
import Contacts from '../contacts/contacts';
import Item from '../item/item';


class Container extends React.Component {
  render () {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={
            routeProps => (
            <React.Fragment>
              <Content />
              <Portfolio />
              <Competence />
              <Clients />
              <Contacts />
            </React.Fragment>
            )
          } />

          <Route path={`/project/:id`} component={Item} />
        </Switch>
      </div>
    );
  }
}

export default Container;
