import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { slide as Menu } from "react-burger-menu";

import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

import './header.css';
import './white-theme.css';
import './media.css';

import logoStandart from './img/svg/logo.svg';
import logoWhite from './img/svg/logoWhite.svg';

class Header extends React.Component {
  render () {
    let logo = location.pathname === "/what_are_we_doing" ? logoWhite : (location.pathname === "/contacts" ? logoWhite : logoStandart);
    function changeColor() {
      if (location.pathname === "/what_are_we_doing") {
        var elementsBurger = document.getElementsByClassName('bm-burger-bars');
          for (var i = 0; i < elementsBurger.length; i++) {
            elementsBurger[i].style.background = "white";
          }
      }
    }
    window.addEventListener("scroll", bringmenu);

    function bringmenu() {
        if (document.documentElement.scrollTop < 130) {
            document.getElementById("bottommenu").style.top = "-100px";
        } else {
            document.getElementById("bottommenu").style.top = "0";
        }
    }

    function scrollToTop () {
      scroll.scrollToTop();
    };

    return (
      <header>
        <div className="burger">
          <Menu>
            <Link
              activeClass="active"
              smooth={true}
              duration= {1000}
              to='we_made'>Порфтолио
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              duration= {1000}
              to='what_are_we_doing'>Что мы умеем
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              duration= {1000}
              to='who_do_we_do'>Клиенты
            </Link>
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration= {1000}
              to='contacts'>Контакты
            </Link>
          </Menu>
        </div>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="links">
          <li>
            <Link
              spy={true}
              smooth={true}
              duration= {1000}
              offset={-30}
              to='we_made'>Порфтолио
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              duration= {1000}
              offset={-30}
              to='what_are_we_doing'>Что мы умеем
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              duration= {1000}
              offset={-30}
              to='who_do_we_do'>Клиенты
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration= {1000}
              offset={-30}
              to='contacts'>Контакты
            </Link>
          </li>
        </ul>
        <div className="contacts_menu">
          <span>Руководитель проектов</span>
          <a href="mailto:hello@devtrick.com">hello@devtrick.com</a>
          <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
        </div>
        <div className="fix-header" id="bottommenu">
        <div className="logo">
          <Link onClick={scrollToTop}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="links">
          <li>
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration= {1000}
              offset={-30}
              to='we_made'>Порфтолио
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration= {1000}
              offset={-30}
              to='what_are_we_doing'>Что мы умеем
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration= {1000}
              offset={-30}
              to='who_do_we_do'>Клиенты
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration= {1000}
              offset={-30}
              to='contacts'>Контакты
            </Link>
          </li>
        </ul>
        <div className="contacts_menu">
          <span>Руководитель проектов</span>
          <a href="mailto:hello@devtrick.com">hello@devtrick.com</a>
          <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
        </div>
      </div>
    </header>
    )
  }

  componentDidMount() {

    scrollSpy.update();

    if (location.pathname === "/what_are_we_doing" || location.pathname === "/contacts") {
      var elementsBurger = document.getElementsByClassName('bm-burger-bars');
        for (var i = 0; i < elementsBurger.length; i++) {
          elementsBurger[i].style.background = "white";
        }
      let links = document.getElementsByClassName('item');
        for (var i = 0; i < links.length; i++) {
          links[i].classList.add('white');
        }

      let tagsH1 = document.getElementsByTagName('h1');
      for (var i = 0; i < tagsH1.length; i++) {
        tagsH1[i].classList.add('white');
      }

      let contacts_menu = document.getElementsByClassName('contacts_menu')[0].children;
      for (var i = 0; i < contacts_menu.length; i++) {
        contacts_menu[i].classList.add('white');
      }
    }
  }
}

export default Header;
