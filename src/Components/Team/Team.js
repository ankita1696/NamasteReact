import React, { useState } from "react";
import logo from "./../../asset/teamlogo.jpg";
import { teamData } from "./teamData";
import CardComponent from "./Card";
import SearchBar from "../SearchBar";

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

const CardContainer = ({ filteredResult }) => {
  return filteredResult.map((team) => (
    <CardComponent team={team} key={team.discord} />
  ));
};

const TeamBody = () => {
  const [filteredResult, setFilteredResult] = useState(teamData);
  return (
    <>
      <SearchBar setFilteredResult={setFilteredResult}></SearchBar>
      <div className="card-container">
        <CardContainer filteredResult={filteredResult} />
      </div>
    </>
  );
};

export default TeamComponent;
