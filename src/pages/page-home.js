import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import JumbotronHome from "../components/Jumbotron/JumbotronHome";
import FooterV2 from "../components/FooterV2";
import NewsHome from "../components/News/NewsHome";
import FeaturedHome from "../components/Featured/FeaturedHome";
import Event01 from "../components/Events/Event-01";
import Button from "../components/Common/Button";
import GoalsWrapper from "../components/Goals/GoalsWrapper";
import FooterLinks from "../components/FooterLinks";

const PageHome = () => (
  <>
    <SEO title="Page two" />
    <Header />
    <JumbotronHome />
    <main>
      <NewsHome />
      <FeaturedHome />
      <div className="container">
        <div className="heading-block ">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5 col-lg-3">
              <h2>Events</h2>
            </div>
            <div className="separator col-1">
              <hr></hr>
            </div>
            <div className="heading-button col-12 col-sm-3">
              <Button color="primary">See all events</Button>
            </div>
          </div>
        </div>
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
  </>
);

export default PageHome;
