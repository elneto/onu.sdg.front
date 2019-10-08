import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import Heading from "../components/Heading";
import FooterV2 from "../components/FooterV2";
import News02 from "../components/News/News-02";
import News03 from "../components/News/News-03";

const PageNews = () => (
  <>
    <SEO title="News" />
    <Header />
    <main>
      <section className="container mb-5">
        <Heading text="News" size="small" />
        <div className="row row-spacing">
          {[...Array(2)].map(item => (
            <News02 image="/assets/news-02.jpg" />
          ))}
        </div>
      </section>
      <section className="container mb-5">
        <div className="row row-spacing">
          {[...Array(14)].map(item => (
            <News03 image="/assets/news-02.jpg" />
          ))}
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PageNews;
