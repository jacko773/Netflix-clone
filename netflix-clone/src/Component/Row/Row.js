import instance from "../../API/axios";
import { useState, useEffect } from "react";

import "./Row.css";
import Poster from "../Poster";

const Row = ({ title, url, index }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    instance.get(url).then((res) => setMovies(res.data.results));
  }, [url]);

  const scrollLeft = (value) => {
    const element = document.getElementById(`row_${index}`);
    if (value > 0) {
      element.scrollLeft += window.innerWidth / 2;
    } else {
      element.scrollLeft -= window.innerWidth / 2;
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <div style={{ display: "flex" }} className="movie_row">
        <div
          style={{ position: "absolute", height: "280px" }}
          class="left_scroll"
        >
          <a onClick={() => scrollLeft(-1)}>❮</a>
        </div>

        <div
          id={`row_${index}`}
          style={{
            display: "flex",
            overflowY: "hidden",
            overflowX: "scroll",
            marginLeft: 5,
            marginRight: 5,
            scrollbarWidth: "none",
            transition: "transform 500ms",
          }}
        >
          {movies.map((movie) => (
            <Poster movie={movie}></Poster>
          ))}
        </div>
        <div
          style={{ position: "absolute", height: "280px", right: 0 }}
          class="right_scroll"
          onClick={() => scrollLeft(1)}
        >
          <a>❯</a>
        </div>
      </div>
    </div>
  );
};

export default Row;
