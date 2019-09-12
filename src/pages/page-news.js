import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
const NewsPage = () => (
  <Layout>
    <Link to="news/page-news-01">News-01</Link>
    <Link to="news/page-news-02/">News-02</Link>
    <Link to="news/page-news-03/">News-03</Link>
    <Link to="news/page-news-04/">News-04</Link>
    <Link to="news/page-news-05/">News-05</Link>
  </Layout>
);

export default NewsPage;
