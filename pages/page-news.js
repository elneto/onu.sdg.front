import React from "react";
import Link from 'next/link'

const NewsPage = () => (
  <>
    <div className="container">
      <div className="heading-block">
        <h2>List of subcomponents</h2>
      </div>
    </div>
    <div className="container d-flex flex-column">
      <Link href="/news/page-news-01">News-01</Link>
      <Link href="/news/page-news-02">News-02</Link>
      <Link href="/news/page-news-03">News-03</Link>
      <Link href="/news/page-news-04">News-04</Link>
      <Link href="/news/page-news-05">News-05</Link>
    </div>
  </>
);

export default NewsPage;
