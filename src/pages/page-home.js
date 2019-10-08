import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import JumbotronHome from "../components/Jumbotron/JumbotronHome";
import FooterV2 from "../components/FooterV2";
import NewsHome from "../components/News/NewsHome";
import FeaturedHome from "../components/Featured/FeaturedHome";
import Event01 from "../components/Events/Event-01";
import GoalsWrapper from "../components/Goals/GoalsWrapper";
import FooterLinks from "../components/FooterLinks";
import Heading from "../components/Heading";
import JumbotronHomeVideo from "../components/Jumbotron/JumbotronHomeVideo";

const PageHome = () => (
  <div className="HomePage">
    <SEO title="ON-SDGS" />
    <Header />
    <JumbotronHome />
    <JumbotronHomeVideo />
    <main>
      <NewsHome />
      <FeaturedHome />
      {/* Block */}
      <section className="container mb-5">
        <Heading text="Events" textButton="See all events" size="small" />
        <div className="row row-spacing">
          <Event01 />
          <Event01 />
          <Event01 />
        </div>
      </section>
      <GoalsWrapper goals={17} />
      {/* Block */}
      <section className="container">
        <FooterLinks />
      </section>
    </main>
    <FooterV2 />
  </div>
);

export default PageHome;
