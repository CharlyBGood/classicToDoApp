import React from "react";
import Logo from "../img/horse.png";
import "../stylesheets/LogoImg.css";

function LogoImg() {
  return (
    <div className="img-logo-container">
      <img className="img-logo" src={Logo} alt="nostatenode horse logo" />
    </div>
  );
}


export default LogoImg;