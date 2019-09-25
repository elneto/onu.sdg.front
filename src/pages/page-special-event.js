import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import JumbotronSpecialEvent from "../components/Jumbotron/JumbotronSpecialEvent";
import Heading from "../components/Heading";
import News03 from "../components/News/News-03";
const PageSpecialEvent = () => (
  <>
    <SEO title="Special Event" />
    <Header />
    <JumbotronSpecialEvent />
    <main>
      <section className="special-block">
        <div className="container">
          <div className="border-bottom pb-5 mb-5 mt-5 separator-top">
            <p>
              The United Nations Second Global Sustainable Transport Conference
              will be held from 05-07 May 2020 in Beijing, China. It provides an
              opportunity to focus attention on the opportunities, challenges
              and solutions towards achieving sustainable transport objectives.
              It will follow up on the earlier Conference held in 2016 in
              Ashgabat, Turkmenistan and is expected to indicate a way forward
              for sustainable transport to help achieve the objectives of the
              2030 Agenda.
            </p>
          </div>
          <div
            className="special-image mb-5"
            style={{
              backgroundImage: "url('/assets/special-event.jpg')"
            }}
          >
            <h3>What is Sustainable Transport?</h3>
          </div>
        </div>
        <div className="container-background mb-5">
          <div className="container">
            <div className="container-small mb-5">
              <h3>Sustainable Transport, Sustainable Development</h3>
              <p>
                Olof Persson, former Chief Executive Officer of the Volvo Group,
                outlines key challenges and possible solutions regarding
                sustainable transport. Mr Persson was Co-Chair of the former
                Secretary-General’s High-Level Advisory Group on Sustainable
                Transport.
              </p>
            </div>
            <div className="special-video">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/0XTBYMfZyrM?autoplay=0&showinfo=0&controls=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mb-5">
            <Heading text="News" size="small" textButton="See all news" />
            <div className="row row-spacing">
              {[...Array(3)].map(item => (
                <News03 image="/assets/news-02.jpg" />
              ))}
            </div>
          </div>
          <div className="mb-5">
            <Heading text="Latests" size="small" />
            <div className="row row-spacing">
              {[...Array(3)].map(item => (
                <News03 image="/assets/news-02.jpg" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PageSpecialEvent;
