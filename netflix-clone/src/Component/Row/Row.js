import instance from "../../API/axios";
import { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import VideoPlayer from "../Player/VideoPlayer";

import "./Row.css";

const baseURL_image = "https://image.tmdb.org/t/p/w500";
const Row = ({ title, url, index }) => {
  const [movies, setMovies] = useState([]);
  const [movieTrailerId, setMovieTrailerId] = useState(null);

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

  const getMovieTrailer = (name) => {
    movieTrailer(name)
      .then((response) => {
        const urlParams = new URLSearchParams(new URL(response).search);
        const videoId = urlParams.get("v");
        setMovieTrailerId(videoId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEnd = (data) => {
    setMovieTrailerId(null);
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
            marginLeft: 10,
            scrollbarWidth: "none",
            transition: "transform 500ms",
          }}
        >
          {movies.map((movie) => (
            <img
              src={baseURL_image + movie.poster_path}
              width={200}
              height={300}
              style={{ marginRight: 8, cursor: "pointer" }}
              alt={movie.name || movie.title}
              onClick={() => getMovieTrailer(movie.name || movie.title)}
            ></img>
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
      <div
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {movieTrailerId && (
          <VideoPlayer videoId={movieTrailerId} onEnd={onEnd}></VideoPlayer>
        )}
      </div>
    </div>
  );
};

export default Row;
