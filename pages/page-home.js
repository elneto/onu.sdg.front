import React from "react";

import Header from "../components/header";
import JumbotronHome from "../components/Jumbotron/JumbotronHome";
import FooterV2 from "../components/FooterV2";
import NewsHome from "../components/News/NewsHome";
import FeaturedHome from "../components/Featured/FeaturedHome";
import Event01 from "../components/Events/Event-01";
import Button from "../components/Common/Button";
import GoalRelatedBlock from "../components/Goals/Related/GoalRelatedBlock";

const PageHome = () => (
  <>
    <Header />
    <JumbotronHome />
    <main>
      <NewsHome />
      <FeaturedHome />
      <div className="container">
        <div className="heading-block">
          <h2>Events</h2>
          <Button color="primary">See all events</Button>
        </div>
        <div className="row row-spacing mb-5">
          <Event01 />
          <Event01 />
          <Event01 />
        </div>
      </div>
    </main>
    {/**/}
    <GoalRelatedBlock goals={17} />
    <FooterV2 />
  </>
);

export default PageHome;
