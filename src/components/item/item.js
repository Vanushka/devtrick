import React from 'react';
import { connect } from 'react-redux';
import './item.css';

import productLogo from './img/vpbank-plus.jpg';

import contept_img from './img/vp_bank_concept.png';

class Item extends React.Component {
  componentDidMount() {
    console.log(this.props.currentProject);
  }
  render() {
    return (
      <div id="item" className="item-content">
        <div className="product-block">
          <div className="product-logo">
            <img src={this.props.currentProject.logo} />
          </div>
          <div className="info">
            <p>{this.props.currentProject.title}</p>
            <span>{this.props.currentProject.type}</span>
          </div>
        </div>
        <div className="concept">
          <img src={contept_img} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentProject: state.currentProject,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Item);
