import React from "react";
import "./style.scss";
import TabsLight from "../Tabs/TabsLight";
import Input from "../Form/Input";
import Button from "../Common/Button";

const tabs = [
  { label: "Sign in", id: "sign" },
  { label: "create account", id: "create" }
];

const LoginModal = () => (
  <div
    className="modal"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog login-modal" role="document">
      <div className="modal-content">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <TabsLight tabs={tabs}>
          <div className="sign-content">
            <h3 className="title">Sign in</h3>
            <form>
              <Input
                type="text"
                placeholder="Username"
                label="Username/E-mail"
              />
              <Input type="password" placeholder="Password" label="Password" />
              <Button className="btn-secondary w-100">Sign in</Button>
              <a className="recover" href="#">
                Forgot password?
              </a>
              {/* <Button className="btn-facebook w-100">Sign in</Button> */}
              <p className="help">
                If you have any questions, please{" "}
                <a href="#">Contact us here </a>
              </p>
            </form>
          </div>
          <div className="create-content">
            <h3 className="title">Create account</h3>
            <form className="row">
              <Input
                type="text"
                placeholder="First name"
                label="First name"
                className="col-sm-12 col-lg-6"
              />
              <Input
                type="text"
                placeholder="Last name"
                label="Last name"
                className="col-sm-12 col-lg-6"
              />
              <Input
                type="text"
                placeholder="Organization"
                label="Organization / entity"
                className="col-sm-12 col-lg-6"
              />
              <Input
                type="mail"
                placeholder="E-mail"
                label="E-mail"
                className="col-sm-12 col-lg-6"
              />
              <div className="col-12 d-flex">
                <div className="code">8567</div>
                <a href="#" className="recover">Code not readable? Change code in box.</a>
              </div>
              <Input
                type="text"
                placeholder="Code"
                subLabel="Please enter code from above box"
                className="col-12"
              />
              <Button className="btn-secondary w-100">Create account</Button>
              <p className="col-12 help">
                If you have any questions, please{" "}
                <a href="#">Contact us here </a>
              </p>
            </form>
          </div>
        </TabsLight>
        <div className="modal-body"></div>
      </div>
    </div>
  </div>
);

export default LoginModal;
