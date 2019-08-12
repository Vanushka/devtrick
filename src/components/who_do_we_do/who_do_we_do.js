import React from 'react';

import './who_do_we_do.css';

import vpbank_plus from './img/png/VPBank-plus.png';
import bank_spb from './img/png/bank_spb.png';
import pr_solution from './img/png/pr_solution.png';
import neoflex from './img/png/neoflex.png';
import apptimizm from './img/png/apptimizm.png';
import rosbank from './img/png/rosbank.png';
import nectarin from './img/png/nectarin.png';
import rossgossstrah from './img/png/rossgossstrah.png';

class Who_do_we_do extends React.Component {
  render () {
    return (
      <div id="who_do_we_do">
        <div>
          <h1>Кому делаем</h1>
        </div>
        <div className="logos_company">
        <div className="logo_company">
          <img src={vpbank_plus} />
        </div>
        <div className="logo_company">
          <img src={bank_spb} />
        </div>
        <div className="logo_company">
          <img src={pr_solution} />
        </div>
        <div className="logo_company">
          <img src={neoflex} />
        </div>
        <div className="logo_company">
          <img src={apptimizm} />
        </div>
        <div className="logo_company">
          <img src={rossgossstrah} />
        </div>
        <div className="logo_company">
          <img src={rosbank} />
        </div>
        <div className="logo_company">
          <img src={nectarin} />
        </div>
        </div>
      </div>
    );
  }
}

export default Who_do_we_do;
