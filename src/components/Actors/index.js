import React from "react";
import actor1 from "assets/images/actor1.png";
import actor2 from "assets/images/actor2.png";
import actor3 from "assets/images/actor3.png";
import actor4 from "assets/images/actor4.png";
import actor5 from "assets/images/actor5.png";
import actor6 from "assets/images/actor6.png";
import actor7 from "assets/images/actor7.png";
import "./actors.scss";

export const Actors = () => {
  return (
    <div id="actors">
      <div className="actor-img-wrapper">
        <img src={actor1} alt="main pic" />
        <div className="actor-name">Anna</div>
      </div>
      <div className="actor-img-wrapper">
        <img src={actor2} alt="main pic" />
        <div className="actor-name">YoYo</div>
      </div>
      <div className="actor-img-wrapper">
        <img src={actor3} alt="main pic" />
        <div className="actor-name">Skye</div>
      </div>
      <div className="actor-img-wrapper">
        <img src={actor4} alt="main pic" />
        <div className="actor-name">Mike</div>
      </div>
      <div className="actor-img-wrapper">
        <img src={actor5} alt="main pic" />
        <div className="actor-name">Vincent</div>
      </div>
      <div className="actor-img-wrapper">
        <img src={actor6} alt="main pic" />
        <div className="actor-name">Peter</div>
      </div>
      <div className="actor-img-wrapper">
        <img src={actor7} alt="main pic" />
        <div className="actor-name">May</div>
      </div>
    </div>
  );
};
