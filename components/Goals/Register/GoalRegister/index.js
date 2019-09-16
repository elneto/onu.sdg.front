import React from "react";
import Checkbox from '../../../Form/Checkbox';
import "./style.scss";

const GoalRegister = ({ goal }) => (
  <>
    <div
      className={`card goal-register goal-${goal} col-xs-12 col-md-6 col-lg-4`}
    >
      <div className="card-body">
        <div className="goal-label">
          <span className="goal-number">{goal}</span>
          <img className="d-none" src="/assets/images/check.svg" />
        </div>
        <div className="goal-content">
          <h4 className="goal-title">Life below water</h4>
          <div className="goal-link">
            <div className="goal-targets">
              <button
                type="button"
                className="btn target"
                data-container="body"
                data-toggle="popover"
                data-placement="top"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                1.1
              </button>
              <button
                type="button"
                className="btn target"
                data-container="body"
                data-toggle="popover"
                data-placement="top"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                1.1
              </button>
              <button
                type="button"
                className="btn target"
                data-container="body"
                data-toggle="popover"
                data-placement="top"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                1.1
              </button>
              <button
                type="button"
                className="btn target"
                data-container="body"
                data-toggle="popover"
                data-placement="top"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                1.1
              </button>
              <span className="more-targets">(5)</span>
            </div>
            <a
              type="button"
              className="link"
              data-toggle="modal"
              data-target={`#goal-${goal}`}
            >
              Add targets
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id={`goal-${goal}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog goal-modal goal-${goal}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Select the targets
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="goal-header">
              <div className="">
                <div className="goal-number">{goal}</div>
                <div className="goal-title">Good health and well-being</div>
              </div>

              <Checkbox label={"ONU-55"} />

              <button className="btn btn-un btn-primary">Add targets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default GoalRegister;
