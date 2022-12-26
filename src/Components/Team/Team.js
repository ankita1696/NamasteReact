import React, { useState, useEffect } from "react";
import logo from "./../../asset/teamlogo.jpg";
import { Ids } from "../../Common/TeamConstants";
import CardComponent from "./Card";
import SearchBar from "../SearchBar";
import { fetchTeamMember } from "../../Common/Config";

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
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const teamData = await fetchTeamMember(Ids);
    setData(teamData);
    setFilteredResult(teamData);
  };

  return (
    <>
      <SearchBar
        setFilteredResult={setFilteredResult}
        teamData={data}
      ></SearchBar>
      <div className="card-container">
        <CardContainer filteredResult={filteredResult} />
      </div>
    </>
  );
};

export default TeamComponent;
