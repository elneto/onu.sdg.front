/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header/index.js";
import "../scss/theme/layout.scss";
import Footer from "./Footer/index.js";

import Button from "./Button/index.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Input from "./Input/index.js";
import Select from "./Select/index.js";
import Checkbox from "./Checkbox/index.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Button color="primary">Hola soy un botón</Button>
        <Input
          id="exampleFormControlInput"
          type="email"
          placeholder="Placeholder"
        />
        <Select id="exampleFormControlSelect" label="Example" />
        <Checkbox id="checkbox" label="Check me"/>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
