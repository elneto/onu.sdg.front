import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import JumbotronGoals from "../components/Jumbotron/JumbotronGoals";
import Topic02 from "../components/Topics/Topic-02";
import TabsDark from "../components/Tabs/TabsDark";
import Heading from "../components/Heading";
import GoalsTargetBlock from "../components/Goals/Targets/GoalsTargetBlock";
import Select from "../components/Form/Select";
import Event02 from "../components/Events/Event-02";
import Publications01 from "../components/Publications/Publications-01";
import News03 from "../components/News/News-03";
import Partnership01 from "../components/Partnerships/Partnership-01";

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Targets and Indicators", id: "targets" },
  { label: "Progress and Info", id: "progress" }
];

const PageGoalDetail = () => (
  <>
    <SEO title="Goal Detail" />
    <Header />
    <JumbotronGoals goal={3} />
    <main>
      <section className="container mb-5">
        <div className="heading-related goal-3 row">
          <div className="col-12">
            <h3>Related Topics</h3>
          </div>
        </div>
        <div className="row row-spacing">
          {[...Array(3).keys()].map(goal => (
            <Topic02 />
          ))}
        </div>
      </section>
      <TabsDark tabs={tabs}>
        <>
          {/* Block */}
          <section>
            <Heading text="overview" textButton="More info" size="small" />
            <div className="goal-overview">
              <img src="/assets/goals/goals-overview.jpg" />
            </div>
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading text="events" textButton="See all events" size="small" />
            <div className="mb-5 row row-spacing">
              {[...Array(4).keys()].map(event => (
                <Event02 />
              ))}
            </div>
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading
              text="publications"
              textButton="See all news"
              size="small"
            />
            <div className="mb-5 row row-spacing">
              {[...Array(4).keys()].map(pub => (
                <Publications01 />
              ))}
            </div>
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading text="news" textButton="See all news" size="small" />
            <div className="row row-spacing">
              {[...Array(3).keys()].map(pub => (
                <News03 image="/assets/news-02.jpg" />
              ))}
            </div>
          </section>
          {/* Block */}
          <section className="mb-5">
            <Heading
              text="partnertships"
              textButton="See all partnertships"
              size="small"
            />
            <div className="mb-5 row row-spacing">
              {[...Array(3).keys()].map(pub => (
                <Partnership01 className="col-12 col-sm-6 col-lg-4"/>
              ))}
            </div>
          </section>
        </>
        {/* Block */}
        <GoalsTargetBlock />
        {/* Block */}
        <section className="mb-5">
          <Heading text="progress & info" size="big" />
          <section className="mb-5">
            <Select className="col-12 col-sm-6 col-lg-3" />
          </section>
          <div className="col-12">
            <h4>Progress of goal 3 in 2019</h4>
            <p>
              Major progress has been made in improving the health of millions
              of people, increasing life expectancy, reducing maternal and child
              mortality and fighting against leading communicable diseases.
              However, progress has stalled or is not happening fast enough with
              regard to addressing major diseases, such as malaria and
              tuberculosis, while at least half the global population does not
              have access to essential health services and many of those who do
              suffer undue financial hardship, potentially pushing them into
              extreme poverty. Concerted efforts are required to achieve
              universal health coverage and sustainable financing for health, to
              address the growing burden of non-communicable diseases, including
              mental health, and to tackle antimicrobial resistance and
              determinants of health such as air pollution and inadequate water
              and sanitation.
            </p>
            <p className="italic">Infectious diseases</p>
            <ul className="content-list">
              <li>
                An estimated 303,000 women around the world died due to
                complications of pregnancy and childbirth in 2015. Almost all of
                these deaths occurred in low- and middle-income countries, and
                almost two thirds of those were in sub-Saharan Africa. These
                deaths are preventable with appropriate management and care.
                Globally in 2018, 81 per cent of births took place with the
                assistance of a skilled birth attendant, a significant
                improvement from 69 per cent in 2012. Coverage of skilled birth
                attendants in 2018 was only 59 per cent in sub-Saharan Africa.
              </li>
              <li>
                he under-5 mortality rate fell to 39 deaths per 1,000 live
                births in 2017, a 6.7 per cent reduction from 42 deaths in 2015,
                and an overall reduction of 49 per cent from 77 deaths per 1,000
                live births in 2000. The total number of under-5 deaths dropped
                to 5.4 million in 2017 from 9.8 million in 2000. Still, most of
                these deaths were from preventable causes and almost half, or
                2.5 million, occurred in the first month of life – the most
                crucial period for child survival. The global neonatal mortality
                rate has continued to decline after a long downward trend from
                31 deaths per 1,000 live births in 2000 to 18 in 2017, a 41 per
                cent reduction.
              </li>
              <li>
                mmunization saves millions of lives and is widely recognized as
                one of the world’s most successful and cost-effective health
                interventions. Coverage of the required three doses of the
                vaccine that prevents diphtheria, tetanus and pertussis
                increased from 72 per cent in 2000 to 85 per cent in 2015 and
                has remained unchanged between 2015 and 2017. An estimated 19.9
                million children did not receive the vaccines during the first
                year of life, putting them at serious risk of these potentially
                fatal diseases. The global coverage of pneumococcal conjugate
                vaccine, which has the potential to significantly reduce deaths
                in children under age of 5, has yet to reach 50 per cent. Two
                doses of the measles vaccine are required to prevent the disease
                and the illnesses, disabilities and deaths caused by
                complications associated with it. Coverage with the second dose
                of measles vaccine increased from 59 per cent in 2015 to 67 per
                cent in 2017, but that is still insufficient to prevent this
                highly contagious disease.
              </li>
              <li>
                Expanding access to modern contraceptive methods is essential to
                ensuring universal access to sexual and reproductive health-care
                services. Globally, the proportion of women of reproductive age
                (15 to 49 years old) who have their need for family planning
                satisfied with modern contraceptive methods has continued to
                increase slowly, from 74 per cent in 2000 to 76 per cent in
                2019.
              </li>
              <li>
                Adolescent fertility declined from 56 births per 1,000
                adolescent women in 2000 to 45 births in 2015 and 44 births in
                2019. The level of adolescent fertility has remained high in
                sub-Saharan Africa, at 101 births per 1,000 adolescent women.
              </li>
            </ul>
          </div>
        </section>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default PageGoalDetail;
