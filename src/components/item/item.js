import React from 'react';

import { projects } from '../../projects';
import './item.css';
import './media.css';

import productLogo from './img/vpbank-plus.jpg';

import contept_img from './img/vp_bank_concept.png';

class Item extends React.Component {
  state = {
    currentProject: null,
  }
  componentWillMount() {
    console.log(this.props.match.params.id, 'hui')
    let project = projects.filter(prj => prj.id == this.props.match.params.id)[0];
    this.setState({currentProject: project});
  }
  render() {
    return (
      <div id="item" className="item-content">
        <div className="product-block">
          <div className="product-logo">
            <img src={this.state.currentProject.logo} />
          </div>
          <div className="info">
            <p>{this.state.currentProject.title}</p>
            <span>{this.state.currentProject.type}</span>
            <div className="text" dangerouslySetInnerHTML={{ __html:this.state.currentProject.text }}></div>
          </div>
        </div>
        <div className="concept">
          <img src={this.state.currentProject.contept_img} />
        </div>
      </div>
    );
  }
}


export default Item;
