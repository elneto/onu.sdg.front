import React from "react";

import NavBar from "./NavBar";
import LanguageNavBar from "./LanguageNavBar";
import HeaderBannerV2 from "./HeaderBannerV2";
import LoginModal from "../LoginModal";

class Header extends React.Component {
  render() {
    return (
      <header>
        <LanguageNavBar />
        <HeaderBannerV2 />
        <NavBar />
        <LoginModal />
      </header>
    );
  }
}

export default Header;
