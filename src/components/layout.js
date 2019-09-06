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
import JumbotronHome from "./Jumbotron/JumbotronHome/index.js";
import News01 from "./News/News-01/index.js";
import News02 from "./News/News-02/index.js";
import NewsImage from "../assets/news-02.jpg";
import News03 from "./News/News-03/index.js";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <JumbotronHome />
      <main className="container">
        <div className="d-flex justify-content-between flex-lg-row flex-column">
          <News01 />
          <News01 />
          <News01 />
        </div>
        <div className="d-flex  justify-content-between flex-lg-row flex-column">
          <News02 image={NewsImage} />
          <News02 image={NewsImage} />
        </div>
        <div className="d-flex justify-content-between flex-lg-row flex-column" >
          <News03 image={NewsImage}></News03>
          <News03 image={NewsImage}></News03>
          <News03 image={NewsImage}></News03>
        </div>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
