import axios from "axios";
import { TMDB_KEY } from "../../configuration";

const IMAGE_URI = "https://image.tmdb.org/t/p/w500";

const getPopularMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
  );
  return res.data.results.slice(0, 20);
};

const getUpcomingMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=en-US&page=1`
  );
  return res.data.results.slice(0, 20);
};

const getPopularTv = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
  );
  return res.data.results.slice(0, 20);
};
const getTopRatedTv = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_KEY}&language=en-US&page=1`
  );
  return res.data.results.slice(0, 20);
};

const getAiringTv = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${TMDB_KEY}&language=en-US&page=1`
  );
  return res.data.results.slice(0, 20);
};
const getTvDetail = async (tvId) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${TMDB_KEY}&language=en-US`
  );
  return res.data;
};
const getMovieDetail = async (movieId) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_KEY}&language=en-US`
  );
  return res.data;
};

export {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getTopRatedTv,
  getAiringTv,
  getMovieDetail,
  getTvDetail,
  IMAGE_URI,
};
