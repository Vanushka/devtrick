import React from 'react';
import { connect } from 'react-redux';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import Slider from "react-slick";

import ModalExampleCloseIcon from '../modalform/modalform';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as actions from '../../store/actions/projects';

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

import './projects.css';
class We_made extends React.Component {

  navClickedHandler = (event, projectId, name) => {
    console.log(projectId);
    this.props.onProjectChosen(projectId);
    this.props.history.push('/we_made/' + name);
  };
  render() {
    const projects = this.props.projects.map(prj => (
      <div
        key={prj.id}
        className={'product ' + prj.style}
        to={'/we_made/' + prj.name}
        onClick={() => this.navClickedHandler(event, prj.id, prj.name)}
      >
        <div className="text">
          <p>{prj.title}</p>
          <span>{prj.type}</span>
          {prj.feat ? <img src={feat} alt="logo" /> : null}
        </div>
        <div className="logo_product">
          <img src={prj.logo} alt="logo" />
        </div>
      </div>
    ));

    let settings = {
      dots: true,
      autoplay: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if (window.innerWidth > 768) {
      return (
        <div id="we_made">
          <h1>Что мы сделали</h1>
          <div className="products">
            {projects}
            <a className="product submit_your_app">
              <p>
                <ModalExampleCloseIcon /> на проект
              </p>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div id="we_made">
          <h1>Что мы сделали</h1>
          <div className="products">
            <Slider {...settings}>
              {projects}
              <a className="product submit_your_app">
                <p>
                  Оставить заявку <br />
                  на проект
                </p>
              </a>
            </Slider>
          </div>
        </div>
      );
    }

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
)(We_made);
