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
import Footer from "./Footer/index.js";


import "bootstrap/dist/js/bootstrap.bundle.min";
import GoalsBanner from "./GoalsBanner/index.js";
import Tabs from "./Tabs/index.js";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
      <GoalsBanner color="green"/>
      <Tabs />
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
