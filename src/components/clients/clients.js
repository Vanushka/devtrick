import React from 'react';

import './clients.css';
import './media.css';

import clients from './img/jpg/clients.jpg';

import vpbank_plus from './img/png/VPBank-plus.png';
import bank_spb from './img/png/bank_spb.png';
import pr_solution from './img/png/pr_solution.png';
import neoflex from './img/png/neoflex.png';
import apptimizm from './img/png/apptimizm.png';
import rosbank from './img/png/rosbank.png';
import nectarin from './img/png/nectarin.png';
import rossgossstrah from './img/png/rossgossstrah.png';

class Clients extends React.Component {
  render () {
    let backgroundImage = {
      backgroundImage: `url(${clients})`,
    };
    return (
      <div id="clients" style={backgroundImage}>
        <div className="content-inside">
          <div>
            <h1>Клиенты</h1>
          </div>
          <div className="logos_com_container">
            <div className="logos_company">
              <div className="logo_company">
                <img src={vpbank_plus} alt="" />
              </div>
              <div className="logo_company">
                <img src={bank_spb} alt="" />
              </div>
              <div className="logo_company">
                <img src={pr_solution} alt="" />
              </div>
              <div className="logo_company">
                <img src={neoflex} alt="" />
              </div>
              <div className="logo_company">
                <img src={apptimizm} alt="" />
              </div>
              <div className="logo_company">
                <img src={rossgossstrah} alt="" />
              </div>
              <div className="logo_company">
                <img src={rosbank} alt="" />
              </div>
              <div className="logo_company">
                <img src={nectarin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
