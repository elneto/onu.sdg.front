import React from "react";
import { Link } from "gatsby";
import Header from "src/components/Header";
const HeaderPage = () => (
  <>
    <Header />

    <div className="container">
      <div className="heading-block">
        <h2>List of subcomponents</h2>
      </div>
    </div>
    <div className="container d-flex flex-column">
      <Link to="header/page-navbar/">Navbar</Link>
      <Link to="header/page-navbarV2/">NavbarV2</Link>
      <Link to="header/page-language-navbar/">Language Navbar</Link>
    </div>
  </>
);

export default HeaderPage;
