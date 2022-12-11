import React from "react";
import { useState } from "react";
import teamData from "./Team/teamData";

const searchMember = (searchText) => {
  // Logic for searching inside data
  return teamData.filter(
    (res) =>
      res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      res.companyOrCollege
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ setFilteredResult }) => {
  const [searchText, setsearchText] = useState("");
  return (
    <div className="wrapper_search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredResult = searchMember(searchText);
          setFilteredResult(filteredResult);
        }}
      >
        <input
          type="text"
          id="header-search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
