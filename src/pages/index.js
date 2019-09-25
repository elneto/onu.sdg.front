import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className="d-flex justify-content-around container flex-column flex-sm-row mt-5">
      <div>
        <h3>COMPONENTS</h3>
        <nav class="nav flex-column">
          <li>
            <Link to="/page-header/">Header</Link>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#navbar"
              data-toggle="collapse"
              data-target="#navbar"
            >
              Navbar
            </a>
            <div className="collapse" id="navbar" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="header/page-navbar/">Navbar</Link>
                <Link to="header/page-navbarV2/">NavbarV2</Link>
                <Link to="header/page-language-navbar/">Language Navbar</Link>
              </div>
            </div>
          </li>

          <li>
            <Link to="/page-footer/">Footer</Link>
          </li>
          <li>
            <Link to="/page-footer-links/">Footer Links</Link>
          </li>
          <li>
            <Link to="/page-button/">Button</Link>
          </li>
          <li>
            <Link to="/page-social-icons/">Social Icons</Link>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#form"
              data-toggle="collapse"
              data-target="#form"
            >
              Form
            </a>
            <div className="collapse" id="form" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="form/page-input/">Input</Link>
                <Link to="form/page-select/">Select</Link>
                <Link to="form/page-checkbox/">Checkbox</Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#labels"
              data-toggle="collapse"
              data-target="#labels"
            >
              Labels
            </a>
            <div className="collapse" id="labels" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="labels/page-label-points/">Label Points</Link>
                <Link to="labels/page-label-status/">Label Status</Link>
                <Link to="labels/page-label-goal/">Label Goal</Link>
                <Link to="labels/page-label-likes/">Label Likes</Link>
                <Link to="labels/page-label-related-goals/">
                  Label Related Goals
                </Link>
                <Link to="labels/page-label-numeric-light/">
                  Label Numeric Light
                </Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#tabs"
              data-toggle="collapse"
              data-target="#tabs"
            >
              Tabs
            </a>
            <div className="collapse" id="tabs" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="tabs/page-tabs-01/">Tabs-01 - Horizontal Tab</Link>
                <Link to="tabs/page-tabs-02/">Tabs-02 - Light Tab</Link>
                <Link to="tabs/page-tabs-03/">Tabs-03 - Buttons Tab</Link>
                <Link to="tabs/page-tabs-04/">Tabs-04 - Vertical Tab</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/page-stepper/">Stepper</Link>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#news"
              data-toggle="collapse"
              data-target="#news"
            >
              News
            </a>
            <div className="collapse" id="news" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="news/page-news-01">News-01</Link>
                <Link to="news/page-news-02/">News-02</Link>
                <Link to="news/page-news-03/">News-03</Link>
                <Link to="news/page-news-04/">News-04</Link>
                <Link to="news/page-news-05/">News-05</Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#events"
              data-toggle="collapse"
              data-target="#events"
            >
              Events
            </a>
            <div className="collapse" id="events" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="events/page-events-01">Event-01</Link>
                <Link to="events/page-events-02/">Event-02</Link>
                <Link to="events/page-events-03/">Event-03</Link>
                <Link to="events/page-events-04/">Event-04</Link>
                <Link to="events/page-events-05/">Event-05</Link>
                <Link to="events/page-events-06/">Event-06</Link>
                <Link to="events/page-events-07/">Event-07</Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#goals"
              data-toggle="collapse"
              data-target="#goals"
            >
              Goals
            </a>
            <div className="collapse" id="goals" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="goals/page-goals-01">Goal-01</Link>
                <Link to="goals/page-goals-02">Goal-02</Link>
                <Link to="goals/page-goals-03">Goal-03 - Related</Link>
                <Link to="goals/page-goals-04">Goal-04 - Register</Link>
                <Link to="goals/page-goals-05">Goal-05 - Targets </Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#featured"
              data-toggle="collapse"
              data-target="#featured"
            >
              Featured
            </a>
            <div className="collapse" id="featured" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="featured/page-featured-01">Featured-01</Link>
                <Link to="featured/page-featured-02">Featured-02</Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#jumbotrons"
              data-toggle="collapse"
              data-target="#jumbotrons"
            >
              Jumbotrons
            </a>
            <div className="collapse" id="jumbotrons" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="jumbotrons/page-jumbotron-01">
                  Jumbotron-01 - Home
                </Link>
                <Link to="jumbotrons/page-jumbotron-02">
                  Jumbotron-02 - Goals
                </Link>
                <Link to="jumbotrons/page-jumbotron-03">
                  Jumbotron-03 - Event type 1
                </Link>
                <Link to="jumbotrons/page-jumbotron-04">
                  Jumbotron-04 - Event type 2
                </Link>
                <Link to="jumbotrons/page-jumbotron-05">
                  Jumbotron-05 - Event type 3
                </Link>
                <Link to="jumbotrons/page-jumbotron-06">
                  Jumbotron-06 - Partnerships
                </Link>
                <Link to="jumbotrons/page-jumbotron-07">
                  Jumbotron-07 - Topics
                </Link>
                <Link to="jumbotrons/page-jumbotron-08">
                  Jumbotron-08 - Action Networks
                </Link>
                <Link to="jumbotrons/page-jumbotron-09">
                  Jumbotron-09 - Special Event
                </Link>
                <Link to="jumbotrons/page-jumbotron-10">
                  Jumbotron-10 - Special Event (about)
                </Link>
                <Link to="jumbotrons/page-jumbotron-11">
                  Jumbotron-11 - States
                </Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#publications"
              data-toggle="collapse"
              data-target="#publications"
            >
              Publications
            </a>
            <div className="collapse" id="publications" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="publications/page-publications-01">
                  Publication-01
                </Link>
                <Link to="publications/page-publications-02">
                  Publication-02
                </Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#topics"
              data-toggle="collapse"
              data-target="#topics"
            >
              Topics
            </a>
            <div className="collapse" id="topics" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="topics/page-topic-01">Topic-01</Link>
                <Link to="topics/page-topic-02">Topic-02 - Related</Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#partnerships"
              data-toggle="collapse"
              data-target="#partnerships"
            >
              Partnerships
            </a>
            <div className="collapse" id="partnerships" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="partnerships/page-partnership-01">
                  Partnership-01
                </Link>
                <Link to="partnerships/page-partnership-02">
                  Partnership-02
                </Link>
                <Link to="partnerships/page-partnership-03">
                  Partnership-03
                </Link>
                <Link to="partnerships/page-partnership-04">
                  Partnership-04
                </Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#charts"
              data-toggle="collapse"
              data-target="#charts"
            >
              Charts
            </a>
            <div className="collapse" id="charts" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="charts/page-chart-01">Chart-01 </Link>
                <Link to="charts/page-chart-02">
                  Chart-02 - Partnerships - By years
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/page-comment/">Comment</Link>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#documents"
              data-toggle="collapse"
              data-target="#documents"
            >
              Documents
            </a>
            <div className="collapse" id="documents" aria-expanded="false">
              <div className="d-flex flex-column pl-4">
                <Link to="documents/page-document-01">Document-01</Link>
                <Link to="documents/page-document-02">Document-02</Link>
                <Link to="documents/page-document-03">Document-03</Link>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#informative-links"
              data-toggle="collapse"
              data-target="#informative-links"
            >
              Informative Links
            </a>
            <div
              className="collapse"
              id="informative-links"
              aria-expanded="false"
            >
              <div className="d-flex flex-column pl-4">
                <Link to="infolinks/page-infolink-01">Informative Link-01</Link>
                <Link to="infolinks/page-infolink-02">Informative Link-02</Link>
                <Link to="infolinks/page-infolink-03">Informative Link-03</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/page-timeline/">TimeLine</Link>
          </li>
          <li>
            <a
              className="dropdown-toggle"
              href="#content-modules"
              data-toggle="collapse"
              data-target="#content-modules"
            >
              Content Modules
            </a>
            <div
              className="collapse"
              id="content-modules"
              aria-expanded="false"
            >
              <div className="d-flex flex-column pl-4">
                <Link to="content-modules/page-content-module-01">
                  Content Module-01
                </Link>
                <Link to="content-modules/page-content-module-02">
                  Content Module-02
                </Link>
                <Link to="content-modules/page-content-module-03">
                  Content Module-03
                </Link>
                <Link to="content-modules/page-content-module-04">
                  Content Module-04
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/page-states/">States</Link>
          </li>
        </nav>
      </div>
      <div>
        <h3>VIEWS</h3>
        <nav class="nav flex-column">
          <li>
            <Link to="/page-home">Home</Link>
          </li>
          <li>
            <Link to="/page-goals">Goals</Link>
          </li>
          <li>
            <Link to="/page-goal-detail">Goal Detail</Link>
          </li>
          <li>
            <Link to="/page-topics">Topics</Link>
          </li>
          <li>
            <Link to="/page-topic-detail">Topic Detail</Link>
          </li>
          <li>
            <Link to="/page-events">Events</Link>
          </li>
          <li>
            <Link to="/page-event-type-1">Event Type 1</Link>
          </li>
          <li>
            <Link to="/page-event-type-2">Event Type 2</Link>
          </li>
          <li>
            <Link to="/page-event-type-3">Event Type 3</Link>
          </li>
          <li>
            <Link to="/page-register">Register</Link>
          </li>
          <li>
            <Link to="/page-news">News</Link>
          </li>
          <li>
            <Link to="/page-news-article">News Article</Link>
          </li>
          <li>
            <Link to="/page-partnerships ">Partnerships</Link>
          </li>
          <li>
            <Link to="/page-partnerships-general ">Partnerships General</Link>
          </li>
          <li>
            <Link to="/page-partnerships-description ">Partnerships Description</Link>
          </li>
          <li>
            <Link to="/page-states-block ">States</Link>
          </li>
          <li>
            <Link to="/page-state-detail ">State Detail</Link>
          </li>
        </nav>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
