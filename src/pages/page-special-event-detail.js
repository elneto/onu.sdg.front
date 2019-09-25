import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import JumbotronAbout from "../components/Jumbotron/JumbotronAbout";
import Topic02 from "../components/Topics/Topic-02";
import TabsDark from "../components/Tabs/TabsDark";
import Document03 from "../components/Documents/Document-03";

const tabs = [
  { label: "Description", id: "description" },
  { label: "Programme", id: "programme" }
];

const PageSpecialEventDetail = () => (
  <>
    <SEO title="Special Event Detail" />
    <Header />
    <JumbotronAbout />
    <main>
      <section>
        <div className="container mb-5">
          <div className="heading-related row">
            <div className="col-12">
              <h3>Related Topics</h3>
            </div>
          </div>
          <div className="row row-spacing">
            {[...Array(3).keys()].map(goal => (
              <Topic02 />
            ))}
          </div>
        </div>
        <TabsDark tabs={tabs}>
          <div className="row justify-content-between mb-5">
            <div className="col-12 col-lg-7">
              <div className="heading-subtitle">
                <h3>Description</h3>
              </div>
              <p>
                The United Nations Second Global Sustainable Transport
                Conference underscores the importance of sustainable transport
                for the achievement of the 2030 Agenda for Sustainable
                Development and the Paris Agreement. It will build on the First
                Global Sustainable Transport Conference, held on 26 and 27
                November 2016 in Ashgabat, Turkmenistan, which resulted in,
                among others, the “Ashgabat Statement”
              </p>
              <p>
                The United Nations Second Global Sustainable Transport
                Conference underscores the importance of sustainable transport
                for the achievement of the 2030 Agenda for Sustainable
                Development and the Paris Agreement. It will build on the First
                Global Sustainable Transport Conference, held on 26 and 27
                November 2016 in Ashgabat, Turkmenistan, which resulted in,
                among others, the “Ashgabat Statement”
              </p>
              <p>
                The United Nations Second Global Sustainable Transport
                Conference underscores the importance of sustainable transport
                for the achievement of the 2030 Agenda for Sustainable
                Development and the Paris Agreement. It will build on the First
                Global Sustainable Transport Conference, held on 26 and 27
                November 2016 in Ashgabat, Turkmenistan, which resulted in,
                among others, the “Ashgabat Statement”
              </p>
              <p>
                The United Nations Second Global Sustainable Transport
                Conference underscores the importance of sustainable transport
                for the achievement of the 2030 Agenda for Sustainable
                Development and the Paris Agreement. It will build on the First
                Global Sustainable Transport Conference, held on 26 and 27
                November 2016 in Ashgabat, Turkmenistan, which resulted in,
                among others, the “Ashgabat Statement”
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <div className="heading-subtitle">
                <h3>Documents</h3>
              </div>
              <div className="row row-spacing">
                {[...Array(2).keys()].map(index => (
                  <Document03 className="col-12" id={`document-${index}`} />
                ))}
              </div>
            </div>
          </div>
          <div>Programme</div>
        </TabsDark>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PageSpecialEventDetail;
