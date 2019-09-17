import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import JumbotronHome from "../components/Jumbotron/JumbotronHome";
import FooterV2 from "../components/FooterV2";
import NewsHome from "../components/News/NewsHome";
import FeaturedHome from "../components/Featured/FeaturedHome";
import Event01 from "../components/Events/Event-01";
import Button from "../components/Common/Button";
import TimeLine01 from "../components/Timeline/Timeline-01";
import TimeLine02 from "../components/Timeline/Timeline-02";

const PageHome = () => (
  <>
    <SEO title="Page two" />
    <Header />
    <JumbotronHome />
    <main>
      <NewsHome />
      <FeaturedHome />
      <div className="container">
        <div className="heading-block row">
          <div className="col-12">
            <h2>Events</h2>
            <Button color="primary">See all events</Button>
          </div>
        </div>
        <div className="row row-spacing mb-5">
          <Event01 />
          <Event01 />
          <Event01 />
        </div>

        <div className="heading-block row">
          <div className="col-12">
            <h2>Milestones</h2>
          </div>
        </div>

        <TimeLine01 />
        <TimeLine02 />
      </div>
    </main>

    <FooterV2 />
  </>
);

export default PageHome;
