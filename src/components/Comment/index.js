import React from "react";
import "./style.scss";
import Link from "../Common/Link";

const Comment = () => (
  <div className="col-12 comment-card">
    <div class="card">
      <div className="user-image"></div>
      <div class="card-body">
        <span className="user-name">John Deacon</span>
        <span className="comment-date">4 July 2019 at 4:29 AM</span>
        <p class="comment-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link>Reply</Link>
      </div>
    </div>
  </div>
);

export default Comment;
