import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import JumbotronHome from "../components/Jumbotron/JumbotronHome";
import FooterV2 from "../components/FooterV2";
import NewsHome from "../components/News/NewsHome";
import FeaturedHome from "../components/Featured/FeaturedHome";
import Event01 from "../components/Events/Event-01";
import GoalsWrapper from "../components/Goals/GoalsWrapper";
import FooterLinks from "../components/FooterLinks";
import Heading from "../components/Heading";

const PageHome = () => (
  <div>
    <SEO title="ON-SDGS" />
    <Header />
    <JumbotronHome />
    <main>
      <NewsHome />
      <FeaturedHome />
      <div className="container">
        <Heading text="Events" textButton="See all events" size="small" />
        <div className="row row-spacing mb-5">
          <Event01 />
          <Event01 />
          <Event01 />
        </div>
      </div>
      <GoalsWrapper goals={17} />
      <div className="container">
        <FooterLinks />
      </div>
    </main>
    <FooterV2 />
  </div>
);

export default PageHome;
