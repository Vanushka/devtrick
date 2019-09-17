import React from 'react';
import { connect } from 'react-redux';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import ModalExampleCloseIcon from '../modalform/modalform';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as actions from '../../store/actions/projects';

import './portfolio.css';

import portfolio_banner_back from './img/jpg/portfolio.jpg';


import feat from './img/svg/feat.svg';

import './projects.css';

class Portfolio extends React.Component {

  navClickedHandler = (event, projectId, name) => {
    console.log(projectId, this.props);
    this.props.onProjectChosen(projectId);
  };
  render() {
    let backgroundImage = {
      backgroundImage: `url(${portfolio_banner_back})`,
    };
    const projects = this.props.projects.map(prj => (
      <NavLink
        key={prj.id}
        className={`${'product ' + prj.style} ${prj.disabled ? 'disabled' : ''}`}
        to={'/project/' + prj.id}
      >
        <div className="text">
          <p>{prj.title}</p>
          <span>{prj.type}</span>
          {prj.feat ? <img src={feat} alt="logo" /> : null}
        </div>
        <div className="logo_product">
          <img src={prj.logo} alt="logo" />
        </div>
      </NavLink>
    ));

    return (
      <div id="portfolio" style={backgroundImage}>
        <div className="content-inside">
          <h1>Портфолио</h1>
          <div className="products">
            {projects}
            <a className="product submit_your_app">
                <ModalExampleCloseIcon />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    error: state.error,
  };
};

// prettier-ignore
const mapDispatchToProps = dispatch => {
  return {
    onProjectChosen: projectId => dispatch(actions.setCurrentProject(projectId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio);
