import React from "react";

const CardComponent = ({ team: {avatar_url,login,location}}) => {
  return (
    <div id="card" className="card">
      <img src={avatar_url} />
      <div className="data_container">
        <h2>{login}</h2>
        <h3>{location}</h3>
      </div>
    </div>
  );
};

export default CardComponent;
