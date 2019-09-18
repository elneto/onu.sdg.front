import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="heading-block">
        <h2>List of components</h2>
      </div>
      <nav class="nav flex-column">
        <li>
          <Link to="/page-home">Home</Link>
        </li>
        <li>
          <Link to="/page-header/">Header</Link>
        </li>
        <li>
          <Link to="/page-footer/">Footer</Link>
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
      </nav>
    </div>
  </Layout>
);

export default IndexPage;
