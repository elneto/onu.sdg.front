import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";
import Event05 from "../components/Events/Event-05";
import JumbotronEvent01 from "../components/Jumbotron/JumbotronEvent01";
import TabsDark from "../components/Tabs/TabsDark";
import TabsLight from "../components/Tabs/TabsLight";
import Document02 from "../components/Documents/Document-02";
import HeadingSubtitle from "../components/HeadingSubtitle";
import BodyContent from "../components/bodyContent";

const tabs = [
  { label: "Background", id: "background" },
  { label: "Programme", id: "programe" },
  { label: "Documentation", id: "documentation" },
  { label: "Registration", id: "registration" }
];
const tabsLight = [
  { label: "Monday, 13 May", id: "monday" },
  { label: "TUESDAY, 14 MAY", id: "tuesday" },
  { label: "WEDNESDAY, 15 MAY", id: "wednesday" },
  { label: "THURSDAY, 16 MAY", id: "thursday" }
];

const ViewEventType1 = () => (
  <>
    <SEO title="Event Type 1" />
    <Header />
    <JumbotronEvent01 />
    <main>
      <TabsDark tabs={tabs}>
        <div className="row d-flex justify-content-between no-gutters">
          <div className="col-12 col-lg-7">
            <HeadingSubtitle text="Background" />
            <BodyContent>
              <p>
                The annual Multi-stakeholder Forum on Science Technology and
                Innovation for the Sustainable Development Goals (STI Forum) is
                a part of the Technology Facilitation Mechanism mandated by the
                2030 Agenda and the Addis Ababa Action Agenda. It is expected to
                "provide a venue for facilitating interaction, matchmaking and
                the establishment of networks between relevant stakeholders and
                multi-stakeholder partnerships in order to identify and examine
                technology needs and gaps, including with regard to scientific
                cooperation, innovation and capacity-building, and also in order
                to help facilitate development, transfer and dissemination of
                relevant technologies for the sustainable development goals." It
                will "discuss science, technology and innovation cooperation
                around thematic areas for the implementation of the sustainable
                development goals, congregating all relevant stakeholders to
                actively contribute in their area of expertise."
              </p>
              <p>
                The first STI Forum was held in 2016. Information on past Fora
                can be found here.
              </p>
              <p>
                The fourth annual Multi-stakeholder Forum on Science, Technology
                and Innovation for the Sustainable Development Goals (STI Forum)
                will take place on 14-15 May 2019 in UN Headquarters, New York.
                ECOSOC President of 2019, Inga Rhona King, has appointed H.E.
                Ms. H. Elizabeth Thompson, Ambassador Extraordinary and
                Plenipotentiary, Permanent Representative of Barbados to the
                United Nations and H.E. Mrs. Marie Chatardová, Ambassador
                Extraordinary and Plenipotentiary, Permanent Representative of
                the Czech Republic to the United Nations, to act as co-chairs of
                the Forum.
              </p>
              <p>
                The theme of the STI Forum 2019 will be: "STI for ensuring
                inclusiveness and equality, with a special focus on SDGs 4, 8,
                10, 13, and 16".
              </p>

              <div className="media-content">
                <div className="media-item">
                  <img src="/assets/Speaker01.png" />
                  <h5>H.E. Ms. H. Elizabeth Thompson</h5>
                  <p>
                    Ambassador Extraordinary and Plenipotentiary, Permanent
                    Representative of Barbados to the United Nations
                  </p>
                </div>
                <div className="media-item">
                  <img src="/assets/Speaker02.png" />
                  <h5>H.E. Mrs. Marie Chatardová</h5>
                  <p>
                    Ambassador Extraordinary and Plenipotentiary, Permanent
                    Representative of the Czech Republic to the United Nations
                  </p>
                </div>
              </div>
            </BodyContent>
          </div>
          <div className="col-12 col-lg-4 no-gutters">
            {/* Block */}
            <section>
              <HeadingSubtitle text="Announcements" />
              <Document02 className="col-12" />
            </section>
            {/* Block */}
            <section>
              <HeadingSubtitle text="Latest" />
              <div className="spacing">
                {[...Array(6).keys()].map(document => (
                  <Document02 className="col-12" />
                ))}
              </div>
            </section>
            {/* Block */}
          </div>
        </div>
        <div>
          <HeadingSubtitle text="Programme" />
          <TabsLight tabs={tabsLight}>
            {/* Block */}
            <section className="events-block w-100 mb-5">
              <div className="col-12">
                <h4 className="month">Monday, 13 May</h4>
              </div>
              <div className="row row-spacing">
                <Event05 color="red" />
                <Event05 color="red" />
              </div>
            </section>
            {/* Block */}
            <section className="events-block w-100 mb-5">
              <div className="col-12">
                <h4 className="month">Tuesday, 14 May</h4>
              </div>
              <div className="row row-spacing">
                {[...Array(6).keys()].map(event => (
                  <Event05 color="blue" />
                ))}
              </div>
            </section>
            {/* Block */}
            <section className="events-block w-100 mb-5">
              <div className="col-12">
                <h4 className="month">Monday, 13 May</h4>
              </div>
              <div className="row row-spacing">
                {[...Array(2).keys()].map(event => (
                  <Event05 color="orange" />
                ))}
              </div>
            </section>
            {/* Block */}
            <section className="events-block w-100 mb-5">
              <div className="col-12">
                <h4 className="month">Monday, 13 May</h4>
              </div>
              <div className="row row-spacing">
                {[...Array(2).keys()].map(event => (
                  <Event05 color="red" />
                ))}
              </div>
            </section>
          </TabsLight>
        </div>
        <div>Documentation</div>
        <div>Registration</div>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default ViewEventType1;
