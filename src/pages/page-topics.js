import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Heading from "../components/Heading";
import FooterV2 from "../components/FooterV2";
import Topic01 from "../components/Topics/Topic-01";

const PageTopics = () => (
  <>
    <SEO title="Topics" />
    <Header />
    <main>
      <div className="container">
        <Heading text="Topics" size="small" />
        <div className="mb-5 row row-spacing">
          {[...Array(20).keys()].map(topic => (
            <Topic01 />
          ))}
        </div>
      </div>
    </main>
    <FooterV2 />
  </>
);

export default PageTopics;
