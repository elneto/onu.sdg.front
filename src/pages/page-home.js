import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import JumbotronHome from "../components/Jumbotron/JumbotronHome";
import FooterV2 from "../components/FooterV2";
import NewsHome from "../components/News/NewsHome";
import FeaturedHome from "../components/Featured/FeaturedHome";
import Event01 from "../components/Events/Event-01";
import Button from "../components/Common/Button";
import GoalsTargetBlock from "../components/Goals/Targets/GoalsTargetBlock";
import Publications01 from "../components/Publications/Publications-01";
import Publications02 from "../components/Publications/Publications-02";
import Topic01 from "../components/Topics/Topic-01";
import Topic02 from "../components/Topics/Topic-02";

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

        <div className="mb-5 row row-spacing">
          {[...Array(4).keys()].map(item => (
            <Publications02 />
          ))}
        </div>

        <div className="container">
          <div className="heading-block row">
            <div className="col-12">
              <h2>Topics</h2>
            </div>
          </div>
          <div className="mb-5 row row-spacing">
            {[...Array(4).keys()].map(item => (
              <Topic01 />
            ))}
          </div>
        </div>



        <div className="container">
          <div className="heading-block row">
            <div className="col-12">
              <h2>Topics</h2>
            </div>
          </div>
          <div className="mb-5 row row-spacing">
            {[...Array(3).keys()].map(item => (
             <Topic02 />
            ))}
          </div>
        </div>
  
                 

      </div>
    </main>

    <FooterV2 />
  </>
);

export default PageHome;
