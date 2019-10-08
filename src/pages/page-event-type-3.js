import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";
import JumbotronEvent03 from "../components/Jumbotron/JumbotronEvent03";
import Document01 from "../components/Documents/Document-01";
import HeadingSubtitle from "../components/HeadingSubtitle";
import BodyContent from "../components/bodyContent";

const ViewEventType3 = () => (
  <>
    <SEO title="Event Type 2" />
    <Header />
    <JumbotronEvent03 />
    <main>
      <section className="container mb-5">
        <div className="row d-flex justify-content-between no-gutters">
          <div className="col-12 col-lg-7">
            <HeadingSubtitle text="Description" />
            <BodyContent>
              <p>
                The 2030 Agenda Partnership Accelerator is an initiative aimed
                at accelerating and scaling up effective partnering across all
                stakeholders to deliver transformational impact for the
                Sustainable Development Goals (SDGs).
              </p>
              <p>
                The Partnership Accelerator is a collaborative initiative
                between UN Department of Economic and Social Affairs (UN DESA),
                UN Office for Sustainable Development (UNOSD), and UN Office for
                Partnership (UNOP). Building on needs identified by participants
                at the Partnership Exchange in 2018, the initiative will
                accelerate partnerships for the SDGs by:
              </p>
              <ul className="content-list">
                <li>
                  Building the partnering skills and competencies of UN, member
                  states, NGOs and business counterparts and create a resource
                  library providing access to a range of tools, guidance and
                  case studies; increased competencies and a common language
                  should result in far faster partnership development and the
                  creation of more robust, more effective partnerships;
                </li>
                <li>
                  Building the partnering skills and competencies of UN, member
                  states, NGOs and business counterparts and create a resource
                  library providing access to a range of tools, guidance and
                  case studies; increased competencies and a common language
                  should result in far faster partnership development and the
                  creation of more robust, more effective partnerships;
                </li>
                <li>
                  Building the partnering skills and competencies of UN, member
                  states, NGOs and business counterparts and create a resource
                  library providing access to a range of tools, guidance and
                  case studies; increased competencies and a common language
                  should result in far faster partnership development and the
                  creation of more robust, more effective partnerships;
                </li>
              </ul>
            </BodyContent>
          </div>
          <div className="col-12 col-lg-4">
            <section className="mb-5">
              <HeadingSubtitle text="Documents" />
              <Document01 className="col-12" id="concept" />
            </section>
            <section className="mb-5">
              <HeadingSubtitle text="Statements & presentations" />
              <Document01 className="col-12 mb-2" id="presentations" />
            </section>
          </div>
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default ViewEventType3;
