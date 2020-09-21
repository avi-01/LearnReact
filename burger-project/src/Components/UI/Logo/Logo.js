import React from "react";

import burgerLogo from "../../../assets/image/27.1 burger-logo.png.png" 
import classes from "./Logo.css"

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="My Burger" />
    </div>
  )
}

export default logo;
