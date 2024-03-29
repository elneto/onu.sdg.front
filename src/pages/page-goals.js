import React from "react";
import SEO from "../components/seo";
import Header from "../components/Header";
import FooterV2 from "../components/FooterV2";
import GoalsWrapper from "../components/Goals/GoalsWrapper";
import Document02 from "../components/Documents/Document-02";

const PageGoals = () => (
  <>
    <SEO title="Goals" />
    <Header />
    <main>
      <GoalsWrapper goals={17} />
      <div className="container mb-5">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-7">
            <div className="heading-subtitle">
              <h3>History</h3>
            </div>
            <p>
              The 2030 Agenda for Sustainable Development, adopted by all United
              Nations Member States in 2015, provides a shared blueprint for
              peace and prosperity for people and the planet, now and into the
              future. At its heart are the 17 Sustainable Development Goals
              (SDGs), which are an urgent call for action by all countries -
              developed and developing - in a global partnership. They recognize
              that ending poverty and other deprivations must go hand-in-hand
              with strategies that improve health and education, reduce
              inequality, and spur economic growth – all while tackling climate
              change and working to preserve our oceans and forests. The SDGs
              build on decades of work by countries and the UN, including the UN
              Department of Economic and Social Affairs:
            </p>
            <p>
              • In June 1992, at the Earth Summit in Rio de Janeiro, Brazil,
              more than 178 countries adopted Agenda 21, a comprehensive plan of
              action to build a global partnership for sustainable development
              to improve human lives and protect the environment. • Member
              States unanimously adopted the Millennium Declaration at the
              Millennium Summit in September 2000 at UN Headquarters in New
              York. The Summit led to the elaboration of eight Millennium
              Development Goals (MDGs) to reduce extreme poverty by 2015. • The
              Johannesburg Declaration on Sustainable Development and the Plan
              of Implementation, adopted at the World Summit on Sustainable
              Development in South Africa in 2002, reaffirmed the global
              community's commitments to poverty eradication and the
              environment, and built on Agenda 21 and the Millennium Declaration
              by including more emphasis on multilateral partnerships. • At the
              United Nations Conference on Sustainable Development (Rio+20) in
              Rio de Janeiro, Brazil, in June 2012, Member States adopted the
              outcome document "The Future We Want" in which they decided, inter
              alia, to launch a process to develop a set of SDGs to build upon
              the MDGs and to establish the UN High-level Political Forum on
              Sustainable Development. The Rio +20 outcome also contained other
              measures for implementing sustainable development, including
              mandates for future programmes of work in development financing,
              small island developing states and more. • In 2013, the General
              Assembly set up a 30-member Open Working Group to develop a
              proposal on the SDGs. • In January 2015, the General Assembly
              began the negotiation process on the post-2015 development agenda.
              The process culminated in the subsequent adoption of the 2030
              Agenda for Sustainable Development, with 17 SDGs at its core, at
              the UN Sustainable Development Summit in September 2015. ⁃ 2015
              was a landmark year for multilateralism and international policy
              shaping, with the adoption of several major agreements: ⁃ Sendai
              Framework for Disaster Risk Reduction (March 2015) ⁃ Addis Ababa
              Action Agenda on Financing for Development (July 2015) ⁃
              Transforming our world: the 2030 Agenda for Sustainable
              Development with its 17 SDGs was adopted at the UN Sustainable
              Development Summit in New York in September 2015. ⁃ Paris
              Agreement on Climate Change (December 2015) • Now, the annual
              High-level Political Forum on Sustainable Development serves as
              the central UN platform for the follow-up and review of the SDGs.
            </p>
            <p>
              Today, the Division for Sustainable Development Goals (DSDG) in
              the United Nations Department of Economic and Social Affairs
              (UNDESA) provides substantive support and capacity-building for
              the SDGs and their related thematic issues, including water,
              energy, climate, oceans, urbanization, transport, science and
              technology, the Global Sustainable Development Report (GSDR),
              partnerships and Small Island Developing States. DSDG plays a key
              role in the evaluation of UN systemwide implementation of the 2030
              Agenda and on advocacy and outreach activities relating to the
              SDGs. In order to make the 2030 Agenda a reality, broad ownership
              of the SDGs must translate into a strong commitment by all
              stakeholders to implement the global goals. DSDG aims to help
              facilitate this engagement.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <div>
              <div className="heading-subtitle">
                <h3>Documents</h3>
              </div>
              <Document02 />
            </div>
            <div>
              <div className="heading-subtitle">
                <h3>Video</h3>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/0XTBYMfZyrM?controls=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <FooterV2 />
  </>
);

export default PageGoals;
