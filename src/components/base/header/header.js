import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { slide as Menu } from "react-burger-menu";

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
    return (
      <header>
      <div className="burger">
        <Menu>
          <NavLink className={
            location.pathname === "/we_made" ? "active" : "item"
          } to='/we_made' >Что мы сделали</NavLink>
          <NavLink className={
            location.pathname === "/what_are_we_doing" ? "active" : "item"
          } to='/what_are_we_doing' >Что мы делаем</NavLink>
          <NavLink className={
            location.pathname === "/who_do_we_do" ? "active" : "item"
          } to='/who_do_we_do' >Кому делаем</NavLink>
          <NavLink className={
            location.pathname === "/contacts" ? "active" : "item"
          } to='/contacts' >Контакты</NavLink>
        </Menu>
      </div>
      <div className="logo">
        <NavLink to='/' >
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul className="links">
        <li>
          <NavLink className={
            location.pathname === "/we_made" ? "active" : "item"
          } to='/we_made' >Что мы сделали</NavLink>
        </li>
        <li><NavLink className={
          location.pathname === "/what_are_we_doing" ? "active white" : "item"
        } to='/what_are_we_doing' >Что мы делаем</NavLink>
        </li>
        <li><NavLink className={
          location.pathname === "/who_do_we_do" ? "active" : "item"
        } to='/who_do_we_do' >Кому делаем</NavLink></li>
        <li><NavLink className={
          location.pathname === "/contacts" ? "active white" : "item"
        } to='/contacts' >Контакты</NavLink></li>
      </ul>
      <div className="contacts_menu">
        <span>Руководитель проектов</span>
        <a href="mailto:hello@devtrick.com">hello@devtrick.com</a>
        <a href="tel:+7 (996) 960-30-94">+7 (996) 960-30-94</a>
      </div>
    </header>
    )
  }

  componentDidMount() {
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
