import React from "react";

 
import Header from "../components/header";
import Heading from "../components/Heading";
import FooterV2 from "../components/FooterV2";
import Topic01 from "../components/Topics/Topic-01";

const PageTopics = () => (
  <>
    {/* <SEO title="Topics"/> */}
    <Header />
    <main>
      <section className="container mb-5">
        <Heading text="Topics" size="small" />
        <div className="row row-spacing">
          {[...Array(20).keys()].map(topic => (
            <Topic01 />
          ))}
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PageTopics;
