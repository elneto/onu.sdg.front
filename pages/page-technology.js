import React from "react";

 
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";
import JumbotronTechnology from "../components/Jumbotron/JumbotronTechnology";
import TabsDark from "../components/Tabs/TabsDark";
import CardNumeric from "../components/CardNumeric";
import Event04 from "../components/Events/Event-04";
import Publications02 from "../components/Publications/Publications-02";
import Document01 from "../components/Documents/Document-01";
import Document02 from "../components/Documents/Document-02";
import HeadingSubtitle from "../components/HeadingSubtitle";
import BodyContent from "../components/bodyContent";

const tabs = [
  { label: "INTRODUCTION", id: "intro" },
  { label: "STI FORUM", id: "sti" },
  { label: "ONLINE PLATFORM", id: "online" },
  { label: "TASK TEAM", id: "task" },
  { label: "STI ROADMAPS", id: "roadmaps" },
  { label: "10-MEMBER GROUP", id: "member" },
  { label: "EVENTS & REPORTS", id: "events" }
];

const PageTechnology = () => (
  <>
    {/* <SEO title="Technology" /> */}
    <Header />
    <JumbotronTechnology />
    <main>
      <section className="container mb-5 mt-5">
        <div className="row row-spacing">
          {[...Array(3).keys()].map(index => (
            <CardNumeric
              className="col-sm-12 col-md-4"
              number={index + 1}
              text="United Nations Interagency task team on STI for the SDGs (IATT), including the 10-Member group"
            />
          ))}
        </div>
      </section>
      <TabsDark tabs={tabs}>
        <>
          <section className="mb-5">
            <HeadingSubtitle text="Introduction" />
            <BodyContent>
              <p>
                <a href="#">
                  Paragraph 70 of the 2030 Agenda for Sustainable Development{" "}
                </a>
                announced the launch of a "Technology Facilitation Mechanism"
                (TFM) in order to support the implementation of the Sustainable
                Development Goals (SDGs). The TFM will facilitate
                multi-stakeholder collaboration and partnerships through the
                sharing of information, experiences, best practices and policy
                advice among Member States, civil society, the private sector,
                the scientific community, United Nations entities and other
                stakeholders.
              </p>
            </BodyContent>
          </section>
          <section className="mb-5">
            <HeadingSubtitle text="Upcoming events" />
            <section className="events-block w-100 mb-5">
              <div className="col-12">
                <h4 className="month">Monday, 13 May</h4>
              </div>
              <div className="row row-spacing">
                <Event04 color="red" />
              </div>
            </section>
            <section className="events-block w-100 mb-5">
              <div className="col-12">
                <h4 className="month">Monday, 13 May</h4>
              </div>
              <div className="row row-spacing">
                <Event04 color="blue" />
              </div>
            </section>
          </section>
          <section className="mb-5">
            <HeadingSubtitle text="Publications" />
            <div className="row row-spacing">
              {[...Array(3).keys()].map(index => (
                <Publications02 className="col-sm-12 col-lg-8" />
              ))}
            </div>
          </section>
          <section className="mb-5">
            <HeadingSubtitle text="Overview of proposals" />
            <div className="row row-spacing">
              <Document01 className="col-sm-12 col-lg-8" id="document" />
            </div>
          </section>
          <section className="mb-5">
            <HeadingSubtitle text="Suggestions by UN Organizations" />
            <div className="row row-spacing">
              {[...Array(3).keys()].map(index => (
                <Document02 className="col-sm-12 col-lg-8" />
              ))}
            </div>
          </section>
        </>
        <></>
        <></>
        <></>
        <></>
        <></>
        <></>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default PageTechnology;
