import React from "react";

import SEO from "../components/seo";
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";
import JumbotronPartnerships from "../components/Jumbotron/JumbotronPartnerships";
import SharedRelated from "../components/Shared-Related";
import GoalsRelatedBlock from "../components/Goals/Related/GoalRelatedBlock";
import TabsDark from "../components/Tabs/TabsDark";
import ProgressReport from "../components/ProgressReport";
import Link from "../components/Common/Link";
import Comment from "../components/Comment";
import TextArea from "../components/Form/TextArea";
import HeadingSubtitle from "../components/HeadingSubtitle";
import BodyContent from "../components/bodyContent";

const tabs = [
  { label: "Description", id: "description" },
  { label: "SDGS & TARGETS", id: "sdgs" },
  { label: "DELIVERABLES & TIMELINE", id: "deliverables" },
  { label: "RESOURCES MOBILIZED", id: "resources" }
];

const PagePartnershipsDescription = () => (
  <>
    <SEO title="Partnerships General" />
    <Header />
    <JumbotronPartnerships />

    <main>
      <section className="container">
        <SharedRelated className="border-bottom" />
      </section>
      <section className="container">
        <GoalsRelatedBlock goals={6} />
      </section>
      <TabsDark tabs={tabs}>
        <div className="row d-flex justify-content-between mb-5 no-gutters">
          <div className="col-12 col-lg-7">
            <HeadingSubtitle text="History" />
            <BodyContent>
              <p>
                Local marine resources are a very important part of coastal
                communities in Papua New Guinea and in the Pacific. Marine
                resources contribute to local people's livelihood through food,
                medicine, clothing, spirituality and also income to allow locals
                to participate in the cash based economy. In the time of our
                ancestors there was abundance of life in the sea with very
                little pressure on them, taking enough only for the daily meal.
                Because there was low demand for marine resources harvesting
                methods were restricted to fish traps and fishing lines.
              </p>
              <p>
                Today we see a different scenario where the demand to take from
                the marine environment is high, because of population increase
                and the drive to be part of the cash economy. We are depleting
                our marine resources at a faster rate than it can recover and so
                affecting the very resources that we depend for sustenance. One
                of the very prehistoric animal is the leatherback turtle
                (Dermochelys coriacea) which finds it's nesting area in the
                beaches of Madang. The villagers of Karkum, Magubem and Kimadi
                in Sumkar District, and Mur, Yamai, Lalok, Bom-Sagar and Male in
                the Rai Coast District, Madang, have a traditional attachment to
                this animal. Leatherback turtles and Green turtles have a
                special place in the heart of these local people. Now it is also
                affected by human settlement and the need to trade also for
                garden food crops.
              </p>
              <p>
                Therefore a greater threat is being posed on their life. Their
                nesting areas will be vulnerable to the impacts of climate
                change through shoreline erosion as well which is something the
                locals cannot control. Their migratory routes and habitat have
                also been threatened by industrial fishing. The recent approval
                of seabed mining in the Solwara 1, has even paused a greater
                threat to the turtles and the marine ecological seasons. If
                nothing is done to conduct research, socio-economic mapping of
                local communities, assess and implement Locally Managed Marine
                Areas to conserve, protect, restore, promote, manage and
                sustainably use turtles as per the Papua New Guinea's (Fauna Act
                1976) and other marine biodiversity and their habitats, the
                locals will lose a part of their traditional heritage, and also
                their identity.
              </p>
              <p>
                The future leaders who are still babies now will not even see or
                feel a real turtle but only see it in a story book or in the
                television.Turtles are a migratory species. They travel through
                national, regional and international waters to feed and nest.
                Efforts to conserve them at the local level must therefore be
                linked to the national, sub-regional, regional and international
                level if we are to achieve sustainable and long-term goals to
                saving turtles.The objective of this partnership is therefore to
                establish, strengthen cooperation, enhance and enable genuine
                and durable partnerships with all stakeholders so that together
                we can all conserve, and sustainably use our oceans and seas and
                their resources in light of the Barbados Programme of Action
                (BPOA) and the Mauritius Strategy for Implementation (MSI) at
                the sub-national, national, sub-regional and international
                levels.
              </p>
              <form className="form-un mb-3">
                <TextArea
                  label="Comments"
                  subLabel="Add comments here"
                  placeholder="Text"
                />
              </form>
              <div className="comment-block">
                <Comment />
                <Comment />
                <Comment />
              </div>
            </BodyContent>
          </div>
          <div className="col-12 col-lg-4">
            <section className="mb-5">
              <HeadingSubtitle text="Progress reports" />
              <ProgressReport className="col-12">
                <ul className="content-list">
                  <li>Registered: 13 January 2010</li>
                  <li>Registered: 13 January 2010</li>
                </ul>
              </ProgressReport>
            </section>
            <section className="mb-5">
              <HeadingSubtitle text="Basic information" />
              <div className="col-12">
                <div className="card card-border">
                  <div className="card-body">
                    <h6>Time frame: 0000-00-00 - February 2015</h6>
                    <Link>Website</Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-5">
              <HeadingSubtitle text="Featured partners" />
              <div className="col-12">
                <div className="card card-border border-bottom-0 no-radius-bottom">
                  <div className="card-body">
                    <h6>The Mas Kagin Tapani Association Inc</h6>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card card-border no-radius-top">
                  <div className="card-body">
                    <h6>WWF International</h6>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-5">
              <HeadingSubtitle text="Countries" />
              <div className="col-12">
                <div className="card card-border border-bottom-0 no-radius-bottom">
                  <div className="card-body">
                    <div className="d-flex">
                      <img className="image" src="/assets/flag.jpg" />
                      <h6>Australia</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card card-border no-radius-top">
                  <div className="card-body">
                    <div className="d-flex">
                      <img className="image" src="/assets/flag.jpg" />
                      <h6>Australia</h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-5">
              <HeadingSubtitle text="Contact information" />
              <div className="col-12">
                <div className="card card-border">
                  <div className="card-body">
                    <h6>Wenceslaus Magun, National Coordinator</h6>
                    <Link>magun.wences@gmail.com</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>SDGS & TARGETS</div>
        <div>DELIVERABLES & TIMELINE</div>
        <div>RESOURCES MOBILIZED</div>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default PagePartnershipsDescription;
