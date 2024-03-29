import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";
import JumbotronStates from "../components/Jumbotron/JumbotronStates";
import TabsDark from "../components/Tabs/TabsDark";
import Document02 from "../components/Documents/Document-02";
import Document03 from "../components/Documents/Document-03";
import Partnerships03 from "../components/Partnerships/Partnership-03";
import Partnerships04 from "../components/Partnerships/Partnership-04";
import Link from "../components/Common/Link";
import HeadingSubtitle from "../components/HeadingSubtitle";
import BodyContent from "../components/bodyContent";

const tabs = [
  { label: "HLPF 2018", id: "hlpf" },
  { label: "STATEMENTS", id: "statements" },
  { label: "PARTNERSHIPS & COMMITMENTS ", id: "commit" },
  { label: "FOCAL POINT ", id: "focal" }
];

const PageStateDetail = () => (
  <>
    <SEO title="State Detail" />
    <Header />
    <JumbotronStates />
    <main>
      <TabsDark tabs={tabs}>
        <div className="row d-flex justify-content-between mb-5 no-gutters">
          <div className="col-12 col-lg-7">
            <HeadingSubtitle text="History" />
            <BodyContent>
              <p>
                KEY MESSAGES - AUSTRALIA The SDGs reflect Australia’s values and
                belief in a ‘fair go’.
              </p>
              <p>
                The SDGs reflect things that Australians value highly and seek
                to protect, like a healthy environment, access to opportunity
                and services, human rights, inclusive economies, diverse and
                supportive communities and our Aboriginal and Torres Strait
                Islander cultures and heritage. Our support for political,
                economic and religious freedoms, liberal democracy, the rule of
                law, equality and mutual respect underpin a strong, fair and
                cohesive society.
              </p>
              <p>
                Core to the Australian understanding of the SDGs is the
                Australian value of a “fair go”. Like “leaving no one behind”,
                it is a call to action for fairness, justice and equality of
                opportunity.
              </p>
              <p>
                This is a ‘whole of Australia’ endeavour, across the whole
                Agenda.
              </p>
              <p>
                The 2030 Agenda is not just for and about government initiatives
                and activity: it also involves the business sector, civil
                society, academia, communities, families and individuals.
                Australians are already contributing to achievement of the SDGs
                through their work in the care economy, by volunteering, by
                preserving the natural environment and through their everyday
                activity. Australia’s youth play a crucial role given their
                potential to deliver on the SDGs into the future and their stake
                in the realisation of the Goals.
              </p>
              <p>
                Australia is committed to the 2030 Agenda, including the SDGs
                and the Addis Ababa Action Agenda on Financing for Development.
              </p>
              <p>
                Australia is committed to the SDGs as a universal, global
                undertaking to end extreme poverty and ensure the peace and
                well-being of people across the world. The 2017 Foreign Policy
                White Paper highlights Australia’s responsibility to contribute
                to global efforts to reduce poverty, alleviate suffering and
                promote sustainable development.
              </p>
              <p>
                Achieving the SDGs is in Australia’s interests: it will
                contribute to lasting global prosperity, productivity and
                stability. The SDGs are consistent with Australian Government
                priorities and long-standing efforts across a range of sectors.
                Likewise, the Addis Agenda’s emphasis on issues like trade and
                infrastructure investment are in line with Australia’s approach
                to driving growth and prosperity.
              </p>
              <p>
                Our development assistance supports efforts to build a stable
                and prosperous world, with a focus on infrastructure, trade
                facilitation and international competitiveness; agriculture,
                fisheries and water; effective governance; education and health;
                building resilience and gender equality.
              </p>
            </BodyContent>
          </div>
          <div className="col-12 col-lg-4">
            <HeadingSubtitle text="Documents" />
            <section className="spacing">
              <Document02 className="col-12" />
              <Document02 className="col-12" />
            </section>
          </div>
        </div>
        <section className="mb-5">
          <HeadingSubtitle text="History Statements" />
          <section className="spacing">
            {[...Array(8).keys()].map(index => (
              <Document03
                id={`document-${index}`}
                className="col-12 col-lg-8"
              />
            ))}
          </section>
        </section>
        <section className="mb-5">
          <HeadingSubtitle text="Partnerships & Commitments" />
          <section className="col-12 mb-5">
            {[...Array(4)].map(event => (
              <div className="row row-spacing no-gutters">
                <Partnerships03 className="col-12 col-sm-6 col-md-8 col-lg-9 no-radius-right border-right-0" />
                <Partnerships04 className="col-12 col-sm-6 col-md-4 col-lg-3 no-radius-left" />
              </div>
            ))}
          </section>
        </section>
        <section className="mb-5">
          <HeadingSubtitle text="Focal point" />
          <div className="col-12">
            <span>Department of Foreign Affairs</span>
            <span>and Trade Global Development Branch</span>
            <Link href="mailto: 2030agenda@dfat.gov.au">
              2030agenda@dfat.gov.au
            </Link>
          </div>
        </section>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default PageStateDetail;
