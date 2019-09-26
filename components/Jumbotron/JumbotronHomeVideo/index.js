import React from "react";
import "./style.scss";

const JumbotronHomeVideo = () => (
  <div className="home-video">
    <video controls muted autoPlay > 
      <source src="/static/assets/video/1920x1080-home-video.mp4" type="video/mp4" />
    </video>
  </div>
);

export default JumbotronHomeVideo;
