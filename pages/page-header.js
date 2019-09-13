import React from "react";
import Link from 'next/link'
import Header from "../components/Header";
const HeaderPage = () => (
  <>
    <Header />

    <div className="container">
      <div className="heading-block">
        <h2>List of subcomponents</h2>
      </div>
    </div>
    <div className="container d-flex flex-column">
      <Link href="/header/page-navbar">Navbar</Link>
      <Link href="/header/page-navbarV2">NavbarV2</Link>
      <Link href="/header/page-language-navbar">Language Navbar</Link>
    </div>
  </>
);

export default HeaderPage;
