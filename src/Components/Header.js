import React from "react";
import teamlogo from "../asset/teamlogo.jpg";
import user from "../asset/user.png";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Logo></Logo>
      <User></User>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="wrapper_logo">
      <img className="header_logo" src={teamlogo}></img>
    </div>
  );
};

const User = () => {
  return (
    <div className="wrapper_user">
      <img className="header_user" src={user}></img>
    </div>
  );
};

export default HeaderComponent;
