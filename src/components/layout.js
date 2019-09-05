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
import GoalsBanner from "./GoalsBanner";
import LabelNumeric from "./LabelNumeric";
import LabelNumericLight from "./LabelNumericLight/index.js";
import LabelGoal from "./LabelGoal";
import LabelLikes from "./LabelLikes/index.js";
import LabelStatus from "./LabelStatus/index.js";
import LabelPoints from "./LabelPoints/index.js";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
      <GoalsBanner color="green"/>
      <LabelGoal>Goal 1</LabelGoal>
      <LabelLikes>20</LabelLikes>
      <LabelStatus status="completed">Completed</LabelStatus>
      <LabelStatus status="cancelled">Completed</LabelStatus>
      <LabelStatus status="on-track">Completed</LabelStatus>
      <LabelPoints status="completed"/>
      <LabelPoints status="cancelled"/>
      <LabelPoints status="on-track"/>
      <LabelNumeric> 3</LabelNumeric>
      
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
