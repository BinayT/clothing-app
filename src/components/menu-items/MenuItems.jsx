import React from "react";
import "./MenuItems.scss";

const menuItems = ({ title, imageUrl, size }) => (
  <div className={`${size} MenuItem`}>
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

export default menuItems;
