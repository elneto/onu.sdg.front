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

import News01 from "./News/News-01/index.js";
import News02 from "./News/News-02/index.js";
import NewsImage from "../assets/news-02.jpg";
import News03 from "./News/News-03/index.js";
import News04 from "./News/News-04/index.js";
import News05 from "./News/News-05/index.js";
import JumbotronHome from "./Jumbotron/JumbotronHome/index.js";
import FooterV2 from "./FooterV2/index.js";
import JumbotronEvent03 from "./Jumbotron/JumbotronEvent03/index.js";
import JumbotronPartnerships from "./Jumbotron/JumbotronPartnerships/index.js";
import JumbotronEvent01 from "./Jumbotron/JumbotronEvent01/index.js";
import JumbotronTopics from "./Jumbotron/JumbotronTopics/index.js";
import JumbotronGoals from "./Jumbotron/JumbotronGoals/index.js";
import JumbotronActionNetworks from "./Jumbotron/JumbotronNetworks/index.js";
import JumbotronStates from "./Jumbotron/JumbotronStates/index.js";
import JumbotronSpecialEvent from "./Jumbotron/JumbotronSpecialEvent/index.js";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <JumbotronSpecialEvent />
      <main>
        <div className="container-full">
          <div className="d-flex justify-content-between flex-lg-row flex-column mb-5">
            <News01 />
            <News01 />
            <News01 />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <News02 image={NewsImage} />
            <News02 image={NewsImage} />
          </div>
          <div className="d-flex justify-content-between flex-lg-row flex-column">
            <News03 image={NewsImage}></News03>
            <News03 image={NewsImage}></News03>
            <News03 image={NewsImage}></News03>
          </div>
          <div className="d-flex justify-content-between flex-lg-row flex-column">
            <News04 />
            <News04 />
            <News04 />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
      <FooterV2 />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
