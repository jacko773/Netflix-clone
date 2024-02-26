import { useState } from "react";
import axios from "../../API/axios";
import request from "../../API/request";
import "./Search.css";
const Search = () => {
  const [query, setQuery] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    axios.get(`${request.search}?query=${query}`).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="nav_search">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies"
        className="search_input"
      />
      <button type="button" className="cancel-button" onClick={handleSubmit}>
        search
      </button>
      <button type="button" className="search-button">
        X
      </button>
    </div>
  );
};

export default Search;
