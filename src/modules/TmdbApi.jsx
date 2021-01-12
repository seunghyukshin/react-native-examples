import axios from "axios";
import { TMDB_KEY } from "../../configuration";

const IMAGE_URI = "https://image.tmdb.org/t/p/w500";

const getPopularMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
  );
  return res.data.results.slice(0, 10);
};

export { getPopularMovies, IMAGE_URI };
