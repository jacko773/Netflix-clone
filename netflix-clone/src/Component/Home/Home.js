import Row from "../Row/Row";
import request from "../../API/request";
import Nav from "../Nav";
import Banner from "../Banner";

const movie = [
  { title: "Netflix original", url: `${request.fetchNetflixOriginal}` },
  { title: "Treding", url: `${request.fetchTrending}` },
  { title: "Top rated", url: `${request.fetchTopRated}` },
  { title: "Action Movies", url: `${request.fetchActionMovies}` },
  { title: "Comedy movies", url: `${request.fetchComedyMovies}` },
  { title: "Horror movies", url: `${request.fetchHorrorMovies}` },
  { title: "Romance movies", url: `${request.fetchRomanceMovies}` },
  { title: "Documentry", url: `${request.fetchDocumentries}` },
];

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      {movie.map((data, index) => (
        <Row {...data} index={index} />
      ))}
    </>
  );
};

export default Home;
