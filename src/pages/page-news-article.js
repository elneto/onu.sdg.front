import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import SharedRelated from "../components/Shared-Related";
import News05 from "../components/News/News-05";
import Document02 from "../components/Documents/Document-02";

const PageNewsArticle = () => (
  <>
    <SEO title="News Article" />
    <Header />
    <main>
      <div className="container">
        <h5 className="page-title">News</h5>
        <div className="news-article">
          <h2 className="title">
            SIDS partnership toolbox and in-depth analysis of partnerships for
            SIDS
          </h2>
          <p>
            In September 2019, in accordance with General Assembly resolution
            72/217, Member States will convene a{" "}
            <a href="#">one-day high-level</a>
            meeting at the United Nations Headquarters in New York to review
            progress made in addressing the priorities of Small Island
            Developing States (SIDS) through the implementation of the
            <a href="#">SAMOA Pathway</a> - the outcome of the 2014 SIDS
            Conference. A robust Member States driven preparatory process is
            currently underway, which will feature three regional meetings of
            SIDS, as well as one interregional meeting for all SIDS.
          </p>
          <SharedRelated related />
          <img className="image-full" src="assets/news-02.jpg" />
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-7">
              <div className="heading-subtitle">
                <h3>
                  Strengthening the capacity in developing, monitoring and
                  reviewing durable Partnerships for Small Island Developing
                  States
                </h3>
              </div>
              <p>
                With generous funding support provided by the government of
                Italy, and under the overall guidance of the Steering Committee
                on SIDS Partnerships, currently chaired by Belize and Ireland,
                UN DESA is undertaking a capacity development project to support
                the work of the SIDS Partnership Framework and the preparatory
                process related to the SAMOA Pathway mid-term review. The
                project is expected to result in a SIDS Partnership Toolbox,
                which will include an in-depth analysis of existing
                partnerships, identified best practices and gaps in
                implementation, and a set of tools for monitoring and evaluating
                SIDS partnerships at national, regional and global level.
              </p>
              <p>
                SIDS Partnership Dialogues. The project will include a series of
                capacity development partnership dialogues, to be organized in
                the margins of the preparatory meetings as part of the SAMOA
                Pathway mid-term review. The partnership dialogues will provide
                an opportunity to bring together relevant stakeholders from the
                different SIDS regions to:
              </p>
              <ul className="content-list">
                <li>
                  Assess the status of partnerships for each SIDS region,
                  identifying best practices and gaps around which new
                  partnerships could be forged to further drive implementation
                  of SAMOA Pathway priority areas and SDGs in SIDS.
                </li>
                <li>
                  Raise the capacity of diverse stakeholders to develop genuine
                  and durable partnerships for SIDS;
                </li>
                <li>
                  Strengthen the review and monitoring process of SIDS
                  partnerships.
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <div className="row">
                <div className="col heading-subtitle">
                  <h3>Documents</h3>
                </div>
                  <Document02 className="col-12 mb-2" />
                  <Document02 className="col-12 mb-2" />
                  <Document02 className="col-12 mb-2" />
              </div>
              <div className="row">
                <div className="col heading-subtitle border-bottom">
                  <h3>Related news</h3>
                </div>
                <News05 image="assets/news-02.jpg" className="col-12 mb-2" />
                <News05 image="assets/news-02.jpg" className="col-12 mb-2" />
                <News05 image="assets/news-02.jpg" className="col-12 mb-2" />
              </div>
            </div>
          </div>
          <SharedRelated />
        </div>
      </div>
    </main>
    <FooterV2 />
  </>
);

export default PageNewsArticle;
