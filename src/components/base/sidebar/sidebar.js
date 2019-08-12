import React from 'react';

import './sidebar.css';

import telegram from './img/svg/telegram.svg';
import discord from './img/svg/discord.svg';
import whatsup from './img/svg/whatsup.svg';
import viber from './img/svg/viber.svg';

class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
      <a href="#"><img src={telegram} alt="telegram" /></a>
      <a href="#"><img src={discord} alt="discord" /></a>
      <a href="#"><img src={whatsup} alt="whatsup" /></a>
      <a href="#"><img src={viber} alt="viber" /></a>
    </div>
    )
  }
}

export default Sidebar;
