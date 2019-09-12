import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="heading-block">
        <h2>List of components</h2>
      </div>
    </div>
    <div className="d-flex flex-column container">
      <Link to="/page-home">Home</Link>
      <Link to="/page-header/">Header</Link>
      <Link to="/page-footer/">Footer</Link>
      <Link to="/page-news/">News</Link>
    </div>
  </Layout>
);

export default IndexPage;
