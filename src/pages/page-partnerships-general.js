import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import Partnerships01 from "../components/Partnerships/Partnership-01";
import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Form/Checkbox";
import Input from "../components/Form/Input";
import Select from "../components/Form/Select";
import LabelToast from "../components/Labels/LabelToast";

const PagePartnershipsGeneral = () => (
  <>
    <SEO title="Partnerships General" />
    <Header />
    <main>
      <section className="container mt-5">
        <div className="row justify-content-between no-gutters ">
          <div className="col-sm-12 col-md-3">
            <Dropdown title="SIDS" id="sids" className="col-12 mb-5">
              {[...Array(14).keys()].map(goal => (
                <Checkbox id={`goal-${goal}`} label={`Goal ${goal}`} />
              ))}
            </Dropdown>
            <Dropdown
              title="Action networks & databases"
              id="networks"
              className="col-12 mb-5"
            >
              {[...Array(14).keys()].map(index => (
                <Checkbox id={`network-${index}`} label="Business for 2030" />
              ))}
            </Dropdown>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="row mb-3">
              <div className="col">
                <div className="d-flex border-bottom">
                  <h5>1450 results</h5>
                  <div className="d-flex ml-auto">
                    <button className="btn btn-results group">
                      <div className="rectangle"></div>
                      <div className="rectangle"></div>
                      <div className="rectangle"></div>
                      <div className="rectangle"></div>
                    </button>
                    <button className="btn btn-results list">
                      <div className="rectangle"></div>
                      <div className="rectangle"></div>
                      <div className="rectangle"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <Input type="search" label="Search" />
              </div>
              <div className="col-12 col-md-6">
                <Select id="short" label="Short by" />
              </div>
            </div>
            <div className="col-12 d-flex mb-3">
              <LabelToast className="mr-2">Goal 1</LabelToast>
              <LabelToast className="mr-2">Goal 7</LabelToast>
              <LabelToast className="mr-2">Every woman, every child</LabelToast>
            </div>
            <div className="row row-spacing">
              {[...Array(14)].map(topic => (
                <Partnerships01 className="col-12 col-sm-12 col-lg-6" />
              ))}
            </div>
            <div className="col-12">
              <button
                class="btn btn-primary btn-spinner w-100 mb-5"
                type="button"
                disabled
              >
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="text">Loading more partnership</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <FooterV2 />
  </>
);

export default PagePartnershipsGeneral;
