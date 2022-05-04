import React from "react";

const Youtube = () => (
  <div id="video_div" className="video-responsive">
    <iframe id="video_iframe"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/NUYvbT6vTPs"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
    </iframe>
  </div>
);
export default Youtube

