import React from 'react';

import './sidebar.css';
import './media.css';

import telegram from './img/svg/telegram.svg';
import discord from './img/svg/discord.svg';
import whatsup from './img/svg/whatsup.svg';
import viber from './img/svg/viber.svg';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeClass = 'active';
  }
  render () {
    return (
      <div className="sidebar">
        <div className="side-block">
          <a href="#"><img src={telegram} alt="telegram" /></a>
          <a href="#"><img src={discord} alt="discord" /></a>
          <a href="#"><img src={whatsup} alt="whatsup" /></a>
          <a href="#"><img src={viber} alt="viber" /></a>
        </div>
        <a className={location.pathname === '/we_made' ? this.activeClass + " communication" : "communication"} href="#">Cвяжись с нами</a>
      </div>
    )
  }
}

export default Sidebar;
