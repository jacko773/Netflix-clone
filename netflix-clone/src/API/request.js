const request = {
  fetchTrending: `/trending/movie/week?language=en-US`,
  fetchNetflixOriginal: `/discover/tv?with_network=123`,
  fetchTopRated: `/movie/top_rated?language=en-US`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentries: `/discover/movie?with_genres=99`,
  search: `/search/movie`,
};

export default request;
