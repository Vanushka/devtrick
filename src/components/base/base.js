import React from 'react';

import './base.css';
import './media.css';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';
import Container from '../container/container';

import we_made_banner_back from './img/backgrounds/we_made.jpg';
import what_are_we_doing from './img/backgrounds/what_are_we_doing.jpg';
import who_do_we_do from './img/backgrounds/who_do_we_do.jpg';
import blog from './img/backgrounds/blog.jpg';
import contacts from './img/backgrounds/contacts.jpg';
import contacts_mob_back from './img/backgrounds/contacts_mob_back.jpg';
import personal_back from './img/backgrounds/black.jpg'

class Base extends React.Component {
  render () {

    function getBackground(pathnames, backgrounds) {
      for (var i = 0; i < backgrounds.length; i++) {
        if (location.pathname === pathnames[i]) {
          if (location.pathname !== "/contacts") {
            return backgrounds[i];
          } else if (location.pathname === '/contacts'){
            if (window.innerWidth < 768) {
              return backgrounds = contacts_mob_back;
            }
            return backgrounds[i];
          }
        }
      }
    }

    let pathnames = ["/we_made", "/what_are_we_doing", "/who_do_we_do", "/blog", "/contacts", "/personal"]

    let backgrounds = [we_made_banner_back, what_are_we_doing, who_do_we_do, blog, contacts, personal_back];

    getBackground(pathnames, backgrounds)

    let maneBackStyle = {
      height: '100%',
      backgroundImage: `url(${ getBackground(pathnames, backgrounds) })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div id="main" style={maneBackStyle}>
        <Header />
        <Sidebar />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default Base;
