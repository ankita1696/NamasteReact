import React from "react";

const CardComponent = ({ team: {img,name,companyOrCollege,experienceOrSemester,location}}) => {
  return (
    <div id="card" className="card">
      <img src={img} />
      <div className="data_container">
        <h2>{name}</h2>
        <h3>{companyOrCollege}</h3>
        <h4>{experienceOrSemester}</h4>
        <h5>{location}</h5>
      </div>
    </div>
  );
};

export default CardComponent;
