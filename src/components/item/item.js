import React from 'react';

import './item.css';

import productLogo from './img/vpbank-plus.jpg'

import contept_img from './img/vp_bank_concept.png'

class Item extends React.Component {
  render () {
    return (
      <div id="item" className="item-content">
        <div className="product-block">
          <div className="product-logo">
            <img src={productLogo} />
          </div>
          <div className="info">
            <p>VPBank Vietnam</p>
            <span>Мобильное приложение</span>
          </div>
        </div>
        <div className="concept">
          <img src={contept_img} />
        </div>
      </div>
    )
  }
}

export default Item;
