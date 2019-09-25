import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Heading from "../components/Heading";
import FooterV2 from "../components/FooterV2";
import TabsLight from "../components/Tabs/TabsLight";
import TabsButton from "../components/Tabs/TabsButton";
import Chart01 from "../components/Charts/Chart-01";
import Chart02 from "../components/Charts/Chart-02";
import HeadingInfoBlock from "../components/HeadingInfoBlock";
import Partnerships01 from "../components/Partnerships/Partnership-01";
import Button from "../components/Common/Button";
import ProgressReport from "../components/ProgressReport";
import HeadingInfo from "../components/HeadingInfo";
import Link from "../components/Common/Link";
import Event07 from "../components/Events/Event-07";
import Featured02 from "../components/Featured/Featured-02";
import HeadingSubtitle from "../components/HeadingSubtitle";

const tabs = [
  { label: "All", id: "all" },
  { label: "Good practices", id: "practices" },
  { label: "Ocean ", id: "ocean" },
  { label: "Acceleration", id: "acceleration" }
];

const tabsButton = [
  { label: "By SDGS", id: "sdgs" },
  { label: "By years", id: "years" }
];

const headingInfo = [
  { number: "17", text: "SDGS" },
  { number: "169", text: "Targets" },
  { number: "4,735", text: "Partnerships / Commitments" },
  { number: "709", text: "Progress updates" },
  { number: "1,253", text: "#SDGAction tweets" },
  { number: "15,615", text: "Registered users" }
];

const PagePartnerships = () => (
  <>
    <SEO title="Partnerships" />
    <Header />
    <main>
      <section className="container mb-5">
        <Heading
          text="PARTNERSHIPS"
          size="small"
          textButton="Search partnership"
        />
        <TabsLight tabs={tabs}>
          <>
            <h5 className="border-left border-primary pl-3">
              The Partnerships for SDGs online platform is United Nations'
              global registry of voluntary commitments and multi-stakeholder
              partnerships, facilitating global engagement of all stakeholders
              in support of the implementation of the Sustainable Development
              Goals.
            </h5>
          </>
          <>
            <h5 className="border-left border-primary pl-3">
              The Partnerships for SDGs online platform is United Nations'
              global registry of voluntary commitments and multi-stakeholder
              partnerships, facilitating global engagement of all stakeholders
              in support of the implementation of the Sustainable Development
              Goals.
            </h5>
          </>
          <>
            <h5 className="border-left border-primary pl-3">
              The Partnerships for SDGs online platform is United Nations'
              global registry of voluntary commitments and multi-stakeholder
              partnerships, facilitating global engagement of all stakeholders
              in support of the implementation of the Sustainable Development
              Goals.
            </h5>
          </>
          <>
            <h5 className="border-left border-primary pl-3">
              The Partnerships for SDGs online platform is United Nations'
              global registry of voluntary commitments and multi-stakeholder
              partnerships, facilitating global engagement of all stakeholders
              in support of the implementation of the Sustainable Development
              Goals.
            </h5>
          </>
        </TabsLight>
      </section>
      <section className="container mb-5">
        <HeadingInfoBlock items={headingInfo} />
      </section>
      <section className="container mb-5 pb-5 border-bottom">
        <TabsButton tabs={tabsButton}>
          <Chart01 />
          <Chart02 />
        </TabsButton>
      </section>

      <section className="container mb-5">
        <HeadingSubtitle text="Featured commitments & partnerships">
          <div className="d-flex flex-sm-row flex-column">
            <Button className="mr-2 btn-primary">Share an update</Button>
            <Button className="btn-primary">Register</Button>
          </div>
        </HeadingSubtitle>
        <div className="row row-spacing">
          {[...Array(6)].map(topic => (
            <Partnerships01 className="col-12 col-sm-6 col-lg-4" />
          ))}
        </div>
      </section>

      <section className="container mb-5">
        <HeadingSubtitle text="Featured action networks">
          <Button className="btn-primary">See all action networks</Button>
        </HeadingSubtitle>

        <div className="row row-spacing">
          {[...Array(3)].map(topic => (
            <Partnerships01 className="col-12 col-sm-6 col-lg-4" />
          ))}
        </div>
      </section>

      <section className="container mb-5">
        <HeadingSubtitle text="Status of progress reports">
          <Button className="btn-primary">Submit progress report</Button>
        </HeadingSubtitle>

        <div className="row row-spacing">
          {[...Array(3)].map(topic => (
            <ProgressReport className="col-6 col-md-2 center">
              <HeadingInfo number={175} text="Submitted on time" />
            </ProgressReport>
          ))}
          <div className="col-12 col-md-6">
            <div className="card card-border">
              <div className="card-body">
                <h5>Partnerships for SDGs online platform</h5>
                <p>
                  Progress reports are to be submitted once a year until
                  completion of the initiative.
                </p>
                <Link>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-background mb-5">
        <div className="container">
          <div className="row">
            <div className="col heading-subtitle">
              <h3>2030 Agenda Partnership Accelerator</h3>
            </div>
            <Event07 />
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <HeadingSubtitle text="Featured" />
        <div className=" row row-spacing">
          {[...Array(3)].map(topic => (
            <Featured02 />
          ))}
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PagePartnerships;
