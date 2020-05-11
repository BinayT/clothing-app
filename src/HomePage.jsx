import React from "react";
import classes from "./HomePage.module.scss";
const HomePage = () => (
  <div className={classes.HomePage}>
    <div className={classes.DirectoryMenu}>
      <div className={classes.MenuItem}>
        <div className={classes.Content}>
          <h1 className={classes.Title}>HATS</h1>
          <span className={classes.Subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={classes.MenuItem}>
        <div className={classes.Content}>
          <h1 className={classes.Title}>JACKETS</h1>
          <span className={classes.Subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={classes.MenuItem}>
        <div className={classes.Content}>
          <h1 className={classes.Title}>SNEAKERS</h1>
          <span className={classes.Subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={classes.MenuItem}>
        <div className={classes.Content}>
          <h1 className={classes.Title}>WOMENS</h1>
          <span className={classes.Subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={classes.MenuItem}>
        <div className={classes.Content}>
          <h1 className={classes.Title}>MENS</h1>
          <span className={classes.Subtitle}>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
