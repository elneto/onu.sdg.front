import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";
import JumbotronEvent02 from "../components/Jumbotron/JumbotronEvent02";
import TabsDark from "../components/Tabs/TabsDark";
import Document01 from "../components/Documents/Document-01";
import Link from "../components/Common/Link";
import HeadingSubtitle from "../components/HeadingSubtitle";
import BodyContent from "../components/bodyContent";

const tabs = [
  { label: "Description", id: "description" },
  { label: "Documents", id: "documents" },
  { label: "STATEMENTS & PRESENTATIONS", id: "statements" }
];

const ViewEventType2 = () => (
  <>
    <SEO title="Event Type 2" />
    <Header />
    <JumbotronEvent02 />
    <main>
      <TabsDark tabs={tabs}>
        <div className="row d-flex justify-content-between no-gutters">
          <div className="col-12 col-lg-7">
            <HeadingSubtitle text="Description" />
            <BodyContent>
              <p>
                Partnership is more than simple cooperative relationship.
                Partnership is about building shared values. It entails
                capitalizing on comparative strengths and sharing risks.
                Partnership ultimately means investing for the level of impacts
                that would be hard to accomplish alone.
              </p>
              <p>
                Every year, ECOSOC Partnership Forum provides the opportunity to
                listen to the world’s most influential thinkers and actors. The
                Forum engages high-profile representatives from governments and
                non-state actors for dynamic discussions on how to define and
                promote effective partnerships and how partnerships can best
                advance the sustainable development agenda and the 17 SDGs.
              </p>
              <p>
                The ECOSOC Partnership Forum acts as a leveraging platform that
                offers actionable policy advices, a learning space to share
                experiences and lessons learned and an open forum that connects
                real partners. Moving away from transactional to
                transformational, the ECOSOC Partnership Forum envisions to help
                unlock the full potential of partnerships towards achieving the
                scope and scale of impacts required to bring the vision of
                “Leaving No One Behind” to reality. You are invited to be a part
                of this vision!
              </p>
              <p>Webcasts: </p>
              <ul className="content-list links">
                <li>
                  <a href="#">
                    Opening Session. - Session I: What It Takes to Build
                    Effective Country-level Partnership Platforms?
                  </a>
                </li>
                <li>
                  <a href="#">
                    Session II: Multi-stakeholder Partnership as a Lever to
                    Drive Inclusion and Impact. - Session III: Raising Ambition
                    for UN-associated Partnerships. 3) Closing Session
                  </a>
                </li>
              </ul>
            </BodyContent>
          </div>
          <div className="col-12 col-lg-4">
            {/* Block */}
            <section className="mb-5">
              <HeadingSubtitle text="Documents" />
              <Document01 className="col-12 mb-2" id="concept" />
              <div className="col">
                <Link className="black">Read more</Link>
              </div>
            </section>
            {/* Block */}
            <section className="mb-5">
              <HeadingSubtitle text="Statements & presentations" />
              <Document01 className="col-12 mb-2" id="presentations" />
              <div className="col">
                <Link className="black">Read more</Link>
              </div>
            </section>
          </div>
        </div>
        {/* Block */}
        <section className="mb-5">
          <HeadingSubtitle text="Documents" />
          <div className="row row-spacing">
            {[...Array(7).keys()].map((document, index) => (
              <Document01
                className="col-sm-12 col-lg-8"
                id={`document-${index}`}
              />
            ))}
          </div>
        </section>
        {/* Block */}
        <section className="mb-5">
          <HeadingSubtitle text="Statements & presentations" />
          <div className="row row-spacing">
            {[...Array(7).keys()].map((document, index) => (
              <Document01
                className="col-sm-12 col-lg-8"
                id={`document-${index}`}
              />
            ))}
          </div>
        </section>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default ViewEventType2;
