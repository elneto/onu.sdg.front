import React from "react";
import Link from 'next/link'

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="heading-block">
        <h2>List of components</h2>
      </div>
    </div>
    <div className="d-flex flex-column container">
      <Link href="/page-home">Home</Link>
      <Link href="/page-header">Header</Link>
      <Link href="/page-footer">Footer</Link>
      <Link href="/page-news">News</Link>
      <div v-example=''>
        Pulsa aquí para probar una directiva vue
      </div>
    </div>
  </Layout>
);

export default IndexPage;
