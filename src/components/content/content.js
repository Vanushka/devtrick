import React from 'react';

import './content.css';

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
      <div id="content" className="content" style={sectionStyle}>
        <div className="inside-container">
          <div className="text">
            <h1>Разработка мобильных приложений и web-сервисов</h1>
            <p>аккуратно и во время</p>
          </div>
          <div className="links">
            <a href="#">Оставить заявку</a>
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
