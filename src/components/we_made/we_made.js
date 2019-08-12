import React from 'react';

import { NavHashLink as NavLink } from 'react-router-hash-link';

import './we_made.css';
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
  render () {
    return (
      <div id="we_made">
        <h1>Что мы сделали</h1>
        <div className="products">
          <NavLink className="product" to='/we_made/vpbank' style={{ backgroundImage: `url(${ vpbank })` }}>
            <div className="text">
              <p>VPBank Vietnam</p>
              <span>Мобильное приложение</span>
            </div>
            <div className="logo_product">
              <img src={logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/spbbank' style={{ backgroundImage: `url(${ moscow_bank })` }} >
            <div className="text">
              <p>Мобильная котировальная доска (Банк Санкт-Петербурга)</p>
              <span>Мобильное приложение</span>
            </div>
            <div className="logo_product">
              <img src={logo_bank} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/prodel' style={{ backgroundImage: `url(${ prodel })` }} >
            <div className="text">
              <p>Prodel - сервис доставки продуктов в Азербайджане</p>
              <span>Мобильное приложение</span>
            </div>
            <div className="logo_product">
              <img src={prodel_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/seagent' style={{ backgroundImage: `url(${ seagent })` }} >
            <div className="text">
              <p>SeAgent - сервис бронирования стояночных мест для яхт</p>
              <span>Мобильное приложение</span>
            </div>
            <div className="logo_product">
              <img src={seagentLogo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/rr_mob' style={{ backgroundImage: `url(${ rr })` }} >
            <div className="text">
              <p>Русское Радио</p>
              <span>Мобильное приложение</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={rr_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/rr' style={{ backgroundImage: `url(${ rr_desc })` }} >
            <div className="text">
              <p>Русское Радио</p>
              <span>Сайт</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={rr_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/dfm_mob' style={{ backgroundImage: `url(${ galantis })` }} >
            <div className="text">
              <p>DFM - dance radio</p>
              <span>Мобильное приложение</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={dfm_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/dfm' style={{ backgroundImage: `url(${ dfm })` }} >
            <div className="text">
              <p>DFM - dance radio</p>
              <span>Сайт</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={dfm_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/montecarlo_mob' style={{ backgroundImage: `url(${ mc })` }} >
            <div className="text">
              <p>Radio Monte Carlo</p>
              <span>Мобильное приложение</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={mc_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/montecarlo' style={{ backgroundImage: `url(${ scachki })` }} >
            <div className="text">
              <p>Radio Monte Carlo</p>
              <span>Сайт</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={mc_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/dcc' style={{ backgroundImage: `url(${ cvz })` }} >
            <div className="text">
              <p>Центр взыскания задолженности</p>
              <span>Сайт</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={cvz_logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink className="product" to='/we_made/nesuedu' style={{ backgroundImage: `url(${ carryfood })` }} >
            <div className="text">
              <p>НесуЕду - сервис доставки продуктов из супермаркетов</p>
              <span>Мобильное приложение</span>
              <img src={feat} alt="logo" />
            </div>
            <div className="logo_product">
              <img src={carryfood_logo} alt="logo" />
            </div>
          </NavLink>
          <a className="product submit_your_app">
            <p>Оставить заявку <br />на проект</p>
          </a>
        </div>
      </div>
    );
  }
}

export default We_made;
