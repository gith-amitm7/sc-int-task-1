import React from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <div id="header">
      <div id="title" className="typ-page-title">
        {props.title}
      </div>
      {props.children ? <div id="header-actions">{props.children}</div> : null}
    </div>
  );
};

export default React.memo(Header);
