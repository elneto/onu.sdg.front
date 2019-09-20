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

const PageGoalDetail = () => (
  <>
    <SEO title="ON-SDGS" />
    <Header />
    <JumbotronGoals goal={3} />
    <main>
      <div className="container mb-5">
        <div className="heading-related goal-3 row">
          <div className="col-12">
            <h3>Related Topics</h3>
          </div>
        </div>
        <div className="mb-5 row row-spacing">
          {[...Array(3).keys()].map(goal => (
            <Topic02 />
          ))}
        </div>
      </div>
      <TabsDark>
        <>
          <Heading text="overview" textButton="More info" size="small" />
          <Heading text="events" textButton="See all events" size="small" />
          <div className="mb-5 row row-spacing">
            {[...Array(4).keys()].map(event => (
              <Event02 />
            ))}
          </div>
          <Heading text="publications" textButton="See all news" size="small" />
          <div className="mb-5 row row-spacing">
            {[...Array(4).keys()].map(pub => (
              <Publications01 />
            ))}
          </div>
          <Heading text="news" textButton="See all news" size="small" />
          <div className="mb-5 row row-spacing">
            {[...Array(3).keys()].map(pub => (
              <News03 image="/assets/news-02.jpg" />
            ))}
          </div>
          <Heading text="partnertships" textButton="See all partnertships" size="small" />
          <div className="mb-5 row row-spacing">
            {[...Array(3).keys()].map(pub => (
              <Partnership01/>
            ))}
          </div>
        </>
        <GoalsTargetBlock />
        <div>
          <Heading text="progress & info" size="big" />
          <Select className="col-12 col-sm-6 col-lg-3" />
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
            <p>
              • An estimated 303,000 women around the world died due to
              complications of pregnancy and childbirth in 2015. Almost all of
              these deaths occurred in low- and middle-income countries, and
              almost two thirds of those were in sub-Saharan Africa. These
              deaths are preventable with appropriate management and care.
              Globally in 2018, 81 per cent of births took place with the
              assistance of a skilled birth attendant, a significant improvement
              from 69 per cent in 2012. Coverage of skilled birth attendants in
              2018 was only 59 per cent in sub-Saharan Africa. • The under-5
              mortality rate fell to 39 deaths per 1,000 live births in 2017, a
              6.7 per cent reduction from 42 deaths in 2015, and an overall
              reduction of 49 per cent from 77 deaths per 1,000 live births in
              2000. The total number of under-5 deaths dropped to 5.4 million in
              2017 from 9.8 million in 2000. Still, most of these deaths were
              from preventable causes and almost half, or 2.5 million, occurred
              in the first month of life – the most crucial period for child
              survival. The global neonatal mortality rate has continued to
              decline after a long downward trend from 31 deaths per 1,000 live
              births in 2000 to 18 in 2017, a 41 per cent reduction. •
              Immunization saves millions of lives and is widely recognized as
              one of the world’s most successful and cost-effective health
              interventions. Coverage of the required three doses of the vaccine
              that prevents diphtheria, tetanus and pertussis increased from 72
              per cent in 2000 to 85 per cent in 2015 and has remained unchanged
              between 2015 and 2017. An estimated 19.9 million children did not
              receive the vaccines during the first year of life, putting them
              at serious risk of these potentially fatal diseases. The global
              coverage of pneumococcal conjugate vaccine, which has the
              potential to significantly reduce deaths in children under age of
              5, has yet to reach 50 per cent. Two doses of the measles vaccine
              are required to prevent the disease and the illnesses,
              disabilities and deaths caused by complications associated with
              it. Coverage with the second dose of measles vaccine increased
              from 59 per cent in 2015 to 67 per cent in 2017, but that is still
              insufficient to prevent this highly contagious disease. •
              Expanding access to modern contraceptive methods is essential to
              ensuring universal access to sexual and reproductive health-care
              services. Globally, the proportion of women of reproductive age
              (15 to 49 years old) who have their need for family planning
              satisfied with modern contraceptive methods has continued to
              increase slowly, from 74 per cent in 2000 to 76 per cent in 2019.
              • Adolescent fertility declined from 56 births per 1,000
              adolescent women in 2000 to 45 births in 2015 and 44 births in
              2019. The level of adolescent fertility has remained high in
              sub-Saharan Africa, at 101 births per 1,000 adolescent women.
            </p>
            <p>
              • Strong and steady domestic and international commitment and
              funding has fuelled an acceleration of evidence-informed HIV
              prevention, testing and treatment programmes. As a result, the
              incidence of HIV in sub-Saharan Africa (among adults aged 15 to
              49) has declined by 37 per cent, from 3.39 infections per 1,000
              uninfected people in 2010 to 2.49 in 2015 and 2.14 in 2017.
              However, the rate of global HIV incidence among adults aged 15 to
              49 declined from 0.44 to 0.40 between 2015 and 2017 and overall by
              22 per cent between 2010 and 2017, well short of the declines
              required to meet 2020 and 2030 targets. • Tuberculosis remains a
              leading cause of ill health and death. In 2017, an estimated 10
              million people fell ill with tuberculosis. The burden is falling
              globally: incidence of tuberculosis has continued to decline from
              170 new and relapse cases per 100,000 people in 2000 to 140 in
              2015, and 134 in 2017; and the tuberculosis mortality rate among
              HIV-negative people fell by 42 per cent between 2000 and 2017.
              However, large gaps in detection and treatment persist and the
              current pace of progress is not fast enough to meet the
              Sustainable Development Goal target, with drug-resistant
              tuberculosis remaining a continuing threat. • After more than a
              decade of steady advances in fighting malaria, progress has
              stalled.  No significant gains were made in reducing the number of
              malaria cases worldwide in the period 2015–2017. Sub-Saharan
              Africa continues to carry the heaviest burden of disease,
              accounting for more than 90 per cent of the global malaria burden.
              Worryingly, there were an estimated 3.5 million more malaria cases
              in the 10 highest-burden African countries in 2017 compared with
              the previous year. • In 2015, an estimated 325 million people
              worldwide were living with hepatitis B virus or hepatitis C virus
              infection. The widespread use of hepatitis B vaccine in infants
              has considerably reduced the incidence of new chronic HBV
              infections, as reflected by the decline in hepatitis B prevalence
              among children under 5 years of age, from 4.7 per cent in the
              pre-vaccine era to 0.8 per cent in 2017. • In 2017, 1.58 billion
              people were reported as requiring mass or individual treatment and
              care for neglected tropical diseases, down from 1.63 billion in
              2015 and 2.03 billion in 2010. Improved surveillance meant that
              further populations requiring interventions against such diseases
              were identified in 2017. The 522 million people requiring
              treatment and care in least developed countries represented 52 per
              cent of those countries’ populations, down from 584 million in
              2015.
            </p>
          </div>
        </div>
      </TabsDark>
    </main>
    <FooterV2 />
  </>
);

export default PageGoalDetail;
