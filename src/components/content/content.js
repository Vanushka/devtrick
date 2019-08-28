import React from 'react';

import ModalExampleCloseIcon from '../modalform/modalform';


import './content.css';
import './media.css';

import image from './img/png/phones.png';

import background from './img/jpg/main_banner.jpg';

class Content extends React.Component {
  render () {

    let sectionStyle = {
      backgroundImage: `url(${ background })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div id="content" className="content-block" style={sectionStyle}>
        <div className="inside-container">
          <div className="text">
            <h1>Разработка мобильных приложений и web-сервисов</h1>
            <p>аккуратно и во время</p>
          </div>
          <div className="links">
            <ModalExampleCloseIcon />
            <a href="#">Узнать примерную стоимость</a>
          </div>
          <div className="images-banner">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Content;