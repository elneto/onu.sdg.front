/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./Header/index.js";
import "../scss/theme/layout.scss";

import News01 from "./News/News-01/index.js";

import JumbotronHome from "./Jumbotron/JumbotronHome/index.js";
import FooterV2 from "./FooterV2/index.js";
import Featured01 from "./Featured-01/index.js";

const Layout = ({}) => {
  return (
    <>
      <Header />
      <JumbotronHome />
      <main>
        <div className="container-full">
          <div className="row">
            <News01 />
            <News01 />
            <News01 />
          </div>
        </div>
        <div className="container-full">
          <div className="mb-5 row">
            <Featured01 />
            <Featured01 />
            <Featured01 />
          </div>
        </div>
      </main>
      <FooterV2 />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
