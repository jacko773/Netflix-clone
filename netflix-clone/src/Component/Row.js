import instance from "../axios";
import { useState, useEffect } from "react";
const baseURL_image = "https://image.tmdb.org/t/p/w500";
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
      <button onClick={() => scrollLeft(-1)}>scroll left</button>
      <button onClick={() => scrollLeft(1)}>scroll right</button>
      <div
        id={`row_${index}`}
        style={{
          display: "flex",
          overflowY: "hidden",
          overflowX: "scroll",
          marginLeft: 10,
          scrollbarWidth: "none",
          transition: "ease-in",
          transitionDuration: "5s",
        }}
      >
        {movies.map((movie) => (
          <img
            src={baseURL_image + movie.poster_path}
            width={200}
            height={300}
            style={{ marginRight: 8 }}
            alt={movie.name || movie.title}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
