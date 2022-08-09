import React from "react";
import Logo from "../img/fcc-logo.svg";
import "../stylesheets/LogoFcc.css";

function LogoFcc() {
  return (
    <div className="fcc-logo-container">
      <img className="fcc-logo" src={Logo} alt="freeCodeCamp logo" />
    </div>
  );
}


export default LogoFcc;