import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import Partnerships01 from "../components/Partnerships/Partnership-01";
import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Form/Checkbox";
import Input from "../components/Form/Input";
import Select from "../components/Form/Select";

const PagePartnershipsGeneral = () => (
  <>
    <SEO title="Partnerships General" />
    <Header />
    <main>
      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-3">
            <Dropdown title="SIDS" id="sids">
              {[...Array(14).keys()].map(goal => (
                <Checkbox id={`goal-${goal}`} label={`Goal ${goal}`} />
              ))}
            </Dropdown>
          </div>
          <div className="col-sm-12 col-md-8">
            <h5 className="border-bottom pb-2"> 1450 results</h5>
            <div className="d-flex">
              <Input type="search" />
              <Select id="short" />
            </div>

            <div className="row row-spacing">
              {[...Array(14)].map(topic => (
                <Partnerships01 className="col-12 col-sm-12 col-lg-6" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
    <FooterV2 />
  </>
);

export default PagePartnershipsGeneral;
