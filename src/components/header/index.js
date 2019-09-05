import React from "react";

import NavBar from "./NavBar";
import LanguageNavBar from "./LanguageNavBar";
import HeaderBanner from "./HeaderBanner";

class Header extends React.Component {
  render() {
    return (
      <header>
        <LanguageNavBar />
        <HeaderBanner />
        <NavBar />
      </header>
    );
  }
}

export default Header;
