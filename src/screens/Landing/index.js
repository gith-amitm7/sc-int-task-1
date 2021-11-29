import React from "react";
import Header from "layout/Header";
import mainImage from "assets/images/main-image.png";
import { VideoScriptTextbox } from "components/VideoScriptTextbox";
import TabView from "components/TabView";
import "./landing.scss";

const Landing = () => {
  return (
    <div id="landing">
      <Header title="Saying Hi to my customers">
        <button className="btn btn-default typ-btn">Cancel</button>
        <button className="btn btn-success typ-btn">Save</button>
      </Header>
      <div className="h-seperator" />
      <div className="wrapper">
        <div className="image-text-wrapper">
          <div className="image-wrapper">
            <img src={mainImage} alt="main pic" />
            <button id="preview-btn" className="btn btn-info typ-btn">
              Preview
            </button>
          </div>
          <div className="text-wrapper">
            <VideoScriptTextbox />
          </div>
        </div>
        <div className="tab-wrapper">
          <TabView />
        </div>
      </div>
    </div>
  );
};

export default Landing;
