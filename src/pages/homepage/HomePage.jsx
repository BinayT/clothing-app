import React from "react";
import classes from "./HomePage.module.scss";
import Directory from "../../components/directory/Directory";

const HomePage = () => (
  <div className={classes.HomePage}>
    <Directory />
  </div>
);

export default HomePage;
