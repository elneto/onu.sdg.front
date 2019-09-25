import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import JumbotronActionNetworksDetail from "../components/Jumbotron/JumbotronActionNetworksDetail";
import ContentModule04 from "../components/ContentModules/ContentModule-04";
import Link from "../components/Common/Link";
import Partnership03 from "../components/Partnerships/Partnership-03";

const PageActionNetworks = () => (
  <>
    <SEO title="Action Networks Detail" />
    <Header />
    <JumbotronActionNetworksDetail />
    <main>
      <div className="container">
        <div className="border-bottom pb-5 mb-5 mt-5 separator-top">
          <p>
            When young women and men have access to decent, productive work,
            everyone benefits, and our future is more prosperous. Launched in
            2016 as the first-ever United Nations’ system-wide effort for the
            promotion of youth employment, Decent Jobs for Youth leverages the
            resources and the collective expertise of multiple partners.
          </p>
          <p>
            Decent Jobs for Youth is a unique multi-stakeholder platform to
            address fragmentation and catalyse effective, innovative and
            evidence-based action at country and regional levels. With the
            commitment of its partners, Decent Jobs for Youth helps to scale up
            action and impact, driving positive change for young women and men
            across the world.
          </p>
          <p>
            More information at 
            <a href="#" role="button">
              www.decentjobsforyouth.org
            </a>
          </p>
        </div>
        <div className="row row-spacing mb-5">
          {[...Array(6)].map(index => (
            <Partnership03 className="col-sm-12 col-lg-9" />
          ))}
        </div>
      </div>
    </main>
    <FooterV2 />
  </>
);

export default PageActionNetworks;
