import React from "react";
import "./video-script-textbox.scss";

export const VideoScriptTextbox = (props) => {
  return (
    <div id="video-script-textbox">
      <textarea
        className="typ-textarea"
        rows="5"
        placeholder="Type or paste your videoscript here. You can also request a translation of 
an English script to any of 27 other languages"
      ></textarea>
      <div className="controls-wrapper">
        <button className="btn btn-default typ-btn">Listen</button>
        {/* Haven't implemented dynamic char count.  However if it had to be done, it would 
        have been this component */}
        <span className="typ-charcount">0 char</span>
      </div>
    </div>
  );
};
