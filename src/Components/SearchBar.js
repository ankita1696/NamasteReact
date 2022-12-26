import React from "react";
import { useState } from "react";

const searchMember = (searchText, teamData) => {
  // Logic for searching inside data
  return teamData.filter(
    (res) =>
      res?.login
        ?.toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase()) ||
      res?.location
        ?.toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ setFilteredResult, teamData }) => {
  const [searchText, setsearchText] = useState("");
  return (
    <div className="wrapper_search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredResult = searchMember(searchText, teamData);
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
