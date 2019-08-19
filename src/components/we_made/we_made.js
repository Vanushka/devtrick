import React from 'react';
import Slider from "react-slick";

import { NavHashLink as NavLink } from 'react-router-hash-link';

import Item from '../item/item';

import Container from '../container/container';
import './we_made.css';
import './products.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import feat from './img/jpg/feat.jpg';
import vpbank from './img/png/VPbank.png';
import logo from './img/png/VPbankLogo.png';
import logo_bank from './img/png/bank.png';
import moscow_bank from './img/png/moscow_bank.png';
import prodel from './img/png/prodel.png';
import prodel_logo from './img/png/prodel_logo.png';
import seagentLogo from './img/png/seagent-logo.png';
import seagent from './img/png/seagent.png';
import rr from './img/png/rr.png';
import rr_logo from './img/png/rr_logo.png';
import rr_desc from './img/png/rr_desc.png';
import dfm_logo from './img/png/dfm_logo.png';
import dfm from './img/png/dfm.png';
import galantis from './img/png/galantis.png';
import mc_logo from './img/png/mc_logo.png';
import mc from './img/png/mc.png';
import scachki from './img/png/scachki.png';
import cvz from './img/png/cvz.png';
import cvz_logo from './img/png/cvz_logo.png';
import carryfood from './img/png/carryfood.png';
import carryfood_logo from './img/png/carryfood_logo.png';

class We_made extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     autoplay: false,
  //   };
  // }
  // sliderInit (windowSize) {
  //   if (windowSize.windowWidth < 768) {
  //     this.setState({
  //       autoplay: true,
  //     });
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'vpbank',
          title: 'VPBank Vietnam',
          type: 'Мобильное приложение',
          logo: logo,
          style: 'VpBank',
          feat: false,
        },
        {
          name: 'spbbank',
          title: 'Мобильная котировальная доска (Банк Санкт-Петербурга)',
          type: 'Мобильное приложение',
          logo: logo_bank,
          style: 'SpbBank',
          feat: false,
        },
        {
          name: 'prodel',
          title: 'Prodel - сервис доставки продуктов в Азербайджане',
          type: 'Мобильное приложение',
          logo: prodel_logo,
          style: 'Prodel',
          feat: false,
        },
        {
          name: 'seagent',
          title: 'SeAgent - сервис бронирования стояночных мест для яхт',
          type: 'Мобильное приложение',
          logo: seagentLogo,
          style: 'Seagent',
          feat: false,
        },
        {
          name: 'rr_mob',
          title: 'Русское Радио',
          type: 'Мобильное приложение',
          logo: rr_logo,
          style: 'RusRadioMobile',
          feat: true,
        },
        {
          name: 'rr',
          title: 'Русское Радио',
          type: 'Сайт',
          logo: rr_logo,
          style: 'RusRadio',
          feat: true,
        },
        {
          name: 'dfm_mob',
          title: 'DFM - dance radio',
          type: 'Мобильное приложение',
          logo: dfm_logo,
          style: 'DfmMobile',
          feat: true,
        },
        {
          name: 'dfm',
          title: 'DFM - dance radio',
          type: 'Сайт',
          logo: dfm_logo,
          style: 'Dfm',
          feat: true,
        },
        {
          name: 'mc_mob',
          title: 'Radio Monte Carlo',
          type: 'Мобильное приложение',
          logo: mc_logo,
          style: 'MonteCarlo',
          feat: true,
        },
        {
          name: 'mc',
          title: 'Radio Monte Carlo',
          type: 'Сайт',
          logo: mc_logo,
          style: 'MonteCarloSite',
          feat: true,
        },
        {
          name: 'cvz',
          title: 'Центр взыскания задолженности',
          type: 'Сайт',
          logo: cvz_logo,
          style: 'CVZ',
          feat: false,
        },
        {
          name: 'carryfood',
          title: 'НесуЕду - сервис доставки продуктов из супермаркетов',
          type: 'Мобильное приложение',
          logo: carryfood_logo,
          style: 'Carryfood',
          feat: false,
        }
      ],
    };

  }

  render () {
    const products = this.state.products.map(product => (
      <NavLink key={product.id} className={'product ' + product.style} to={'/we_made/' + product.name}>
        <div className="text">
          <p>{product.title}</p>
          <span>{product.type}</span>
          {product.feat ? <img src={feat} alt="logo" /> : null}
        </div>
        <div className="logo_product">
          <img src={product.logo} alt="logo" />
        </div>
      </NavLink>
    ));

      let settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      let slider = <div className="products">
        {products}
        <a className="product submit_your_app">
          <p>
            Оставить заявку <br />
            на проект
          </p>
        </a>
      </div>

      if (window.innerWidth < 768) {
        slider = <div className="products"><Slider {...settings}>{products}
        <a className="product submit_your_app">
          <p>
            Оставить заявку <br />
            на проект
          </p>
        </a></Slider></div>;
        return slider;
      }

    return (
      <div id="we_made">
        <h1>Что мы сделали</h1>
        {slider}
      </div>
    );
  }
}

export default We_made;
