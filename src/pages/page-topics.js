import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import Heading from "../components/Heading";
import FooterV2 from "../components/FooterV2";
import Topic01 from "../components/Topics/Topic-01";

const PageTopics = () => (
  <>
    <SEO title="Topics"/>
    <Header />
    <main>
      <div className="container mb-5">
        <Heading text="Topics" size="small" />
        <div className="row row-spacing">
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
