import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(e) {
    e.preventDefault();
    alert(`Searching for...${keyword}`);
  }

  function handleKeywordChange(e) {
    setKeyword(e.target[0].value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button>Search</button>
      </form>
    </div>
  );
}
