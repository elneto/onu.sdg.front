import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import Heading from "../components/Heading";
import Event03 from "../components/Events/Event-03";
import Event04 from "../components/Events/Event-04";
import TabsButton from "../components/Tabs/TabsButton";

const tabs = [
  { label: "Calendar", id: "calendar" },
  { label: "List", id: "list" }
];

const ViewEvents = () => (
  <>
    <SEO title="Events" />
    <Header />
    <main>
      <div className="container">
        <Heading text="featured events" size="big" />
        <div className="mb-5 row row-spacing">
          {[...Array(4).keys()].map(event => (
            <Event03 />
          ))}
        </div>
      </div>
      <div className="container">
        <Heading text="events" size="small" />
        <TabsButton tabs={tabs} title="Agenda">
          <div>calendar</div>
          <div>
            <div className="mb-5 row row-spacing">
              {[...Array(4).keys()].map(event => (
                <div className="events-block w-100 mb-5">
                  <div className="col-12">
                    <h4 className="month">June 2019</h4>
                  </div>
                  <Event04 featured/>
                </div>
              ))}
            </div>
          </div>
        </TabsButton>
      </div>
    </main>
    <FooterV2 />
  </>
);

export default ViewEvents;
