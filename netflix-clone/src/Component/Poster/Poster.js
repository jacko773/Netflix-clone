import movieTrailer from "movie-trailer";
import { useState } from "react";
import VideoPlayer from "../Player/VideoPlayer";
import "./Poster.css";

const baseURL_image = "https://image.tmdb.org/t/p/w500";

const Poster = ({ movie }) => {
  const [movieUrl, setMovieUrl] = useState(null);

  const getMovieTrailer = (name) => {
    movieTrailer(name)
      .then((response) => {
        setMovieUrl(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onMouseEnter = () => {
    getMovieTrailer(movie.name || movie.title);
  };
  return (
    <div className="movie_card" onMouseEnter={() => onMouseEnter()}>
      <img
        className="movie_poster"
        src={baseURL_image + movie.poster_path}
        width={200}
        height={300}
        style={{ marginRight: 8, cursor: "pointer" }}
        alt={movie.name || movie.title}
      ></img>
      <div className="movie_video">
        <VideoPlayer
          url={movieUrl}
          //   controls={true}
          height={300}
          width={500}
          muted={true}
          playing={true}
        ></VideoPlayer>
      </div>
    </div>
  );
};

export default Poster;
