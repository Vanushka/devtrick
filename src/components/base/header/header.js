import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { slide as Menu } from "react-burger-menu";

import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

import './header.css';
import './white-theme.css';
import './media.css';

import logo from './img/svg/logo.svg';
import logoWhite from './img/svg/logoWhite.svg';


class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  checkUrl () {
    if (location.pathname !== '/') {
      window.location = '/';
    } else {
      console.log('Error!');
    }
  }

  render () {

    function bringmenu() {
        if (document.body.scrollTop < 130) {
            document.getElementById("bottommenu").style.top = "-100px";
        } else {
            document.getElementById("bottommenu").style.top = "0";
        }
    }

    window.addEventListener("scroll", bringmenu);


    function scrollToTop () {
      scroll.scrollToTop();
    };
    if (location.pathname === '/') {
      return (
        <header>
          <div className="burger">
            <Menu isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
            >
              <Link
                onClick={() => this.closeMenu()}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                to='portfolio'>Порфтолио
              </Link>
              <Link
                onClick={() => this.closeMenu()}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                to='competence'>Компетенция
              </Link>
              <Link
                onClick={() => this.closeMenu()}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                to='clients'>Клиенты
              </Link>
              <Link
                onClick={() => this.closeMenu()}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                to='contacts'>Контакты
              </Link>
            </Menu>
          </div>
          <div className="logo">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="links">
            <li>
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                offset={-30}
                to='portfolio'>Порфтолио
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                offset={-30}
                to='competence'>Компетенции
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                offset={-30}
                to='clients'>Клиенты
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                offset={-30}
                to='contacts'>Контакты
              </Link>
            </li>
          </ul>
          <div className="contacts_menu">
            <span>Руководитель проектов</span>
            <a href="mailto:hello@devtrick.pro">hello@devtrick.pro</a>
            <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
          </div>
          <div className="fix-header" id="bottommenu">
          <div className="logo">
            <Link onClick={scrollToTop} to="">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                offset={-30}
                to='portfolio'>Порфтолио
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                offset={-30}
                to='competence'>Компетенция
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                offset={-30}
                to='clients'>Клиенты
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                duration={1000}
                offset={-30}
                to='contacts'>Контакты
              </Link>
            </li>
          </ul>
          <div className="contacts_menu">
            <span>Руководитель проектов</span>
            <a href="mailto:hello@devtrick.pro">hello@devtrick.pro</a>
            <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
          </div>
        </div>
      </header>
      );
    } else {
      return (
        <header>
          <div className="burger">
            <Menu isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
            >
              <NavLink
                onClick={() => this.closeMenu()}
                smooth
                to='/#portfolio'>Порфтолио
              </NavLink>
              <NavLink
                onClick={() => this.closeMenu()}
                smooth
                to='/#competence'>Компетенция
              </NavLink>
              <NavLink
                onClick={() => this.closeMenu()}
                smooth
                to='/#clients'>Клиенты
              </NavLink>
              <NavLink
                onClick={() => this.closeMenu()}
                smooth
                to='/#contacts'>Контакты
              </NavLink>
            </Menu>
          </div>
          <div className="logo">
            <NavLink to={"/"}>
              <img src={location.pathname !== "/personal" ? logo : logoWhite} alt="logo" />
            </NavLink>
          </div>
          <ul className="links">
            <li>
              <NavLink
                smooth
                className="item"
                to='/#portfolio'>Порфтолио
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth
                className="item"
                to='/#competence'>Компетенция
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth
                className="item"
                to='/#clients'>Клиенты
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth
                className="item"
                to='/#contacts'>Контакты
              </NavLink>
            </li>
          </ul>
          <div className="contacts_menu">
            <span>Руководитель проектов</span>
            <a href="mailto:hello@devtrick.pro">hello@devtrick.pro</a>
            <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
          </div>
          <div className="fix-header" id="bottommenu">
          <div className="logo">
            <NavLink onClick={scrollToTop} to="">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="links">
            <li>
              <NavLink
                smooth
                to='/#portfolio'>Порфтолио
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth
                to='/#competence'>Компетенция
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth
                to='/#clients'>Клиенты
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth
                to='/#contacts'>Контакты
              </NavLink>
            </li>
          </ul>
          <div className="contacts_menu">
            <span>Руководитель проектов</span>
            <a href="mailto:hello@devtrick.pro">hello@devtrick.pro</a>
            <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
          </div>
        </div>
      </header>
      );
    }
  }

  componentDidMount() {

    scrollSpy.update();

    if (location.pathname === "/personal") {
      var elementsBurger = document.getElementsByClassName('bm-burger-bars');
        for (var i = 0; i < elementsBurger.length; i++) {
          elementsBurger[i].style.background = "white";
        }
      let links = document.getElementsByClassName('item');
        for (var k = 0; k < links.length; k++) {
          links[k].classList.add('white');
        }

      let tagsH1 = document.getElementsByTagName('h1');
      for (var l = 0; l < tagsH1.length; l++) {
        tagsH1[l].classList.add('white');
      }

      let contacts_menu = document.getElementsByClassName('contacts_menu')[0].children;
      for (var n = 0; n < contacts_menu.length; n++) {
        contacts_menu[n].classList.add('white');
      }
    }
  }
}

export default Header;
