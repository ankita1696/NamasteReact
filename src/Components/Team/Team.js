import React from "react";
import logo from "./../../asset/teamlogo.jpg";
import { teamData } from "./teamData";
import CardComponent from "./Card";

const TeamComponent = () => {
  return (
    <>
      <TeamHeader></TeamHeader>
      <TeamBody></TeamBody>
    </>
  );
};

const TeamHeader = () => {
  return (
    <div className="wrapper_logo">
      <img className="header_logo" src={logo}></img>
    </div>
  );
};

const CardContainer = () => {
  return teamData.map((team) => (
    <CardComponent team={team} key={team.discord} />
  ));
};

const TeamBody = () => (
  <div className="card-container">
    <CardContainer />
  </div>
);

export default TeamComponent;
