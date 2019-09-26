import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Heading from "../components/Heading";
import FooterV2 from "../components/FooterV2";
import State from "../components/States";

const PageStatesBlock = () => (
  <>
    <SEO title="States" />
    <Header />
    <main>
      <section className="container mb-5">
        <Heading text="States" size="small" input/>
        <div className="row row-spacing">
          {[...Array(40).keys()].map(topic => (
           <State />
          ))}
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PageStatesBlock;
