import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NotFound from "../components/Jumbotron/NotFound";
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <NotFound />
    <FooterV2 />
  </Layout>
);

export default NotFoundPage;
