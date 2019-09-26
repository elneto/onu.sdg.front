import React from "react";

 
import Header from "../components/header";
import Heading from "../components/Heading";
import FooterV2 from "../components/FooterV2";
import JumbotronTopics from "../components/Jumbotron/JumbotronTopics";
import GoalsRelatedBlock from "../components/Goals/Related/GoalRelatedBlock";
import TabsDark from "../components/Tabs/TabsDark";
import Timeline from "../components/Timeline";
import Event02 from "../components/Events/Event-02";
import Event03 from "../components/Events/Event-03";
import Event04 from "../components/Events/Event-04";
import News03 from "../components/News/News-03";
import Publications01 from "../components/Publications/Publications-01";

const tabs = [
  { label: "Description", id: "description" },
  { label: "Decisions", id: "decisions" },
  { label: "Publications", id: "publications" },
  { label: "resources", id: "resources" },
  { label: "Meeting & Events", id: "meetingevents" }
];

const PageTopicDetail = () => (
  <>
    {/* <SEO title="Topics" /> */}
    <Header />
    <JumbotronTopics />
    <main>
      <GoalsRelatedBlock goals={6} />
      <TabsDark tabs={tabs}>
        <>
          {/* Block */}
          <section className="mb-5">
            <Heading text="events" textButton="See all events" size="small" />
            <div className="row row-spacing">
              {[...Array(4).keys()].map(event => (
                <Event02 />
              ))}
            </div>
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading text="description" size="small" />
            <div className="mb-5 col-12">
              <p>
                Sustainable Development Goal 3 of the 2030 Agenda for
                Sustainable Development is to “ensure healthy lives and
                promoting well-being for all at all ages”. TThe associated
                targets aim to reduce the global maternal mortality ratio; end
                preventable deaths of newborns and children; end the epidemics
                of AIDS, tuberculosis, malaria and other communicable diseases;
                reduce mortality from non-communicable diseases; strengthen the
                prevention and treatment of substance abuse; halve the number of
                deaths and injuries from road traffic accidents; ensure
                universal access to sexual and reproductive health-care
                services; achieve universal health coverage; and reduce the
                number of deaths and illnesses from hazardous chemicals and
                pollution.
              </p>
              <p>The MDG era and before</p>
              <p>
                As part of the efforts to achieve the maternal and child health
                MDGs, the UN Secretary-General Ban Ki-moon launched the Every
                Woman Every Child initiative at the United Nations Millennium
                Development Goals Summit in September 2010. Every Woman Every
                Child is an unprecedented global movement that mobilizes and
                intensifies international and national action by governments,
                multilaterals, the private sector and civil society to address
                the major health challenges facing women and children around the
                world. The movement puts into action the Global Strategy for
                Women and Children’s Health, which presents a roadmap on how to
                enhance financing, strengthen policy and improve service on the
                ground for the most vulnerable women and children.
              </p>
              <p>
                The Commission on Sustainable Development considered Health and
                sustainable development as a cross-cutting issue during the
                two-year cycle of its multi-year programme of work. Health and
                Sustainable Development was also an integral part of the World
                Summit on Sustainable Development, held in Johannesburg in 2002.
                The outcome document of the Summit, the Johannesburg Plan of
                Implementation, devotes Chapter 6 to Health and Sustainable
                Development, recalling that human beings are entitled to a
                healthy and productive life, in harmony with nature and further
                recognizes that the goals of sustainable development can only be
                achieved in the absence of a high prevalence of debilitating
                diseases, while obtaining health gains for the whole population
                requires poverty eradication.
              </p>
              <p>
                The outcome of the United Nations on Environment and
                Development, Agenda 21, devotes Chapter 6 to “Protecting and
                Promoting Human Health”. The Agenda recognizes that health and
                development are intimately interconnected, and call that action
                items under Agenda 21 must address the primary health needs of
                the world's population, since they are integral to the
                achievement of the goals of sustainable development and primary
                environmental care
              </p>
            </div>
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading text="milestones" size="small" />
            <Timeline />
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading text="news" textButton="See all news" size="small" />
            <div className="row row-spacing">
              {[...Array(3).keys()].map(pub => (
                <News03 image="/static/assets/news-02.jpg" />
              ))}
            </div>
          </section>
        </>
        <></>
        {/* Block */}
        <section className="mb-5">
          <Heading text="publications" size="small" />
          <div className="mb-5 row row-spacing">
            {[...Array(7).keys()].map(pub => (
              <Publications01 />
            ))}
          </div>
        </section>
        <></>
        <>
          {/* Block */}
          <section className="mb-5">
            <Heading text="FEATURED EVENTS" size="big" />
            <div className=" row row-spacing">
              {[...Array(4).keys()].map(event => (
                <Event03 />
              ))}
            </div>
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading text="Events" size="small" />
            <div className="row row-spacing">
              {[...Array(4).keys()].map(event => (
                <div className="events-block w-100 mb-5">
                  <div className="col-12">
                    <h3 className="heading-border">2017</h3>
                  </div>
                  <div className="col-12">
                    <h4 className="month">April</h4>
                  </div>
                  <Event04 />
                </div>
              ))}
            </div>
          </section>
        </>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default PageTopicDetail;
