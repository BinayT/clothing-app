import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItems.scss";

const menuItems = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <div
    className={`${size} MenuItem`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="BackgroundImage"
    />
    <div className="Content">
      <h1 className="Title">{title.toUpperCase()}</h1>
      <span className="Subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(menuItems);
