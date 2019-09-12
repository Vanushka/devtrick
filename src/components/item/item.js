import React from 'react';

import { projects } from '../../projects';
import './item.css';
import './media.css';

class Item extends React.Component {
  state = {
    currentProject: null,
  }
  componentWillMount() {
    let project = projects.filter(prj => prj.id === Number(this.props.match.params.id))[0];
    this.setState({currentProject: project});
  }
  render() {
    return (
      <div id="item" className="item-content">
        <div className="product-block">
          <div className="product-logo">
            <img src={this.state.currentProject.logo} alt="" />
          </div>
          <div className="info">
            <p>{this.state.currentProject.title}</p>
            <span>{this.state.currentProject.type}</span>
            <div className="text" dangerouslySetInnerHTML={{ __html:this.state.currentProject.text }}></div>
          </div>
        </div>
        <div className="concept">
          <img src={this.state.currentProject.contept_img} alt="" />
        </div>
      </div>
    );
  }
}


export default Item;
