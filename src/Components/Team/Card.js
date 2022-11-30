import React from "react";

const CardComponent = ({ team }) => {
  return (
    <div id="card" className="card">
      <img src={team.img} />
      <div className="data_container">
        <h2>{team.name}</h2>
        <h3>{team.companyOrCollege}</h3>
        <h4>{team.experienceOrSemester}</h4>
        <h5>{team.location}</h5>
      </div>
    </div>
  );
};

export default CardComponent;
