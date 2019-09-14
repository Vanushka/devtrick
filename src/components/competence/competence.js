import React from 'react';

import './competence.css'
import './media.css'

import apple from './img/svg/apple.svg';
import android from './img/svg/android.svg';
import information from './img/svg/information.svg'

import competence from './img/jpg/competence.jpg';


class Competence extends React.Component {
  render () {
    let backgroundImage = {
      backgroundImage: `url(${competence})`,
    };
    return (
      <div id="competence" style={backgroundImage}>
        <div className="content-inside">
          <h1>Компетенция</h1>
          <div className="examples">
            <div className="example">
              <div className="text">
                <p>Мобильные приложения для iOS и Android платформ</p>
              </div>
              <div className="icons">
                <img src={apple} alt="" />
                <img src={android} alt="" />
              </div>
            </div>
            <div className="example">
              <div className="text">
                <p>Сложные веб-сервисы с использованием фреймворков</p>
                <p style={{color: '#9245FF', fontFamily: 'CeraPro-Bold'}}>Python   -   Flask    Django PHP   -   YII     Laravel     Symfony</p>
              </div>
            </div>
            <div className="example">
              <div className="text">
                <p>Пользовательские интерфейсы c использованием современных библиотек </p>
                <p style={{color: '#FF1705', fontFamily: 'CeraPro-Bold'}}>vue.js     angular.js    react.js</p>
              </div>
            </div>
            <div className="example">
              <div className="text">
                <p style={{color: '#6FCF97', fontFamily: 'CeraPro-Bold'}}>AR и VR приложения</p>
                <p>для смартфонов и планшетов (виртуальная реальность и дополненная реальность)</p>
              </div>
            </div>
            <div className="example">
              <div className="text">
                <p>Сайты на популярных CMS:</p>
                <p style={{color: '#0066FF', fontFamily: 'CeraPro-Bold'}}>Wordpress, ModX, Битрикс, Joomla, SimplaCMS, Open Cart, Django CMS.</p>
              </div>
            </div>
            <div className="spetial">
              <div className="special_icon">
                <img src={information} alt="" />
              </div>
              <div className="text">
                <p>Готовы выполнить масштабные проекты, поможем с автоматизацией процессов крупным и средним компаниям</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Competence;
