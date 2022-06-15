import React from "react";

function Search({ search, handleSearch }) {

  function handleChange(e) {
    handleSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type="text" value={search} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
