import React from "react";

import LanguageNavBar from "./LanguageNavBar";
import NavBarFull from "./NavBarV2";
import HeaderBannerV2 from "./HeaderBannerV2";

class Header extends React.Component {
  render() {
    return (
      <header>
        <LanguageNavBar />
        <HeaderBannerV2 />
        <NavBarFull />
      </header>
    );
  }
}

export default Header;
