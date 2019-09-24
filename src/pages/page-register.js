import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import FooterV2 from "../components/FooterV2";
import GoalsRegisterBlock from "../components/Goals/Register/GoalsRegisterBlock";
import Stepper from "../components/Stepper";
import Heading from "../components/Heading";
import Input from "../components/Form/Input";
import TextArea from "../components/Form/TextArea";
import Button from "../components/Common/Button";

const PageRegister = () => (
  <>
    <SEO title="Register" />
    <Header />
    <main>
      <div className="container mb-5">
        <Heading text="Register" size="small" />
        <Stepper />
        <form className="form-register">
          <div className="col-12 col-md-6">
            <div className="form-header">
              <h3 className="form-title">Basic information</h3>
              <span className="form-label">* fields required</span>
            </div>

            <div className="row no-padding">
              <Input
                type="text"
                label="Title of commitment/partnership"
                placeholder="Text"
                className="col-12 col-lg-6"
                subLabel="Title of commitment/partnership"
                required
              />
              <Input
                type="text"
                label="Location"
                placeholder="Text"
                className="col-12 col-lg-6"
                subLabel="City/town or country"
                required
              />
            </div>
            <TextArea
              label="Partners"
              subLabel="List all organizations, entities, stakeholder networks that are involved in this initiative"
              placeholder="Text"
            />
          </div>
        </form>
        <GoalsRegisterBlock goals={17} />
        <div className="d-flex justify-content-end">
          <Button className="btn-primary">Next step</Button>
        </div>
      </div>
    </main>
    <FooterV2 />
  </>
);

export default PageRegister;
