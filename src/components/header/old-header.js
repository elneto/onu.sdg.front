import React from "react"
import logo from "../../assets/images/logo.svg"
import logoMobile from "../../assets/images/logo_mobile.svg"

import userImage from "../../assets/images/user.svg"
import bellImage from "../../assets/images/bell.svg"
import searchIcon from "../../assets/images/search.svg"
import homeIcon from "../../assets/images/home.svg"
import "./style.scss"
import SubItem from "../sub-item"
import custom from "./header";
import { Helmet } from "react-helmet"


// if(typeof document !== "undefined")
//   custom();


class Header extends React.Component {
  // toggleSubMenu = e => {
  //   let submenu = e.currentTarget.classList
  //   if (!submenu.contains("active")) {
  //     this.closeAllMenus()
  //     submenu.add("active")
  //   } else {
  //     this.closeAllMenus()
  //   }
  // }

  // closeAllMenus = () => {
  //   const menus = document.getElementsByClassName("has-submenu")
  //   for (let i = 0; i < menus.length; i += 1) {
  //     menus[i].classList.remove("active")
  //   }
  // }

  // toggleLanguageNav = e => {
  //   e.currentTarget.classList.toggle("open")
  //   e.currentTarget.nextElementSibling.classList.toggle("active")
  // }

  // showMenu = e => {
  //   e.currentTarget.classList.toggle("open")
  //   e.currentTarget.nextElementSibling.classList.toggle("active")
  // }

  render() {
    return (
      <>
        <header className="header">
          <div className="header__language">
            <div className="header__language-welcome">
              <img className="home-icon" src={homeIcon} alt=""/>
              <p>Welcome to the United Nations</p>
            </div>
            <button
              className="button button-burger primary"
              id="burger-language"
              type="button"
              // onClick={e => this.toggleLanguageNav(e)}
            >
              <span />
              <span />
              <span />
              <span />
            </button>
            <nav role="navigation">
              <ul>
                <li>
                  <a href="#">عربي</a>
                </li>
                <li>
                  <a href="#">中文</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">Français</a>
                </li>
                <li>
                  <a href="#">Русский</a>
                </li>
                <li>
                  <a href="#">Español</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__logo">
            <img className="logo" src={logo} alt="logo" />
            <img className="logo-mobile" src={logoMobile} alt="logo" />
            <div className="actions">
              <button className="button button-circle grey">
                <img className="svg" src={bellImage} alt="bell image" />
                <span className="notification">10</span>
              </button>
              <button className="button button-circle grey">
                <img className="svg" src={userImage} alt="user image" />
              </button>
            </div>
          </div>
          <nav>
            <button
              id="burger-nav"
              type="button"
              className="button button-burger secondary"
             
            >
              <span />
              <span />
              <span />
              <span />
            </button>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li className="has-submenu">
                Goals
                <div className="submenu">
                  <SubItem /> <SubItem /> <SubItem />
                </div>
              </li>
              <li>
                <a href="#">States</a>
              </li>
              <li className="has-submenu">
                Partnerships
                <div className="submenu">2</div>
              </li>
              <li className="has-submenu">
                Stakeholders
                <div className="submenu">3</div>
              </li>
              <li className="has-submenu">
                Resources
                <div className="submenu">4</div>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li className="has-submenu">
                About
                <div className="submenu">5</div>
              </li>
            </ul>
            <form>
              <input
                type="search"
                className="input input-search"
                placeholder="Search"
              />
              <button className="button">
                <img src={searchIcon} />
              </button>
            </form>
          </nav>
        </header>
      </>
    )
  }
}

export default Header